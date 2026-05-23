import { C, F } from ".././theme";
import Triangle from "./Triangle";

/**
 * SectionLabel — small uppercase eyebrow text with triangle prefix.
 * Used at the top of every section to identify it.
 */
const SectionLabel = ({ children }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginBottom: "44px",
    }}
  >
    <Triangle size={7} color={C.muted} />
    <span
      style={{
        fontFamily: F.mono,
        fontSize: "10px",
        letterSpacing: "0.14em",
        color: C.muted,
        textTransform: "uppercase",
      }}
    >
      {children}
    </span>
  </div>
);

export default SectionLabel;
