import { SectionTitle } from "../components/SectionTitle.jsx";
import { SupportContents } from "../components/SupportContents.jsx";

const Support = () => {
  return (
    <section
      id="support"
      className="flex flex-col gap-[50px] py-25 md:px-0 xl:py-[clamp(100px,calc((200/1920)*100vw),200px)]"
    >
      <SectionTitle
        en="SUPPORT SYSTEM"
        ko={
          <p className="leading-[clamp(40px,calc((70/1920)*100vw),70px)]">
            처음이어도 괜찮습니다 <br />
            <span className="text-[clamp(35px,calc((60/1920)*100vw),60px)] font-bold">
              저희가 처음부터 <br className="md:hidden" /> 끝까지 함께합니다
            </span>
          </p>
        }
        description={
          <div className="leading-6 md:text-nowrap">
            경험이 없어도 괜찮습니다 <br className="md:hidden" />
            성공까지 함께하는 파트너입니다
          </div>
        }
      />
      <div>
        <SupportContents />
      </div>
    </section>
  );
};

export default Support;
