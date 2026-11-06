/**
 * Background
 *
 * Fixed, decorative layer behind the whole page: three drifting gradient
 * orbs, a fine grid and an edge vignette. Purely visual, so it is hidden
 * from assistive technology.
 */
import "./Background.css";

const Background = () => (
  <div className="bg-mesh" aria-hidden="true">
    {/* Animated gradient orbs */}
    <div className="bg-orb bg-orb-1" />
    <div className="bg-orb bg-orb-2" />
    <div className="bg-orb bg-orb-3" />

    {/* Grid overlay */}
    <div className="bg-grid" />

    {/* Soft vignette edges */}
    <div className="bg-vignette" />
  </div>
);

export default Background;
