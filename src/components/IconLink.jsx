import { C } from ".././theme";

/**
 * IconLink — wraps a lucide icon in an anchor.
 * Muted by default, brightens to C.text on hover.
 *
 * Props:
 *   href     — destination URL
 *   Icon     — lucide icon component
 *   size     — icon size in px (default 15)
 *   label    — aria-label for accessibility
 */
const IconLink = ({ href, Icon, size = 15, label }) => (
  <a
    href={href}
    aria-label={label}
    style={{
      color: C.muted,
      transition: "color 0.15s",
      display: "flex",
      alignItems: "center",
    }}
    onMouseEnter={(e) => (e.currentTarget.style.color = C.text)}
    onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
  >
    <Icon size={size} strokeWidth={1.5} />
  </a>
);

export default IconLink;
