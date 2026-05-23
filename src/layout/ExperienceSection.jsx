import { useState } from "react";
import { C } from "../theme";
import SectionWrapper from "../components/SectionWrapper";
import SectionLabel from "../components/SectionLabel";
import EntryRow from "../components/EntryRow";
import { EXPERIENCE_ITEMS } from "../data/content";

/**
 * ExperienceSection — professional work history.
 * Rendered as a minimal hover-interactive timeline list.
 */
const ExperienceSection = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <SectionWrapper id="experience">
      <SectionLabel>Experiência Profissional</SectionLabel>

      <div>
        {EXPERIENCE_ITEMS.map((item, i) => (
          <EntryRow
            key={i}
            item={item}
            index={i}
            hovered={hovered}
            setHovered={setHovered}
          />
        ))}
        {/* Closing border */}
        <div style={{ borderTop: `0.5px solid ${C.border}` }} />
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;
