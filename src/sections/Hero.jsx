import Navbar from "../components/Navbar.jsx";

const Hero = () => {
  return (
    <section className="relative flex flex-col justify-between h-screen">
      <img
        className="hidden md:block md:object-cover md:w-full md:h-screen"
        src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776671346/hero_bg_wvfn6t.png"
      />
      <img
        className="md:hidden"
        src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776745226/samsung_rental_mobile_bg_rje9cd.png"
      />
      <header>
        <Navbar />
      </header>
      <div
        className="flex flex-col items-center gap-5.5 bg-linear-to-t from-63% from-white pt-40 to-transparent z-15 h-max absolute bottom-0 w-full pb-25 
      md:bg-none md:top-[20%] md:w-[40%] md:items-end md:gap-5.25"
      >
        <h1 className="text-dark-blue">
          월 10만원으로 시작하는
          <br />
          삼성전자 가전 렌탈 사업
        </h1>
        <p className="text-center break-keep main-sm-text md:text-end">
          매장 없이, 재고 없이, 삼성 브랜드의 힘으로 <br />
          누구나 가전 렌탈 사업자가 될 수 있습니다
        </p>
      </div>
    </section>
  );
};

export default Hero;
