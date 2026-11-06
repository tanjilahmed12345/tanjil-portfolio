import React from "react";
import "./ContactCSS.css";
import { profile } from "../../data/portfolio";

const Contact = () => {
  return (
    <>
      <div id="Contact" className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand-logo">{profile.name.toUpperCase()}</div>
            <div className="brand-subtitle">{profile.footerSubtitle}</div>
          </div>

          <div className="footer-icons">
            <p className="footer-find-text">You can find me here✌</p>
            <div className="icon-links">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin footer-icon"></i>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fa-brands fa-github footer-icon"></i>
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email">
                <i className="fa-solid fa-envelope footer-icon"></i>
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Résumé"
              >
                <i className="fa-solid fa-file-lines footer-icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-border">
          <p className="footer-text">
            {new Date().getFullYear()} ❤️ © Designed and built by {profile.name}.
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
