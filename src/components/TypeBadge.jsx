import { C, F } from ".././theme";

/** Color map by entry type */
const TYPE_COLOR = {
  "Acadêmico": C.accent,
  "Produto": "#7EC8C8",
  "Empresa": C.muted,
};

/**
 * TypeBadge — small outlined badge showing the category of an entry.
 * Colors are driven by the type string (Acadêmico / Produto / Empresa).
 */
const TypeBadge = ({ type }) => {
  const color = TYPE_COLOR[type] ?? C.muted;

  return (
    <span
      style={{
        display: "inline-block",
        marginTop: "12px",
        alignSelf: "center",
        fontFamily: F.mono,
        fontSize: "8px",
        letterSpacing: "0.08em",
        color,
        border: `0.5px solid ${color}`,
        padding: "1px 4px",
        textTransform: "uppercase",
      }}
    >
      {type}
    </span>
  );
};

export default TypeBadge;
