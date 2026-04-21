import { DifferentiationCard } from "../components/DifferentiationCard.jsx";
import { SectionTitle } from "../components/SectionTitle.jsx";

const Differentiation = () => {
  return (
    <section
      id="dirrentiation"
      className="bg-[linear-gradient(100deg,#EEEEEE_0%,white_50%,#EEEEEE_100%)] px-7.5 py-25 flex flex-col gap-17.5 md:py-45 xl:px-90"
    >
      <SectionTitle
        en="DIFFERENTIATION POINT"
        ko={
          <>
            삼성전자 가전 렌탈 창업, <br />
            이래서 다릅니다
          </>
        }
        description={
          <>
            다른 가전 렌탈 창업과는 <br />
            남다른 차별화된 서비스를 제공합니다
          </>
        }
      />
      <div>
        <DifferentiationCard />
      </div>
    </section>
  );
};

export default Differentiation;
