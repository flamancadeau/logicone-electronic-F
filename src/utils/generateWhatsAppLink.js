/**
 * Build a WhatsApp click-to-chat URL.
 * @param {string} [phone] - Digits only preferred (country code + number)
 * @param {string} [message] - Optional prefilled message
 */
export function generateWhatsAppLink(phone, message = '') {
  const number = (phone || import.meta.env.VITE_WHATSAPP_NUMBER || '250788123456').replace(/\D/g, '');
  const base = `https://wa.me/${number}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function formatPhoneDisplay(phone) {
  const digits = (phone || import.meta.env.VITE_WHATSAPP_NUMBER || '250788123456').replace(/\D/g, '');
  if (digits.startsWith('250') && digits.length >= 12) {
    return `+${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 9)} ${digits.slice(9)}`;
  }
  return phone || '+250 780 800 050';
}
