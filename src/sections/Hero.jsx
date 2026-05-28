import Navbar from "../components/Navbar.jsx";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative flex h-screen w-full flex-col justify-between">
      <h1 className="sr-only">
        삼성전자 가전렌탈 창업 - 월 10만원으로 시작하는 온라인 렌탈 매장
      </h1>
      <img
        className="hidden h-full w-full object-cover object-bottom md:block"
        src="https://res.cloudinary.com/dnigvhehc/image/upload/f_auto,q_auto/v1778569982/hero_rvuwcr.png"
        alt="삼성전자 가전렌탈 온라인 창업 메인 배너"
      />
      <img
        className="h-screen w-full object-cover object-center md:hidden"
        src="https://res.cloudinary.com/dnigvhehc/image/upload/f_auto,q_auto/v1778570334/mobile_hero_ni2ot2.png"
        alt="삼성전자 가전렌탈 모바일 창업 안내 배너"
      />
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
      ></motion.div>
    </section>
  );
};

export default Hero;
