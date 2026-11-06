/**
 * Footer
 *
 * Name, subtitle and social icons at the very bottom of the page. Carries
 * id="contact", the target of the navbar's "Contact" link.
 */
import { profile } from "../../../data";
import "./Footer.css";

/** Icon links shown in the footer. `external` links open in a new tab. */
const FOOTER_LINKS = [
  { href: profile.linkedin, icon: "fa-brands fa-linkedin", label: "LinkedIn", external: true },
  { href: profile.github, icon: "fa-brands fa-github", label: "GitHub", external: true },
  {
    href: `mailto:${profile.email}`,
    icon: "fa-solid fa-envelope",
    label: "Email",
    external: false,
  },
  { href: profile.resume, icon: "fa-solid fa-file-lines", label: "Résumé", external: true },
];

const Footer = () => (
  <div id="contact" className="footer">
    <div className="footer-content">
      <div className="footer-brand">
        <div className="brand-logo">{profile.name.toUpperCase()}</div>
        <div className="brand-subtitle">{profile.footerSubtitle}</div>
      </div>

      <div className="footer-icons">
        <p className="footer-find-text">You can find me here✌</p>
        <div className="icon-links">
          {FOOTER_LINKS.map(({ href, icon, label, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(external && { target: "_blank", rel: "noopener noreferrer" })}
            >
              <i className={`${icon} footer-icon`} />
            </a>
          ))}
        </div>
      </div>
    </div>

    <div className="footer-border">
      <p className="footer-text">
        {new Date().getFullYear()} ❤️ © Designed and built by {profile.name}.
      </p>
    </div>
  </div>
);

export default Footer;
