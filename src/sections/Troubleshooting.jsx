import { SectionTitle } from "../components/SectionTitle.jsx";
import { TroubleshootingCard } from "../components/TroubleshootingCard.jsx";

const Troubleshooting = () => {
  return (
    <section className="flex flex-col gap-17.5 w-full items-center px-7.5 py-25 md:py-45 md:px-90">
      <SectionTitle
        en="TROUBLESHOOTING"
        ko={
          <>
            아직도 <br className="md:hidden" />
            높은 리스크의 창업을 <br className="md:hidden" />
            고민하고 계신가요?
          </>
        }
        description={
          <>
            삼성전자 가전 렌탈 창업은 <br className="md:hidden" />
            기존 창업의 부담을 모두 덜어드립니다
          </>
        }
      />
      <div className="w-full">
        <TroubleshootingCard />
      </div>
    </section>
  );
};

export default Troubleshooting;
