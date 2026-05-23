import { C, F } from "../theme";
import SectionWrapper from "../components/SectionWrapper";
import SectionLabel from "../components/SectionLabel";
import Stat from "../components/Stat";
import { ABOUT_STATS } from "../data/content";
import { useIsMobile } from "../hooks/useIsMobile";

const AboutSection = () => {
  const isMobile = useIsMobile();

  return (
    <SectionWrapper id="about">
      <SectionLabel>Sobre</SectionLabel>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr",
          gap: isMobile ? "40px" : "80px",
          alignItems: "start",
        }}
      >
        {/* ── Stats ── */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "row" : "column",
            gap: isMobile ? "24px" : "36px",
            flexWrap: "wrap",
          }}
        >
          {ABOUT_STATS.map(({ value, label }) => (
            <Stat key={value} value={value} label={label} />
          ))}
        </div>

        {/* ── Text ── */}
        <div>
          <p
            style={{
              fontFamily: F.sans,
              fontSize: isMobile ? "17px" : "21px",
              fontWeight: 400,
              color: C.text,
              lineHeight: 1.55,
              margin: "0 0 28px",
              letterSpacing: "-0.01em",
              textAlign: "left",
            }}
          >
            Engenheiro de Software multidisciplinar focado em arquiteturas escaláveis e de alta performance. Especialista no ecossistema Python/Django, com sólida experiência na integração de soluções de Inteligência Artificial em ambiente de produção.
          </p>
          <p
            style={{
              fontFamily: F.sans,
              fontSize: "14px",
              color: C.muted,
              lineHeight: 1.9,
              margin: 0,
              fontWeight: 300,
              textAlign: "left",
            }}
          >
            Atuo como Full-stack, DevOps,
            analista de requisitos e PO.
            Experiência prática com IoT industrial, modelos de linguagem em
            produção e pesquisa em compilação otimizada para ambientes serverless.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
