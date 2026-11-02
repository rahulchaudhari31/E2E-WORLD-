/**
 * sendContact — Central contact submission helper.
 *
 * TODO: Replace the simulated delay below with EmailJS or a backend API call.
 * Example:
 *   import emailjs from '@emailjs/browser';
 *   return emailjs.send(serviceId, templateId, payload, publicKey);
 */
const sendContact = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1400));

  return { success: true };
};

export default sendContact;
