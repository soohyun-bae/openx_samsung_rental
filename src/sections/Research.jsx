import { ResearchCard } from "../components/ResearchCard.jsx";
import { SectionTitle } from "../components/SectionTitle.jsx";
import { motion } from "framer-motion";

const Research = () => {
  return (
    <section
      id="research"
      className="relative overflow-hidden bg-white px-[17px] pt-25 md:px-[clamp(30px,calc((360/1920)*100vw),360px)] xl:pt-[clamp(100px,calc((180/1920)*100vw),200px)] 2xl:px-[20%]"
    >
      <img
        loading="lazy"
        src="https://res.cloudinary.com/dnigvhehc/image/upload/f_auto,q_auto/v1778129451/white-background_2_vwsypd.png"
        className="absolute top-0 left-0 h-full w-full object-cover"
        alt="조사 섹션 배경 이미지"
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <SectionTitle
          zIndex
          en="RESEARCH"
          ko={
            <p className="leading-[clamp(40px,calc((70/1920)*100vw),70px)]">
              급성장하는 <br />{" "}
              <span className="text-[clamp(35px,calc((60/1920)*100vw),60px)] font-bold">
                가전 렌탈시장
              </span>
            </p>
          }
          description={"국내 렌탈시장 규모 추이 및 전망"}
        />
      </motion.div>
      <div className="relative z-2 flex justify-center pt-[clamp(35px,calc((50/1920)*100vw),50px)]">
        <ResearchCard />
      </div>
    </section>
  );
};

export default Research;
