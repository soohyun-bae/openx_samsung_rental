import { useEffect, useState } from "react";
import { navbarMenu } from "../datas/navbarMenu.js";

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
     <>
      <header
        className={`fixed top-0 left-0 z-50 w-full text-white transition-all duration-300 ease-out lg:hidden ${
          isScrolled
            ? "bg-white/80 pb-6"
            : "bg-linear-to-b from-50% from-white to-transparent h-46"
        }`}
      >
        <nav className="mt-8.25 mx-auto flex w-[90%] items-center justify-between">
          <button>
            <img
              className={`w-32 cursor-pointer`}
              src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776402377/samsung_logo_ypanx9.png"
              alt="logo"
              onClick={(event) => {
                event.preventDefault();
                handleSmNavClick("main");
              }}
            />
          </button>
          <button className="cursor-pointer" onClick={onClickSmMenu}>
            <img src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776737974/hamburger-menu_xnwojj.png" className={isSmMenuActive ? "hidden" : "w-6 h-6"} alt="hambuger-menu" />
          </button>
          {isSmMenuActive && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute top-0 right-0 h-screen w-85 bg-white/80 shadow-xl">
                <div className="flex items-center justify-end border-b border-[#8a8989ae] p-7 pb-4">
                  <button
                    type="button"
                    onClick={onClickSmMenu}
                                      >
                    <img src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776665114/x-icon_v6lctg.png" className="w-6 h-6" />
                  </button>
                </div>
                <nav className="mt-6 space-y-6 p-6">
                  {navbarMenu.map((item, index) => (
                    <a
                      key={index}
                      className={`block border-b border-[#8a8989ae] pb-6 text-[18px] transition-colors duration-200 ${
                        activeSection === item.link
                          ? "text-yellow font-semibold"
                          : "text-black"
                      }`}
                      href={`#${item.link}`}
                      onClick={(event) => {
                        event.preventDefault();
                        handleSmNavClick(item.link);
                      }}
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          )}
        </nav>
      </header>
      <header
        className={`desktop-nav-text fixed top-0 left-0 z-50 hidden w-full transition-all duration-300 ease-out md:hidden lg:block ${
          isScrolled
            ? "bg-black/70 py-4 text-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-sm"
            : "h-94.25 bg-linear-to-b from-26% from-white to-transparent text-white"
        }`}
      >
        <div className="mt-[54.96px] mx-auto flex h-10.25 w-full items-center justify-between px-23.25">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="transition-all duration-300"
          >
            <img
              className={`${isScrolled ? "w-[131.5px]" : "w-[131.5px]"} cursor-pointer`}
              src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776402377/samsung_logo_ypanx9.png"
              alt="logo"
              onClick={(event) => {
                event.preventDefault();
                handleSmNavClick("main");
              }}
            />
          </button>
          <div className="space-x-20">
            {navbarMenu.map((item, index) => (
              <a
                key={index}
                className={`text-[20px] font-light transition-colors duration-200 ${
                  activeSection === item.link
                    ? "text-dark-blue font-bold"
                    : "text-black"
                }`}
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  const section = document.getElementById(item.link);
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </header>
      {/* <div className={isScrolled ? "h-[72px]" : "h-[130px]"} /> */}
    </>
  );
};

export default Navbar;
