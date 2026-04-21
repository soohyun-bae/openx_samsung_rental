import Navbar from "../components/Navbar.jsx";

const Hero = () => {
  return (
    <section 
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dnigvhehc/image/upload/v1776671346/hero_bg_wvfn6t.png')"
      }}
    >
      <header>
        <Navbar />
      </header>
      <div className="flex flex-col items-end w-[38%] pt-[18%] gap-[19px]">
        <h1 className="text-2xl font-bold text-[#0d1b3e] z-5">
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
