import { ArrowUpRight } from "lucide-react";
import { C, F } from ".././theme";

/**
 * CTAButton — primary yellow call-to-action.
 * Used once in the Hero section.
 *
 * Props:
 *   href     — anchor href
 *   children — label text
 */
const CTAButton = ({ href, children }) => (
  <a
    href={href}
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "7px",
      padding: "11px 22px",
      background: C.accent,
      color: C.bg,
      fontSize: "11px",
      fontFamily: F.mono,
      letterSpacing: "0.08em",
      textDecoration: "none",
      fontWeight: 600,
      transition: "opacity 0.15s",
    }}
    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.82")}
    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
  >
    {children}
    <ArrowUpRight size={12} strokeWidth={2} />
  </a>
);

export default CTAButton;
