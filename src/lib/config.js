// Central configuration for SWB contact details.
// The WhatsApp number lives here only; each call site passes its own
// context-specific pre-filled message.

export const WHATSAPP_NUMBER = '5511947391805';

// Human-readable form (e.g. "+55 11 ...") for display and tel: links, derived from WHATSAPP_NUMBER.
export const WHATSAPP_DISPLAY = `+${WHATSAPP_NUMBER.slice(0, 2)} ${WHATSAPP_NUMBER.slice(2, 4)} ${WHATSAPP_NUMBER.slice(4)}`;

/**
 * Builds a wa.me link for the SWB WhatsApp number.
 * @param {string} [message] Optional pre-filled message, URL-encoded into the `text` param.
 * @returns {string}
 */
export function getWhatsAppLink(message) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
