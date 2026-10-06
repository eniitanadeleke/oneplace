/* Brand marks drawn inline so they do not depend on the icon library. */
const base = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
export const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} {...base}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="0.6" fill="currentColor"/></svg>
);
export const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} {...base}><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8a1 1 0 0 1 1-1Z"/></svg>
);
