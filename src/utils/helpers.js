/**
 * Utility functions for navigation, contact, and UI helpers
 */

export function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const navOffset = 80;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - navOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

export function formatWhatsAppUrl(number, message) {
  if (!number) return '#';
  const cleanNumber = number.replace(/[^0-9]/g, '');
  const encodedMsg = encodeURIComponent(message || '');
  return `https://wa.me/${cleanNumber}?text=${encodedMsg}`;
}
