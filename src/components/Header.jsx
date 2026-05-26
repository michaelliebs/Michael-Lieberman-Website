import { Link } from 'react-router-dom'
import GithubIcon from '../assets/github.svg'
import LinkedinIcon from '../assets/linkedin.svg'
import InstagramIcon from '../assets/instagram.svg'
import '../stylesheets/Header.css'

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        {["home", "projects", "blog"].map((item) => (
          <Link
            key={item}
            to={item === "home" ? "/" : `/${item}`}
            className="nav-link"
          >
            {item}
          </Link>
        ))}
      </nav>

      <div className="icons">
        <a href="https://github.com/michaelliebs" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-link">
          <img src={GithubIcon} alt="GitHub" width="18" height="18" />
        </a>
        <a href="https://linkedin.com/in/m-lieberman" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-link">
          <img src={LinkedinIcon} alt="LinkedIn" width="18" height="18" />
        </a>
        <a href="https://instagram.com/michaelliebs" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="icon-link">
          <img src={InstagramIcon} alt="Instagram" width="18" height="18" />
        </a>
      </div>
    </header>
  );
}