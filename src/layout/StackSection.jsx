import { C, F } from "../theme";
import SectionWrapper from "../components/SectionWrapper";
import SectionLabel from "../components/SectionLabel";
import Triangle from "../components/Triangle";
import { STACK_CATEGORIES } from "../data/content";
import { useIsMobile } from "../hooks/useIsMobile";

/**
 * StackSection — tech stack grid.
 * Desktop: four columns. Mobile: two columns.
 */
const StackSection = () => {
  const isMobile = useIsMobile();

  return (
    <SectionWrapper id="stack">
      <SectionLabel>Habilidades</SectionLabel>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
          gap: isMobile ? "36px 24px" : "0",
        }}
      >
        {STACK_CATEGORIES.map((cat, i) => (
          <div
            key={cat.label}
            style={{
              paddingRight: (!isMobile && i < STACK_CATEGORIES.length - 1) ? "40px" : (isMobile ? "0" : "40px"),
              borderRight: (!isMobile && i < STACK_CATEGORIES.length - 1) ? `0.5px solid ${C.border}` : "none",
              paddingLeft: (!isMobile && i > 0) ? "40px" : "0",
            }}
          >
            <p
              style={{
                fontFamily: F.mono,
                fontSize: "9px",
                letterSpacing: "0.14em",
                color: C.accent,
                textTransform: "uppercase",
                marginBottom: "22px",
              }}
            >
              {cat.label}
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {cat.items.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "13px",
                  }}
                >
                  <Triangle size={5} color={C.border} />
                  <span
                    style={{
                      fontFamily: F.sans,
                      fontSize: "14px",
                      color: C.text,
                      fontWeight: 300,
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default StackSection;
