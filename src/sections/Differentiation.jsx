import { DifferentiationCard } from "../components/DifferentiationCard.jsx";
import { SectionTitle } from "../components/SectionTitle.jsx";
import { motion } from "framer-motion";

const Differentiation = () => {
  return (
    <section
      id="dirrentiation"
      className="flex flex-col gap-17.5 bg-[linear-gradient(100deg,#EEEEEE_0%,white_50%,#EEEEEE_100%)] px-7.5 py-25 md:px-[clamp(30px,calc((100/1920)*100vw),100px)] xl:py-[clamp(100px,calc((200/1920)*100vw),200px)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <SectionTitle
          en="DIFFERENTIATION POINT"
          ko={
            <p className="leading-[clamp(40px,calc((70/1920)*100vw),70px)]">
              가전 렌탈 창업,
              <br />
              <span className="font-bold">이래서 다릅니다</span>
            </p>
          }
          description={
            <>
              다른 가전 렌탈 창업과는 <br className="md:hidden" />
              남다른 차별화된 서비스를 제공합니다
            </>
          }
        />
      </motion.div>
      <div>
        <DifferentiationCard />
      </div>
    </section>
  );
};

export default Differentiation;
