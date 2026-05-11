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
    document.body.style.overflow = "";
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
      <div
        className={`fixed top-0 left-0 z-100 w-full text-white transition-all duration-300 ease-out lg:hidden ${
          isScrolled ? "bg-white py-4" : " pt-[23px] pb-[77px]"
        }`}
      >
        <nav className="mx-auto flex w-[90%] items-center justify-between">
          <button>
            <img
              className={`w-[78px] cursor-pointer`}
              src={`${isScrolled ? "https://res.cloudinary.com/dnigvhehc/image/upload/v1776910703/samsung_logo_fn1psv.png" : "https://res.cloudinary.com/dnigvhehc/image/upload/v1776921960/samsung-logo-white_zvr1xt.png"}`}
              alt="logo"
              onClick={(event) => {
                event.preventDefault();
                handleSmNavClick("main");
              }}
            />
          </button>
          <button className="cursor-pointer" onClick={onClickSmMenu}>
            <img
              src="https://res.cloudinary.com/dnigvhehc/image/upload/v1778135354/mobile_nav_wq5uaz.png"
              className={isSmMenuActive ? "hidden" : "h-6 w-6"}
              alt="hambuger-menu"
            />
          </button>
          {isSmMenuActive && (
            <div className="fixed inset-0 z-100 lg:hidden">
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute top-0 right-0 h-screen w-85 bg-white/80 shadow-xl">
                <div className="flex items-center justify-end border-b border-[#8a8989ae] p-8">
                  <button type="button" onClick={onClickSmMenu}>
                    <img
                      src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776665114/x-icon_v6lctg.png"
                      className="h-6 w-6"
                    />
                  </button>
                </div>
                <nav className="mt-6 space-y-6 p-6">
                  {navbarMenu.map((item, index) => (
                    <a
                      key={index}
                      className={`text-nav block pb-6 transition-colors duration-200 ${
                        activeSection === item.link
                          ? "text-yellow font-bold"
                          : "font-light text-black"
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
      </div>
      <header
        className={`fixed top-0 left-0 z-100 hidden w-full transition-all duration-300 ease-out lg:block ${
          isScrolled
            ? "bg-white pb-4"
            : "bg-[linear-gradient(180deg,#001835_12%,transparent_63%)] pb-[300px]"
        }`}
      >
        <div
          className={`${isScrolled ? "pt-5" : " pt-[34px] pb-[14px]"} mx-auto flex w-full items-center justify-between px-23.25`}
        >
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="transition-all duration-300"
          >
            <img
              className={`${isScrolled ? "w-[clamp(78px,calc((131/1920)*100vw),131px)]" : "w-[clamp(78px,calc((131/1920)*100vw),131px)]"} cursor-pointer`}
              src={`${isScrolled ? "https://res.cloudinary.com/dnigvhehc/image/upload/v1776910703/samsung_logo_fn1psv.png" : "https://res.cloudinary.com/dnigvhehc/image/upload/v1776921960/samsung-logo-white_zvr1xt.png"}`}
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
                className={`text-nav transition-colors duration-200 ${
                  activeSection === item.link
                    ? "text-dark-blue font-bold"
                    : isScrolled
                      ? "font-light text-black"
                      : "font-light text-white"
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
    </>
  );
};

export default Navbar;
