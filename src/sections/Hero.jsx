import Navbar from "../components/Navbar.jsx";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative flex h-screen flex-col justify-between">
      <img
        className="hidden md:block md:h-screen md:w-full md:object-cover"
        src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776671346/hero_bg_wvfn6t.png"
      />
      <img
        className="h-screen w-full object-fill object-bottom max-[670px]:object-contain md:hidden"
        src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776745226/samsung_rental_mobile_bg_rje9cd.png"
      />
      <header>
        <Navbar />
      </header>
      <motion.div
        className="flex-col-center absolute top-0 z-5 h-max w-full gap-[16px] bg-linear-to-b from-white from-63% to-transparent px-[30px] pt-[28vw] pb-50 md:top-[20%] md:w-max md:items-end md:gap-5.25 md:bg-none"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-line text-dark-blue w-full text-left leading-none font-bold lg:text-right">
          <span className="text-[30px] leading-[33px] text-nowrap md:text-[25px] lg:text-[clamp(30px,calc((50/1920)*100vw),50px)]">
            2026 삼성전자 가전 렌탈 사업
          </span>
          <br />
          <span className="text-[25px] leading-[33px] text-nowrap md:text-[clamp(25px,calc((45/1920)*100vw),45px)]">
            망설이지 말고 지금 도전하세요!
          </span>
        </p>
        <p className="text-md w-full text-center text-left leading-[17px] font-light break-keep lg:text-end">
          매장 없이, 재고 없이, 누구나{" "}
          <br className="hidden md:block lg:hidden" />
          가전 렌탈 사업자가 될 수 있습니다
        </p>
      </motion.div>
      <div className="absolute bottom-0 h-[11%] w-full bg-[linear-gradient(0deg,#FAFBFF_0%,white_63%,transparent_100%)] lg:hidden" />
    </section>
  );
};

export default Hero;
