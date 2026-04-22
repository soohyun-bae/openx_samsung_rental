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
        className="h-screen w-full object-bottom md:hidden"
        src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776745226/samsung_rental_mobile_bg_rje9cd.png"
      />
      <header>
        <Navbar />
      </header>
      <motion.div
        className="flex-col-center absolute bottom-0 z-5 h-max w-full gap-5.5 bg-linear-to-t from-white from-63% to-transparent pt-[25vh] pb-25 md:top-[20%] md:w-[40%] md:items-end md:gap-5.25 md:bg-none"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          월 10만원으로 시작하는
          <br />
          삼성전자 가전 렌탈 사업
        </h1>
        <p className="text-md text-center leading-[1.7] font-light break-keep md:text-end">
          매장 없이, 재고 없이, 삼성 브랜드의 힘으로 <br />
          누구나 가전 렌탈 사업자가 될 수 있습니다
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
