import { SectionTitle } from "../components/SectionTitle.jsx";

const Support = () => {
  return (
    <section className="bg-[linear-gradient(100deg,#EEEEEE_0%,white_50%,#EEEEEE_100%)] px-7.5 py-25 xl:px-90 xl:py-45">
      <SectionTitle
        en="SUPPORT SYSTEM"
        ko={
          <>
            처음이어도 괜찮습니다 <br />
            본사가 처음부터 끝까지 함께합니다
          </>
        }
      />
      <div></div>
    </section>
  );
};

export default Support;
