import { useState } from "react";
import axios from "axios";
import { FaPaperPlane } from "react-icons/fa6";
import { motion } from "motion/react";
import { slideInVariants } from "../../utils/animation";
import { validateFormData } from "../../utils/validateFormData";
import { getStatusMessage } from "../../utils/getStatusMessage";

const API_BASE_URL = "http://localhost:3001";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Clear errors as user types
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateFormData(formData);

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});
    setSubmitStatus("");

    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/contact`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000, // 10 seconds timeout
        }
      );

      if (response.data.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);

      if (error.code === "ECONNABORTED") {
        setSubmitStatus("timeout");
      } else if (error.response?.status === 400) {
        setSubmitStatus("validation");
      } else {
        setSubmitStatus("error");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {submitStatus && (
        <div
          className={`status-message ${getStatusMessage(submitStatus).type}`}
        >
          {getStatusMessage(submitStatus).message}
        </div>
      )}

      <form className="form contact-form" onSubmit={handleSubmit}>
        <motion.div
          className="first-row"
          custom={1}
          variants={slideInVariants("top", 0.7, 50, false)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <label htmlFor="name">Name *</label>
          <input
            placeholder="Your full name"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={errors.name ? "error" : ""}
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </motion.div>
        <motion.div
          className="second-row"
          custom={2}
          variants={slideInVariants("top", 0.7, 50, false)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <label htmlFor="email">Email *</label>
          <input
            placeholder="your.email@example.com"
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error" : ""}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
          <label htmlFor="subject">Subject *</label>
          <input
            placeholder="What's this about?"
            type="text"
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className={errors.subject ? "error" : ""}
          />
          {errors.subject && (
            <span className="error-text">{errors.subject}</span>
          )}
        </motion.div>
        <motion.div
          className="third-row"
          custom={3}
          variants={slideInVariants("top", 0.7, 50, false)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <label htmlFor="message">Message *</label>
          <textarea
            placeholder="Tell us more about your inquiry..."
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className={errors.message ? "error" : ""}
          />
          {errors.message && (
            <span className="error-text">{errors.message}</span>
          )}
        </motion.div>
        <motion.button
          className="contact-btn inner-info-link"
          type="submit"
          disabled={isSubmitting}
          custom={4}
          variants={slideInVariants("top", 0.7, 50, false)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          {isSubmitting ? (
            <>
              <span className="spinner"></span>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
          <FaPaperPlane />
        </motion.button>
      </form>
    </>
  );
};

export default ContactForm;
