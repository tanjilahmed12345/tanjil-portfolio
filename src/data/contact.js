/**
 * Contact form settings (EmailJS, https://www.emailjs.com).
 *
 * Keys come from environment variables (see .env.example). Until they are set,
 * the form falls back to opening the visitor's mail app.
 */
export const emailjsConfig = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || "",
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "",
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "",
};
