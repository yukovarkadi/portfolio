export const getStatusMessage = (submitStatus) => {
  switch (submitStatus) {
    case "success":
      return {
        type: "success",
        message:
          "Thank you! Your message has been sent successfully. We'll get back to you soon!",
      };
    case "timeout":
      return {
        type: "error",
        message:
          "Request timed out. Please check your connection and try again.",
      };
    case "validation":
      return {
        type: "error",
        message: "Please check all fields and try again.",
      };
    default:
      return {
        type: "error",
        message:
          "Sorry, there was an error sending your message. Please try again later.",
      };
  }
};
