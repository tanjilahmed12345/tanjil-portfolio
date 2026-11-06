/**
 * Content for the About Me section: the story, stat counters and quick facts.
 * Paragraphs are JSX so individual words can be bolded.
 */
export const about = {
  eyebrow: "My story",
  heading: "From competitive programming to production code.",
  paragraphs: [
    <>
      My path into software started with <b>competitive programming</b>. Solving 2,000+ problems and
      qualifying for the <b>ICPC Asia Dhaka Regional</b> taught me to break hard problems down and
      write code that is both correct and efficient.
    </>,
    <>
      At <b>Technext Limited</b> I turned that into production work: the pricing platform UI for
      GreySheet, a 140+ page multilingual SaaS site for OneSuite, and Shopify storefronts for brands
      in the USA. I learned to ship on deadlines, across Dev, Beta and Production, as part of a real
      team.
    </>,
    <>
      Today I build complete products on my own, from database schema to deployment, with{" "}
      <b>Next.js, Django REST Framework and PostgreSQL</b>. I care about clean architecture, fast
      pages and interfaces that feel effortless to use.
    </>,
  ],
  stats: [
    { value: "2+", label: "Years in industry" },
    { value: "8", label: "Projects shipped" },
    { value: "2,000+", label: "Problems solved" },
    { value: "2", label: "IEEE papers" },
  ],
  facts: [
    { icon: "fa-solid fa-location-dot", label: "Based in", value: "Sylhet, Bangladesh" },
    { icon: "fa-solid fa-graduation-cap", label: "Education", value: "B.Sc. in CSE, CGPA 3.80" },
    { icon: "fa-solid fa-language", label: "Languages", value: "English, Bengali, Hindi, Urdu" },
    { icon: "fa-solid fa-trophy", label: "Codeforces", value: "Expert, max rating 1678" },
  ],
};
