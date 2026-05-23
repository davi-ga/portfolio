import { C } from ".././theme";
import { useIsMobile } from "../hooks/useIsMobile";

/**
 * SectionWrapper — applies consistent horizontal padding, max-width, and
 * optional top divider to every page section.
 *
 * Props:
 *   id          — anchor id for scroll-spy
 *   divider     — render a top border (default true)
 *   style       — override / extend styles
 */
const SectionWrapper = ({ id, children, divider = true, style = {} }) => {
  const isMobile = useIsMobile();

  return (
    <section
      id={id}
      style={{
        padding: isMobile ? "72px 20px" : "112px 48px",
        maxWidth: "1100px",
        margin: "0 auto",
        borderTop: divider ? `0.5px solid ${C.border}` : "none",
        ...style,
      }}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
