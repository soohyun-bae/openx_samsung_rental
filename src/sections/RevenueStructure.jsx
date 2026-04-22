import { RevenueStructureCard } from "../components/RevenueStructureCard.jsx";
import { SectionTitle } from "../components/SectionTitle.jsx";

const RevenueStructure = () => {
  return (
    <section className="flex flex-col gap-17.5 px-7.5 py-25 lg:py-45 lg:px-90">
      <SectionTitle
        en="REVENUE STRUCTURE"
        ko={
          <>
            가전 렌탈 1건당 <br />
            수익구조
          </>
        }
        description={
          <>
            계약이 쌓일수록 매달 반복되는 <br />
            안정적인 수익, 렌탈 사업은 <br />한 번의 계약이 장기 수익으로
            이어집니다
          </>
        }
      />
      <div>
        <RevenueStructureCard />
      </div>
    </section>
  );
};

export default RevenueStructure;
