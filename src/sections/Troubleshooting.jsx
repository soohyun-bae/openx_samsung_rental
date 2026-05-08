import { SectionTitle } from "../components/SectionTitle.jsx";
import { TroubleshootingCard } from "../components/TroubleshootingCard.jsx";
import { motion } from "framer-motion";

const Troubleshooting = () => {
  return (
    <section
      id="troubleshooting"
      className="flex-col-center w-full gap-17.5 px-[37.5px] py-25 md:px-[clamp(30px,calc((360/1920)*100vw),360px)] xl:py-[clamp(100px,calc((180/1920)*100vw),200px)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <SectionTitle
          en="TROUBLESHOOTING"
          ko={
            <p className="leading-[clamp(40px,calc((70/1920)*100vw),70px)]">
              리스크 높은 창업을
              <br />
              <span className="font-bold">고민만하고 계신가요?</span>
            </p>
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
