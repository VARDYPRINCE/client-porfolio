import { useEffect, useRef } from "react";
import Typed from "typed.js";
import avatar from "../../assets/avatar.png";
import { Link } from "react-scroll";
import {
  FiMousePointer,
  FiInstagram,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";

export const HeroSection = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Freelancer", "Developer"],
      typeSpeed: 100,
      backSpeed: 80,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Ife Tech</span>
        </div>
        <div className="featured-name">
          <p>
            I'm <span className="typedText" ref={typedRef}></span>
          </p>
        </div>
        <div className="featured-text-info">
          <p>
            Experienced frontend developer with a passion for creating visually
            stunning and user-friendly websites.
          </p>
        </div>
        <div className="featured-text-btn">
          <button className="btn blue-btn">Hire Me</button>
          <button className="btn">
            {" "}
            <a href="/cv.pdf" download>
              Download CV
            </a>
          </button>
        </div>
        <div className="social_icons">
          {[FiInstagram, FiLinkedin, FiGithub].map((Icon, index) => (
            <div key={index} className="icon">
              <Icon size={15} />
            </div>
          ))}
        </div>
      </div>

      <div className="featured-image">
        <div className="image">
          <img src={avatar} alt="avatar" />
        </div>
      </div>

      <div className="scroll-icon-box">
        <Link to="about" smooth={true} className="scroll-btn">
          <FiMousePointer size={15} />
          <p>Scroll Down</p>
        </Link>
      </div>
    </section>
  );
};
