import { C, F } from ".././theme";
import Triangle from "./Triangle";
import TypeBadge from "./TypeBadge";
import { useIsMobile } from "../hooks/useIsMobile";

/**
 * EntryRow — a single row in a timeline list.
 * Shared by ExperienceSection and ResearchSection.
 * Desktop: 3-column grid. Mobile: stacked layout.
 */
const EntryRow = ({ item, index, hovered, setHovered }) => {
  const isHovered = hovered === index;
  const isMobile = useIsMobile();

  return (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "160px 1fr 20px",
        gap: isMobile ? "8px 0" : "0 44px",
        padding: "26px 20px",
        margin: "0 -20px",
        borderTop: `0.5px solid ${C.border}`,
        background: isHovered ? "rgba(244,254,254,0.025)" : "transparent",
        transition: "background 0.15s",
        cursor: "default",
      }}
    >
      {/* Period + badge */}
      <div style={{ display: "flex", flexDirection: "column", gap: "6px", alignItems: "center" }}>
        <p
          style={{
            fontFamily: F.mono,
            fontSize: "10px",
            color: C.muted,
            margin: 0,
            letterSpacing: "0.04em",
          }}
        >
          {item.period}
        </p>
        <TypeBadge type={item.type} />
      </div>

      {/* Role, org, description */}
      <div style={{ marginTop: isMobile ? "6px" : "0" }}>
        <p
          style={{
            fontFamily: F.sans,
            fontSize: "15px",
            fontWeight: 500,
            color: isHovered ? C.accent : C.text,
            margin: "0 0 3px",
            transition: "color 0.15s",
          }}
        >
          {item.role}
        </p>
        <p
          style={{
            fontFamily: F.mono,
            fontSize: "11px",
            color: C.muted,
            margin: "0 0 11px",
            letterSpacing: "0.03em",
          }}
        >
          {item.org}
        </p>
        <p
          style={{
            fontFamily: F.sans,
            fontSize: "13px",
            color: C.muted,
            margin: 0,
            lineHeight: 1.75,
            fontWeight: 300,
            textAlign: "left",
          }}
        >
          {item.desc}
        </p>
      </div>

      {/* Triangle hover indicator (hidden on mobile) */}
      {!isMobile && (
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            paddingTop: "4px",
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.15s",
          }}
        >
          <Triangle size={7} color={C.accent} />
        </div>
      )}
    </div>
  );
};

export default EntryRow;
