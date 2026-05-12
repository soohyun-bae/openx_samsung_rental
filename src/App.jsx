import { useEffect, useRef } from "react";
import { Footer } from "./components/Footer.jsx";
import { FooterTabContainer } from "./components/FooterTab.jsx";
import Navbar from "./components/Navbar.jsx";
import { Admin } from "./pages/Admin.jsx";
import { AdminLogin } from "./pages/AdminLogin.jsx";
import Differentiation from "./sections/Differentiation.jsx";
import Hero from "./sections/Hero.jsx";
import Reliability from "./sections/Reliability.jsx";
import RevenueStructure from "./sections/RevenueStructure.jsx";
import Support from "./sections/Support.jsx";
import Troubleshooting from "./sections/Troubleshooting.jsx";
import Research from "./sections/Research.jsx";
import { Categories } from "./sections/Categories.jsx";
import { Expense } from "./sections/Expense.jsx";

function App() {
  const pathname = window.location.pathname;
  const isAdminPage = pathname === "/admin";
  const isAdminLoginPage = pathname === "/admin/login";
  const footerRef = useRef(null);
  const footerTabRef = useRef(null);

  useEffect(() => {
    if (isAdminPage || isAdminLoginPage) return;

    let frameId = null;

    const updateFooterTab = () => {
      if (!footerRef.current || !footerTabRef.current) return;

      const footerTop = footerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const bottomOffset = Math.max(windowHeight - footerTop, 0);

      footerTabRef.current.style.bottom = `${bottomOffset}px`;
    };

    const handleScroll = () => {
      if (frameId) return;

      frameId = requestAnimationFrame(() => {
        updateFooterTab();
        frameId = null;
      });
    };

    updateFooterTab();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateFooterTab);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateFooterTab);

      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [isAdminLoginPage, isAdminPage]);

  if (isAdminPage) {
    return <Admin />;
  }

  if (isAdminLoginPage) {
    return <AdminLogin />;
  }

  return (
    <div className="relative">
      {/* <Navbar /> */}
      <Hero />
      <Research />
      <Troubleshooting />
      <Reliability />
      <Differentiation />
      <RevenueStructure />
      <Support />
      <Categories />
      <Expense />
      <div ref={footerTabRef} className="fixed right-0 bottom-0 left-0 z-50">
        <FooterTabContainer />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
