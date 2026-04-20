import Navbar from "../components/Navbar.jsx";
import "../style/hero.scss";

const Hero = () => {
  return (
    <section className="hero-section">
      <header>
        <Navbar />
      </header>
      <div className="hero-text-container">
        <h1 className="hero-main-text">
          월 10만원으로 시작하는
          <br />
          삼성전자 가전 렌탈 사업
        </h1>
        <p className="text-sm">
          매장 없이, 재고 없이, 삼성 브랜드의 힘으로 누구나 가전 렌탈 사업자가
          될 수 있습니다
        </p>
      </div>
    </section>
  );
};

export default Hero;
