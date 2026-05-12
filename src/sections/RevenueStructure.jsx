import { RevenueStructureCardDesktop } from "../components/RevenueStructurCardDesktop.jsx";
import { RevenueStructureCard } from "../components/RevenueStructureCard.jsx";
import { SectionTitle } from "../components/SectionTitle.jsx";
import { motion } from "framer-motion";

const RevenueStructure = () => {
  return (
    <section
      id="revenue"
      className="flex flex-col gap-17.5 bg-[url('https://res.cloudinary.com/dnigvhehc/image/upload/f_auto,q_auto/v1778478038/mobile_revenue_bg_img_z1lmww.png')] bg-cover bg-no-repeat px-7.5 py-25 md:px-[clamp(30px,calc((360/1920)*100vw),360px)] lg:bg-[url('https://res.cloudinary.com/dnigvhehc/image/upload/f_auto,q_auto/v1778480228/flow_bg_img_lgiqdy.png')] xl:py-[clamp(100px,calc((180/1920)*100vw),180px)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <SectionTitle
          en="REVENUE STRUCTURE"
          ko={
            <p className="leading-[clamp(40px,calc((70/1920)*100vw),70px)]">
              가전 렌탈 <br />
              <span className="text-[clamp(35px,calc((60/1920)*100vw),60px)] font-bold">
                판매하면 얼마나 벌까?
              </span>
            </p>
          }
          description={
            <div className="leading-6 md:text-nowrap">
              계약이 쌓일수록 매달 반복되는 안정적인 수익, <br /> 렌탈 사업은 한
              번의 계약이 장기 수익으로 이어집니다
            </div>
          }
        />
      </motion.div>
      <div className="flex w-full items-center justify-center lg:hidden">
        <RevenueStructureCard />
      </div>
      <div className="hidden lg:block">
        <RevenueStructureCardDesktop />
      </div>
    </section>
  );
};

export default RevenueStructure;
