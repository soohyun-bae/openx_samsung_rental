import { ReliabilityContainer } from "../components/ReliabilityContainer.jsx";
import { SectionTitle } from "../components/SectionTitle.jsx";

const Reliability = () => {
  return (
    <section className="px-7.5 py-25 md:px-[clamp(30px,calc((360/1920)*100vw),360px)] xl:py-[clamp(100px,calc((180/1920)*100vw),180px)]">
      <SectionTitle en="RELIABILITY" ko={<>왜 삼성전자 가전인가?</>} />
      <div>
        <ReliabilityContainer />
      </div>
    </section>
  );
};

export default Reliability;
