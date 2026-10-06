// The only ways to reach One Place: email, Instagram and Facebook.
// Replace these three placeholders with the real details. Used across the whole site.
export const contact = {
  email: "your-email@example.com",
  instagramHref: "https://www.instagram.com/",
  facebookHref: "https://www.facebook.com/",
};
export const mailto = (subject = "Enquiry from the One Place website", body = "") =>
  `mailto:${contact.email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ""}`;
