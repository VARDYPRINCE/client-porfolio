import { useState, useEffect, useContext } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import { ThemeContext } from "../../Context/ThemeContext";

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme } = useContext(
    ThemeContext
  ) as ThemeContextType;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const handleNavigation = (section: string) => {
    navigate(`/#${section}`);
    closeMenu();
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <nav id="header" className={`${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-logo">
        <p className="nav-name">
          <a href="/">Ife</a>
        </p>
      </div>

      <div className={`nav-menu ${isMenuOpen ? "responsive" : ""}`}>
        <ul className="nav_menu_list">
          {["home", "about", "projects", "testimonials", "contact"].map(
            (item) => (
              <li key={item} className="nav_list">
                <RouterLink
                  to={`/#${item}`}
                  className="nav-link"
                  onClick={() => handleNavigation(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </RouterLink>
              </li>
            )
          )}
        </ul>
      </div>

      <div className="nav-right-container">
        <div className="nav-button">
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDarkMode ? (
              <FiSun size={20} className="theme-icon" />
            ) : (
              <FiMoon size={20} className="theme-icon" />
            )}
          </button>
          <button className="btn">
            {" "}
            <a href="/cv.pdf" download>Download CV</a>
          </button>
        </div>

        <div className="mobile-controls">
          <button className="theme-toggle mobile-theme" id="devmobile" onClick={toggleTheme}>
            {isDarkMode ? (
              <FiSun size={20} className="theme-icon" />
            ) : (
              <FiMoon size={20} className="theme-icon" />
            )}
          </button>
          <div className="nav-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </div>
        </div>
      </div>
    </nav>
  );
};