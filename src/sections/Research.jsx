import { ResearchCard } from "../components/ResearchCard.jsx";
import { SectionTitle } from "../components/SectionTitle.jsx";

const Research = () => {
  return (
    <section className="relative overflow-hidden bg-white px-[17px] pt-25 md:px-[clamp(30px,calc((360/1920)*100vw),360px)] xl:pt-[clamp(100px,calc((180/1920)*100vw),200px)]">
      <img
        src="https://res.cloudinary.com/dnigvhehc/image/upload/v1778129451/white-background_2_vwsypd.png"
        className="absolute top-0 left-0 h-full w-full object-cover"
      />
      <SectionTitle
        zIndex
        en="RESEARCH"
        ko={
          <>
            <span className="text-2xl leading-[50px] font-normal">
              급성장하는
            </span>{" "}
            <br /> <span className="leading-[50px]">가전 렌탈시장</span>
          </>
        }
        description={"국내 렌탈시장 규모 추이 및 전망"}
      />
      <div className="relative z-2 pt-[clamp(35px,calc((50/1920)*100vw),50px)]">
        <ResearchCard />
      </div>
    </section>
  );
};

export default Research;
