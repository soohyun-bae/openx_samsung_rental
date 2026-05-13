import { SectionTitle } from "../components/SectionTitle.jsx";
import { TroubleshootingCard } from "../components/TroubleshootingCard.jsx";
import { motion } from "framer-motion";

const Troubleshooting = () => {
  return (
    <section
      id="solution"
      className="flex-col-center w-full gap-17.5 px-[37.5px] py-25 md:px-[clamp(30px,calc((360/1920)*100vw),360px)] xl:py-[clamp(100px,calc((180/1920)*100vw),200px)] 2xl:px-[20%]"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <SectionTitle
          en="SOLUTION"
          ko={
            <p className="leading-[clamp(40px,calc((70/1920)*100vw),70px)]">
              리스크 높은 창업
              <br />
              <span className="text-[clamp(35px,calc((60/1920)*100vw),60px)] font-bold">
                확신이 필요하신가요?
              </span>
            </p>
          }
          description={
            <>
              무거운 부담은 버리고, <br className="md:hidden" />
              가볍게 가전 렌탈로 시작하세요
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
