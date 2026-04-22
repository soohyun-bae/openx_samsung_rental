import { SectionTitle } from "../components/SectionTitle.jsx";
import { TroubleshootingCard } from "../components/TroubleshootingCard.jsx";
import { motion } from "framer-motion";

const Troubleshooting = () => {
  return (
    <section className="flex-col-center w-full gap-17.5 py-25 px-7.5 md:px-[clamp(30px,calc((360/1920)*100vw),360px)] xl:py-[clamp(100px,calc((180/1920)*100vw),180px)]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
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
      </motion.div>
      <div className="w-full">
        <TroubleshootingCard />
      </div>
    </section>
  );
};

export default Troubleshooting;
