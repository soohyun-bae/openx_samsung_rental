import { SectionTitle } from "../components/SectionTitle.jsx";
import { TroubleshootingCard } from "../components/TroubleshootingCard.jsx";

const Troubleshooting = () => {
  return (
    <section className="flex flex-col gap-[70px] items-center py-[180px]">
      <SectionTitle
        en="TROUBLESHOOTING"
        ko="아직도 높은 리스크의 창업을 고민하고 계신가요?"
        description="삼성전자 가전 렌탈 창업은 기존 창업의 부담을 모두 덜어드립니다"
      />
      <div>
        <TroubleshootingCard />
      </div>
    </section>
  );
};

export default Troubleshooting;
