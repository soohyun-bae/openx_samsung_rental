import { ResearchCard } from "../components/ResearchCard.jsx";
import { SectionTitle } from "../components/SectionTitle.jsx";

const Research = () => {
  return (
    <section className="relative bg-[#FAFBFF] px-7.5 py-25 md:px-[clamp(30px,calc((360/1920)*100vw),360px)] xl:py-[clamp(100px,calc((180/1920)*100vw),200px)]">
      <img
        src="https://res.cloudinary.com/dnigvhehc/image/upload/v1777536862/samsung_rental_bg_img_ku3gjt.png"
        className="absolute -bottom-6"
      />
      <SectionTitle
        en="RESEARCH"
        ko={
          <>
            <span className="text-2xl font-normal">급성장하는</span> <br /> 가전
            렌탈시장
          </>
        }
      />
      <div className="relative z-2">
        <ResearchCard />
      </div>
    </section>
  );
};

export default Research;
