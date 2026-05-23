import { C, F } from "../theme";
import Logo from "../components/Logo";
import { useIsMobile } from "../hooks/useIsMobile";

/**
 * Footer — minimal strip.
 * Desktop: three-column. Mobile: stacked column.
 */
const Footer = () => {
    const isMobile = useIsMobile();

    return (
        <footer
            style={{
                borderTop: `0.5px solid ${C.border}`,
                padding: isMobile ? "22px 20px" : "22px 48px",
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                justifyContent: "space-between",
                alignItems: isMobile ? "flex-start" : "center",
                gap: isMobile ? "10px" : "0",
                maxWidth: "1100px",
                margin: "0 auto",
            }}
        >
            <Logo />
            <span
                style={{
                    fontFamily: F.mono,
                    fontSize: "10px",
                    color: C.border,
                    letterSpacing: "0.04em",
                }}
            >
                © 2025 Davi Galdino
            </span>
            <span
                style={{
                    fontFamily: F.mono,
                    fontSize: "10px",
                    color: C.border,
                    letterSpacing: "0.04em",
                }}
            >
                Anápolis, GO
            </span>
        </footer>
    );
};

export default Footer;
