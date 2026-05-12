import { motion } from "framer-motion";
import { SectionTitle } from "../components/SectionTitle.jsx";
import { CategoryCard } from "../components/CategoryCard.jsx";

export const Categories = () => {
  return (
    <section
      id="category"
      className="flex flex-col gap-[50px] bg-[#F1F5FE] py-25 md:px-0 xl:py-[clamp(100px,calc((200/1920)*100vw),200px)] 2xl:px-[20%]"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <SectionTitle
          en="CATEGORIES"
          ko={
            <p className="leading-[clamp(40px,calc((70/1920)*100vw),70px)]">
              국내 최대 카테고리
              <br />
              <span className="text-[clamp(35px,calc((60/1920)*100vw),60px)] font-bold">
                가전 렌탈 제품 보유
              </span>
            </p>
          }
          description={<>폭넓은 제품군으로 최적의 선택을 제공합니다</>}
        />
      </motion.div>
      <div className="w-full">
        <CategoryCard />
      </div>
    </section>
  );
};
