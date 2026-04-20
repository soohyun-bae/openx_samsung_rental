import { useEffect, useState } from "react";
import { navbarMenu } from "../datas/navbarMenu.js";
import "../style/navbar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [isSmMenuActive, setIsSmMenuActive] = useState(false);

  useEffect(() => {
    const sectionIds = navbarMenu.map((item) => item.link);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPoint = window.scrollY + 120;
      let current = null;

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;
        if (scrollPoint >= section.offsetTop) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isSmMenuActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isSmMenuActive]);

  const onClickSmMenu = () => {
    setIsSmMenuActive((prev) => !prev);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth" });
  };

  const handleSmNavClick = (id) => {
    setIsSmMenuActive(false);
    window.setTimeout(() => {
      scrollToSection(id);
    }, 80);
  };

  const handleSmConversionClick = () => {
    setIsSmMenuActive(false);
    window.setTimeout(() => {
      scrollToSection("conversion");
    }, 80);
  };

  return (
    <nav className={isScrolled ? "navbar scrolled" : "navbar"}>
      <img
        src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776402377/samsung_logo_ypanx9.png"
        className="navbar-logo"
      />
      <div className="navbar-text-layout">
        {navbarMenu.map((i, index) => (
          <div key={index} className="navbar-item-text">
            {i.title}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
