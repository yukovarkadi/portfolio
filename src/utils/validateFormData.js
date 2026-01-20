import { validateEmail } from "./validateEmail.js";

export const validateFormData = (formData) => {
  const newErrors = {};

  if (!formData.name.trim()) {
    newErrors.name = "Name is required";
  } else if (formData.name.trim().length < 2) {
    newErrors.name = "Name must be at least 2 characters";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!validateEmail(formData.email)) {
    newErrors.email = "Please enter a valid email address";
  }

  if (!formData.subject.trim()) {
    newErrors.subject = "Subject is required";
  } else if (formData.subject.trim().length < 5) {
    newErrors.subject = "Subject must be at least 5 characters";
  }

  if (!formData.message.trim()) {
    newErrors.message = "Message is required";
  } else if (formData.message.trim().length < 10) {
    newErrors.message = "Message must be at least 10 characters";
  }

  return newErrors;
};
