import Navbar from "../components/Navbar.jsx";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative flex h-full w-full flex-col justify-between">
      <img
        loading="lazy"
        className="hidden h-screen w-full object-cover object-bottom pt-10 lg:block 2xl:hidden"
        src="https://res.cloudinary.com/dnigvhehc/image/upload/f_auto,q_auto/v1778460943/hero_snckav.png"
      />
      <img
        className="hidden h-screen w-full 2xl:block"
        src="https://res.cloudinary.com/dnigvhehc/image/upload/f_auto,q_auto/v1778560411/hero_test_oq28h4.png"
      />
      <img
        loading="lazy"
        className="h-screen w-full object-fill object-center lg:hidden"
        src="https://res.cloudinary.com/dnigvhehc/image/upload/f_auto,q_auto/v1778553058/mobile_hero_azys7u.png"
      />
      <button className="absolute bottom-29 left-1/2 -translate-x-1/2 rounded-[50px] border border-white bg-black/70 px-[clamp(30px,calc((40/1920)*100vw),40px)] py-[clamp(10px,calc((15/1920)*100vw),15px)] lg:bottom-35 2xl:hidden">
        <p className="text-xs leading-none font-bold text-white">
          삼성렌탈 가맹점 모집
        </p>
      </button>
      <header>
        <Navbar />
      </header>
      <motion.div
        // className="absolute inset-0 top-[clamp(130px,calc((192/1920)*100vw),192px)] left-1/2 z-5 flex h-max w-full -translate-x-1/2 flex-col items-center justify-center pt-[17vh] md:bg-none lg:pt-[16vh] 2xl:pt-[30px]"/
        className="absolute inset-0 top-[clamp(130px,calc((192/1920)*100vw),192px)] left-1/2 z-5 flex h-max w-full -translate-x-1/2 flex-col items-center justify-center pt-[clamp(140px,calc((198/1080)*100vh),198px)] md:bg-none 2xl:pt-[3%]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        {/* <div className="absolute top-[clamp(120px,calc((160/1920)*100vw),160px)] flex flex-col items-center md:gap-[50px] lg:top-[15vw]"> */}
        <div className="flex w-[90%] flex-col items-center gap-[23px] lg:w-[70%] 2xl:hidden">
          <img
            loading="lazy"
            src="https://res.cloudinary.com/dnigvhehc/image/upload/f_auto,q_auto/v1778467629/mobile_horo_title_top_zmtuhc.png"
          />
          <img
            loading="lazy"
            src="https://res.cloudinary.com/dnigvhehc/image/upload/f_auto,q_auto/v1778467629/mobile_hero_title_second_e42jfe.png"
          />
        </div>
        {/* </div> */}
      </motion.div>
      {/* <div className="absolute -bottom-17 left-0 z-15 h-[11%] w-full bg-[linear-gradient(0deg,transparent_0%,#1428A0_100%)] opacity-[20%] blur-lg" /> */}
    </section>
  );
};

export default Hero;
