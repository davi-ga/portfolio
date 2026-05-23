import { useState } from "react";
import { Menu, X } from "lucide-react";
import { C, F } from "../theme";
import Logo from "../components/Logo";
import { NAV_LINKS } from "../data/content";
import { useIsMobile } from "../hooks/useIsMobile";

/**
 * Nav — fixed top navigation bar.
 * Desktop: horizontal links. Mobile: hamburger + dropdown.
 */
const Nav = ({ active, setActive }) => {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (link) => {
    setActive(link);
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: C.bg,
        borderBottom: `0.5px solid ${C.border}`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: isMobile ? "16px 20px" : "20px 48px",
        }}
      >
        <Logo />

        {isMobile ? (
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: C.text,
              padding: 0,
              display: "flex",
              alignItems: "center",
            }}
          >
            {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        ) : (
          <div style={{ display: "flex", gap: "32px" }}>
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => setActive(link)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: F.mono,
                  fontSize: "11px",
                  letterSpacing: "0.07em",
                  color: active === link ? C.accent : C.muted,
                  transition: "color 0.15s",
                  padding: 0,
                }}
                onMouseEnter={(e) => { if (active !== link) e.target.style.color = C.text; }}
                onMouseLeave={(e) => { if (active !== link) e.target.style.color = C.muted; }}
              >
                {link.toUpperCase()}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Mobile dropdown */}
      {isMobile && menuOpen && (
        <div
          style={{
            borderTop: `0.5px solid ${C.border}`,
            background: C.bg,
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "22px",
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => handleClick(link)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: F.mono,
                fontSize: "13px",
                letterSpacing: "0.07em",
                color: active === link ? C.accent : C.muted,
                transition: "color 0.15s",
                padding: 0,
                textAlign: "left",
              }}
            >
              {link.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
