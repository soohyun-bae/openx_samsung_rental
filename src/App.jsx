import { useEffect, useRef, useState } from "react";
import { Footer } from "./components/Footer.jsx";
import { FooterTabContainer } from "./components/FooterTab.jsx";
import Navbar from "./components/Navbar.jsx";
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
  const footerRef = useRef(null);
  const [bottomOffset, setBottomOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;
      const footerTop = footerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (footerTop < windowHeight) {
        setBottomOffset(windowHeight - footerTop);
      } else {
        setBottomOffset(0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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
      <div
        className="fixed right-0 left-0 z-50"
        style={{ bottom: `${bottomOffset}px` }}
      >
        <FooterTabContainer />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
