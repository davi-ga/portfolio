import { C, F } from ".././theme";

/**
 * Stat — large display number with a small descriptive label below.
 * Used in the About section left column.
 *
 * Props:
 *   value — displayed number/string (e.g. "3+", "IFG")
 *   label — descriptor below the value
 */
const Stat = ({ value, label }) => (
  <div>
    <p
      style={{
        fontFamily: F.sans,
        fontSize: "34px",
        fontWeight: 700,
        color: C.text,
        margin: 0,
        letterSpacing: "-0.02em",
      }}
    >
      {value}
    </p>
    <p
      style={{
        fontFamily: F.mono,
        fontSize: "10px",
        color: C.muted,
        margin: "5px 0 0",
        letterSpacing: "0.04em",
      }}
    >
      {label}
    </p>
  </div>
);

export default Stat;
