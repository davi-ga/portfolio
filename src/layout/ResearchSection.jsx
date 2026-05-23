import { useState } from "react";
import { C } from "../theme";
import SectionWrapper from "../components/SectionWrapper";
import SectionLabel from "../components/SectionLabel";
import EntryRow from "../components/EntryRow";
import Tag from "../components/Tag";
import { RESEARCH_ITEMS, RESEARCH_TAGS } from "../data/content";

/**
 * ResearchSection — academic research lines.
 * Features a two-column editorial header with an institutional note,
 * followed by the entry list and topic tags.
 */
const ResearchSection = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <SectionWrapper id="research">
      {/* Header */}
      <div>
        <SectionLabel>Pesquisa Acadêmica</SectionLabel>
      </div>

      {/* Entry list */}
      <div>
        {RESEARCH_ITEMS.map((item, i) => (
          <EntryRow
            key={i}
            item={item}
            index={i}
            hovered={hovered}
            setHovered={setHovered}
          />
        ))}
        <div style={{ borderTop: `0.5px solid ${C.border}` }} />
      </div>

      {/* Topic tags */}
      <div style={{ marginTop: "28px", display: "flex", gap: "9px", flexWrap: "wrap" }}>
        {RESEARCH_TAGS.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ResearchSection;
