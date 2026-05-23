import { ArrowUpRight } from "lucide-react";
import { C, F } from "../theme";
import SectionWrapper from "../components/SectionWrapper";
import SectionLabel from "../components/SectionLabel";
import { CONTACT_LINKS } from "../data/content";
import { useIsMobile } from "../hooks/useIsMobile";

/**
 * ContactSection — two-column CTA + link list.
 * Mobile: single column stack.
 */
const ContactSection = () => {
  const isMobile = useIsMobile();

  return (
    <SectionWrapper id="contact">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "40px" : "80px",
          alignItems: "end",
        }}
      >
        {/* ── Headline ── */}
        <div>
          <SectionLabel>Contato</SectionLabel>
          <h2
            style={{
              fontFamily: F.sans,
              fontSize: isMobile ? "clamp(28px, 9vw, 42px)" : "clamp(32px, 4vw, 54px)",
              fontWeight: 700,
              color: C.text,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            Vamos trabalhar<br />juntos.
          </h2>
        </div>

        {/* ── Link rows ── */}
        <div>
          {CONTACT_LINKS.map(({ label, value, href }) => (
            <div
              key={label}
              style={{
                borderTop: `0.5px solid ${C.border}`,
                paddingTop: "18px",
                marginBottom: "18px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontFamily: F.mono,
                  fontSize: "10px",
                  color: C.muted,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {label}
              </span>
              <a
                href={href}
                style={{
                  fontFamily: F.mono,
                  fontSize: "12px",
                  color: C.text,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "color 0.15s",
                  wordBreak: "break-all",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.accent)}
                onMouseLeave={(e) => (e.currentTarget.style.color = C.text)}
              >
                {value}
                <ArrowUpRight size={11} strokeWidth={1.5} />
              </a>
            </div>
          ))}
          <div style={{ borderTop: `0.5px solid ${C.border}` }} />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
