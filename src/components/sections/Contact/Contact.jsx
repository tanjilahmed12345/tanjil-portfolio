/**
 * Contact
 *
 * "Contact Me" form with floating labels.
 *
 * Sending:
 *  - With EmailJS keys configured (src/data/contact.js, read from
 *    REACT_APP_EMAILJS_* env vars) the message is sent in the background and
 *    a success or error banner is shown. The EmailJS library is only
 *    downloaded on first submit.
 *  - Without keys, submitting opens the visitor's mail app with the message
 *    pre-filled, so the form still works.
 */
import { useState } from "react";
import { motion } from "framer-motion";

import { emailjsConfig, profile } from "../../../data";
import "./Contact.css";

const EMPTY_FORM = { user_name: "", user_email: "", subject: "", message: "" };

/** How long the success banner stays visible. */
const SUCCESS_BANNER_MS = 6000;

const MESSAGES = {
  success: "Message sent successfully! I'll get back to you soon.",
  error: "Failed to send the message. Please try again or email me directly.",
};

/** Each field fades up; the form staggers them. */
const fieldAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const hasEmailJsKeys = () =>
  Boolean(emailjsConfig.serviceId && emailjsConfig.templateId && emailjsConfig.publicKey);

/** Fallback: open the visitor's mail client addressed to the site owner. */
const openMailClient = ({ user_name, user_email, subject, message }) => {
  const body = `${message}\n\nFrom: ${user_name} (${user_email})`;
  const mailSubject = subject || "Hello from your portfolio";
  window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
    mailSubject,
  )}&body=${encodeURIComponent(body)}`;
};

/**
 * Text input or textarea with a floating label and animated focus line.
 * The empty placeholder (" ") lets CSS detect the filled state.
 */
const FloatingField = ({
  name,
  label,
  value,
  onChange,
  type = "text",
  multiline = false,
  required = false,
}) => {
  const Field = multiline ? "textarea" : "input";
  return (
    <motion.div className="form-group floating-group" variants={fieldAnim}>
      <Field
        {...(multiline ? { rows: "3" } : { type })}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder=" "
        required={required}
      />
      <label htmlFor={name}>{label}</label>
      <span className="input-focus-line" />
    </motion.div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error" | null

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus(null);

    if (!hasEmailJsKeys()) {
      openMailClient(formData);
      return;
    }

    setIsSending(true);
    try {
      const { default: emailjs } = await import("emailjs-com");
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formData,
        emailjsConfig.publicKey,
      );
      setStatus("success");
      setFormData(EMPTY_FORM);
      setTimeout(() => setStatus(null), SUCCESS_BANNER_MS);
    } catch (error) {
      console.error("Contact form: EmailJS send failed", error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.div
      className="contact-form"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
    >
      <motion.h1
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <i className="fa-solid fa-user" /> Contact Me
      </motion.h1>

      <motion.form
        onSubmit={handleSubmit}
        initial="hidden"
        whileInView="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
      >
        {/* Result banner */}
        {status && (
          <motion.div
            className={`status-message ${status}`}
            role="status"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <i
              className={
                status === "success" ? "fa-solid fa-circle-check" : "fa-solid fa-circle-xmark"
              }
            />
            <span>{MESSAGES[status]}</span>
          </motion.div>
        )}

        <motion.div className="row" variants={fieldAnim}>
          <FloatingField
            name="user_name"
            label="Name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
          <FloatingField
            name="user_email"
            label="Email"
            type="email"
            value={formData.user_email}
            onChange={handleChange}
            required
          />
        </motion.div>

        <FloatingField
          name="subject"
          label="Subject"
          value={formData.subject}
          onChange={handleChange}
        />

        <FloatingField
          name="message"
          label="Message..."
          value={formData.message}
          onChange={handleChange}
          multiline
          required
        />

        <motion.button
          type="submit"
          className="contact-submit"
          disabled={isSending}
          whileHover={{ scale: isSending ? 1 : 1.05 }}
          whileTap={{ scale: isSending ? 1 : 0.95 }}
          variants={fieldAnim}
          style={{
            opacity: isSending ? 0.6 : 1,
            cursor: isSending ? "not-allowed" : "pointer",
            pointerEvents: isSending ? "none" : "auto",
          }}
        >
          {isSending ? (
            <>
              <i className="fa fa-spinner fa-spin" style={{ marginRight: "8px" }} />
              Sending...
            </>
          ) : (
            "Submit"
          )}
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
