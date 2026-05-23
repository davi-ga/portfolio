import { C, F } from ".././theme";
import Triangle from "./Triangle";

/**
 * Logo — triangle mark + "DG" monogram.
 * Used in Nav and Footer.
 */
const Logo = () => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Triangle size={10} color={C.accent} />
        <span
            style={{
                fontFamily: F.mono,
                fontSize: "13px",
                letterSpacing: "0.08em",
                color: C.text,
                fontWeight: 400,
            }}
        >
            daviga
        </span>
    </div>
);

export default Logo;
