import GithubIcon from '../assets/github.svg'
import LinkedinIcon from '../assets/linkedin.svg'
import InstagramIcon from '../assets/instagram.svg'

export default function Header() {
  return (
    <>
      <style>{`.icon-link:hover { opacity: 1 !important; }`}</style>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 5rem",
          height: "100px",
        }}
      >
        <nav style={{ display: "flex", alignItems: "center", gap: "1.75rem" }}>
          {["home", "projects", "blog"].map((item) => (
            <a
              key={item}
              href={`/${item === "home" ? "" : item}`}
              style={{
                color: "rgba(255,255,255,0.55)",
                textDecoration: "none",
                fontSize: "0.875rem",
                letterSpacing: "0.02em",
                fontWeight: 400,
                transition: "color 0.18s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "rgba(255,255,255,0.95)")}
              onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.55)")}
            >
              {item}
            </a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
          <a href="https://github.com/michaelliebs" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-link" style={iconLinkStyle}>
            <img src={GithubIcon} alt="GitHub" width="18" height="18" style={iconImgStyle} />
          </a>

          <a href="https://linkedin.com/in/m-lieberman" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-link" style={iconLinkStyle}>
            <img src={LinkedinIcon} alt="LinkedIn" width="18" height="18" style={iconImgStyle} />
          </a>

          <a href="https://instagram.com/michaelliebs" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="icon-link" style={iconLinkStyle}>
            <img src={InstagramIcon} alt="Instagram" width="18" height="18" style={iconImgStyle} />
          </a>
        </div>
      </header>
    </>
  );
}

const iconLinkStyle = {
  display: "flex",
  alignItems: "center",
  opacity: 0.45,
  transition: "opacity 0.18s ease",
};

const iconImgStyle = {
  display: "block",
};