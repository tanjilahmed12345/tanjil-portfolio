/**
 * App
 *
 * Page shell for the portfolio. The hero, navbar and background render
 * immediately; every section below the fold is code-split with React.lazy and
 * only mounted when it scrolls near the viewport (see <LazyMount>), which keeps
 * the first load small.
 */
import { lazy, Suspense } from "react";

import Background from "./components/layout/Background/Background";
import LoadingScreen from "./components/layout/LoadingScreen/LoadingScreen";
import Navbar from "./components/layout/Navbar/Navbar";
import Hero from "./components/sections/Hero/Hero";
import LazyMount from "./components/ui/LazyMount/LazyMount";
import { usePageLoader } from "./hooks/usePageLoader";

/**
 * Below-the-fold sections, in page order.
 * `minHeight` reserves space before a section mounts so the scrollbar and
 * anchor links stay stable while chunks load.
 */
const SECTIONS = [
  {
    key: "about",
    minHeight: "40vh",
    Component: lazy(() => import("./components/sections/About/About")),
  },
  {
    key: "education",
    minHeight: "30vh",
    Component: lazy(() => import("./components/sections/Education/Education")),
  },
  {
    key: "skills",
    minHeight: "40vh",
    Component: lazy(() => import("./components/sections/Skills/Skills")),
  },
  { key: "tape", Component: lazy(() => import("./components/sections/Tape/Tape")) },
  {
    key: "experience",
    minHeight: "50vh",
    Component: lazy(() => import("./components/sections/Experience/Experience")),
  },
  {
    key: "projects",
    minHeight: "50vh",
    Component: lazy(() => import("./components/sections/Projects/Projects")),
  },
  {
    key: "publications",
    minHeight: "30vh",
    Component: lazy(() => import("./components/sections/Publications/Publications")),
  },
  {
    key: "achievements",
    minHeight: "30vh",
    Component: lazy(() => import("./components/sections/Achievements/Achievements")),
  },
  {
    key: "activities",
    minHeight: "30vh",
    Component: lazy(() => import("./components/sections/Activities/Activities")),
  },
  {
    key: "coding-profiles",
    minHeight: "20vh",
    Component: lazy(() => import("./components/sections/CodingProfiles/CodingProfiles")),
  },
  {
    key: "contact",
    minHeight: "40vh",
    Component: lazy(() => import("./components/sections/Contact/Contact")),
  },
  { key: "footer", Component: lazy(() => import("./components/layout/Footer/Footer")) },
  {
    key: "scroll-to-top",
    Component: lazy(() => import("./components/layout/ScrollToTopButton/ScrollToTopButton")),
  },
];

function App() {
  const loading = usePageLoader();

  if (loading) return <LoadingScreen />;

  return (
    <>
      <Background />
      <Navbar />
      <Hero />

      {SECTIONS.map(({ key, minHeight, Component }) => (
        <LazyMount key={key} minHeight={minHeight}>
          <Suspense fallback={null}>
            <Component />
          </Suspense>
        </LazyMount>
      ))}
    </>
  );
}

export default App;
