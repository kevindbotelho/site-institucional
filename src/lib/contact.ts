export function getWhatsAppUrl(number: string, message: string) {
  const sanitizedNumber = number.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${sanitizedNumber}?text=${encodedMessage}`;
}

export function getEmailUrl(email: string) {
  return `mailto:${email}`;
}
