import { DifferentiationCard } from "../components/DifferentiationCard.jsx";
import { SectionTitle } from "../components/SectionTitle.jsx";

const Differentiation = () => {
  return (
    <section className="differentiation-section py-[180px]">
      <SectionTitle
        en="DIFFERENTIATION POINT"
        ko="삼성전자 가전 렌탈 창업, 이래서 다릅니다"
        description="다른 가전 렌탈 창업과는 남다른 차별화된 서비스를 제공합니다"
      />
      <div>
        <DifferentiationCard />
      </div>
    </section>
  );
};

export default Differentiation;
