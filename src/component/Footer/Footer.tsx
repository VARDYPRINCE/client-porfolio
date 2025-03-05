import { FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";
import { useLocation, Location } from "react-router-dom";
import { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';

interface ThemeContextType {
  isDarkMode: boolean;
}

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const location = useLocation() as Location;
  const isProjectsPage = location.pathname === "/projects";

  const { isDarkMode } = useContext(ThemeContext) as ThemeContextType;

  return (
    <footer className={isDarkMode ? 'dark-mode' : ''}>
      {!isProjectsPage && (
        <div className="middle-footer">
          <ul className="footer-menu">
            {["home", "about", "projects", "contact"].map((item) => (
              <li key={item} className="footer_menu_list">
                <a href={`#${item}`}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="footer-social-icons">
        {[FiInstagram, FiLinkedin, FiGithub].map((Icon, index) => (
          <div key={index} className="icon">
            <Icon size={15} />
          </div>
        ))}
      </div>

      <div className="bottom-footer">
        <p>Copyright &copy; {currentYear}</p>
      </div>
    </footer>
  );
};
