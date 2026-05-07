import Navbar from "../components/Navbar.jsx";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative flex flex-col justify-between md:h-[1094px]">
      <img
        className="hidden md:block md:h-full md:w-full md:object-cover md:object-center"
        src="https://res.cloudinary.com/dnigvhehc/image/upload/v1778132503/hero_toqu9e.png"
      />
      <img
        className="h-screen w-full object-cover object-center md:hidden"
        src="https://res.cloudinary.com/dnigvhehc/image/upload/v1778133853/mobile_hero_qcgucz.png"
      />
      <header>
        <Navbar />
      </header>
      <motion.div
        className="flex-col-center absolute top-[clamp(130px,calc((192/1920)*100vw),192px)] left-1/2 z-5 h-full h-max w-full -translate-x-1/2 bg-[linear-gradient(180deg,#0F1520_0%,transparent_100%)] md:bg-none"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute top-0 flex flex-col items-center gap-[26px] md:gap-[50px]">
          <img
            src="https://res.cloudinary.com/dnigvhehc/image/upload/v1778131666/hero_title_yyedq4.png"
            className="w-[clamp(285px,calc((741/1920)*100vw),741px)]"
          />
          <button className="rounded-[50px] border border-white bg-white/25 px-[clamp(30px,calc((40/1920)*100vw),40px)] py-[clamp(10px,calc((15/1920)*100vw),15px)]">
            <p className="text-sm leading-[22.5px] font-bold text-white">
              삼성렌탈 가맹점 모집
            </p>
          </button>
        </div>
      </motion.div>
      <div className="absolute -bottom-17 left-0 z-15 h-[11%] w-full bg-[linear-gradient(0deg,transparent_0%,#1428A0_100%)] opacity-[20%] blur-lg" />
    </section>
  );
};

export default Hero;
