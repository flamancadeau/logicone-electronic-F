export function isRequired(value) {
  return Boolean(String(value ?? '').trim());
}

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || '').trim());
}

export function isValidPhone(phone) {
  return /^[+]?[\d\s-]{9,}$/.test(String(phone || '').trim());
}
