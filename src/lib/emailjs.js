export async function sendEmail(data) {
  // Get EmailJS configuration from environment variables with fallbacks
  const serviceId =
    import.meta.env.VITE_EMAILJS_SERVICE_ID ||
    process.env.EMAILJS_SERVICE_ID ||
    "default_service";
  const templateId =
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
    process.env.EMAILJS_TEMPLATE_ID ||
    "default_template";
  const publicKey =
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY ||
    process.env.EMAILJS_PUBLIC_KEY ||
    "default_key";

  if (!window.emailjs) {
    throw new Error("EmailJS library not loaded");
  }

  try {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
      to_name: "Arnab Dinda",
    };

    await window.emailjs.send(serviceId, templateId, templateParams, publicKey);
  } catch (error) {
    console.error("EmailJS error:", error);
    throw new Error("Failed to send email");
  }
}
