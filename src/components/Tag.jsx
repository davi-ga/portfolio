import { C, F } from ".././theme";

/**
 * Tag — small outlined monospace chip.
 * Used in Research (topic tags) and Hero (role tags at the bottom rule).
 *
 * Props:
 *   children — tag text
 *   faint    — use border color instead of muted (for the hero bottom rule)
 */
const Tag = ({ children, faint = false }) => (
  <span
    style={{
      fontFamily: F.mono,
      fontSize: faint ? "10px" : "9px",
      color: faint ? C.border : C.muted,
      border: `0.5px solid ${faint ? C.border : C.border}`,
      padding: "5px 11px",
      letterSpacing: "0.04em",
      textTransform: faint ? "uppercase" : "none",
    }}
  >
    {children}
  </span>
);

export default Tag;
