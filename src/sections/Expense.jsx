import { ExpenseCompo } from "../components/ExpenseCompo.jsx";
import { SectionTitle } from "../components/SectionTitle.jsx";
import { motion } from "framer-motion";

export const Expense = () => {
  return (
    <section
      id="expense"
      className="flex flex-col gap-[50px] bg-white py-25 md:px-0 xl:py-[clamp(100px,calc((200/1920)*100vw),200px)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <SectionTitle
          en="EXPENSE"
          ko={
            <p className="leading-[clamp(40px,calc((70/1920)*100vw),70px)]">
              <span className="text-[clamp(35px,calc((60/1920)*100vw),60px)] font-bold">
                창업비용
              </span>
            </p>
          }
          description={
            <>
              저희만의 시스템을 통해 저렴한 창업 비용으로 <br />
              리스크 걱정 없이 가전 렌탈 창업에 도전할 수 있습니다
            </>
          }
        />
      </motion.div>
      <div>
        <ExpenseCompo />
      </div>
    </section>
  );
};
