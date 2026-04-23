import { SectionTitle } from "../components/SectionTitle.jsx";
import { SupportContents } from "../components/SupportContents.jsx";

const Support = () => {
  return (
    <section className="bg-[linear-gradient(100deg,#EEEEEE_0%,white_50%,#EEEEEE_100%)] px-7.5 py-25 md:px-[clamp(30px,calc((360/1920)*100vw),360px)] xl:py-[clamp(100px,calc((180/1920)*100vw),180px)]">
      <SectionTitle
        en="SUPPORT SYSTEM"
        ko={
          <>
            처음이어도 괜찮습니다 <br />
            본사가 처음부터 <br />
            끝까지 함께합니다
          </>
        }
      />
      <div className="mt-[70px]">
        <SupportContents />
      </div>
    </section>
  );
};

export default Support;
