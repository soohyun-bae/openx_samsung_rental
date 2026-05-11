import { ReliabilityContainer } from "../components/ReliabilityContainer.jsx";
import { SectionTitle } from "../components/SectionTitle.jsx";
import { motion } from "framer-motion";

const Reliability = () => {
  return (
    <section
      id="reliability"
      className="flex flex-col justify-center gap-[30px] bg-[linear-gradient(110deg,#E6ECF3_0%,white_50%,#E6ECF3_100%)] px-7.5 py-25 md:px-[clamp(30px,calc((360/1920)*100vw),360px)] xl:py-[clamp(100px,calc((180/1920)*100vw),180px)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <SectionTitle
          en="RELIABILITY"
          ko={
            <p className="text-[clamp(35px,calc((60/1920)*100vw),60px)] leading-[clamp(40px,calc((70/1920)*100vw),70px)] font-bold">
              왜 가전 렌탈 <br className="lg:hidden" /> 창업일까?
            </p>
          }
          description={
            <>
              구매에서 구독으로, <br className="lg:hidden" /> 지금은 렌탈 창업의
              시대입니다
            </>
          }
        />
      </motion.div>

      <div>
        <ReliabilityContainer />
      </div>
    </section>
  );
};

export default Reliability;
