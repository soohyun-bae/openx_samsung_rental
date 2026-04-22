import { motion } from "framer-motion";

export const RevenueGraph = () => {
  return (
    <div className="relative flex h-[330px] items-end gap-[39px] px-[11px] 2xl:gap-[250px]">
      <div className="flex flex-col items-center gap-[20px]">
        <div className="z-3 h-[6px] w-[6px] rounded-full bg-white" />
        <div className="flex flex-col items-center">
          <p className="text-[16px] font-light text-white">월 수익</p>
          <p className="text-[20px] font-semibold text-nowrap text-white">
            00만원
          </p>
          <div className="h-[26px] w-[49px] bg-[#747474]" />
        </div>
        <p className="text-center text-[16px] font-light text-white">
          월 10건 <br />
          계약시
        </p>
      </div>
      <div className="flex flex-col items-center gap-[20px]">
        <div className="z-3 h-[6px] w-[6px] rounded-full bg-white" />
        <div className="flex flex-col items-center">
          <p className="text-[16px] font-light text-white">월 수익</p>
          <p className="text-[20px] font-semibold text-nowrap text-white">
            000만원
          </p>
          <div className="h-[69px] w-[49px] bg-[#747474]" />
        </div>
        <p className="text-center text-[16px] font-light text-white">
          월 20건 <br />
          계약시
        </p>
      </div>
      <div className="flex flex-col items-center gap-[20px]">
        <div className="relative flex flex-col items-center">
          <div className="z-1 mb-40 flex flex-col items-center">
            <div className="z-3 h-[6px] w-[6px] rounded-full bg-white" />
            <p className="pt-[30px] text-[16px] font-light text-white">
              월 수익
            </p>
            <p className="text-[20px] font-semibold text-nowrap text-white">
              0,000만원
            </p>
          </div>
          <motion.div
            style={{ transformOrigin: "bottom" }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0 }}
            className="absolute bottom-0"
          >
            <img
              src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776841282/revenue-graph-arrow_lkgsah.png"
              className="h-[292px] w-[115px]"
            />
          </motion.div>
        </div>
        <p className="text-center text-[16px] font-light text-white">
          월 30건 <br />
          계약시
        </p>
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0 }}
        className="absolute top-[158px] left-[41px] z-2 h-[2px] w-[113px] origin-left rotate-[-22deg] bg-[linear-gradient(90deg,#062237_0%,#7F8D98_100%)] 2xl:left-[6%] 2xl:w-[42%] 2xl:rotate-[-8deg]"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute top-[114px] left-[148px] z-2 h-[2px] w-[153px] origin-left rotate-[-40.3deg] bg-[linear-gradient(90deg,#7F8D98_100%,white_100%)] 2xl:left-[48%] 2xl:w-[46%] 2xl:rotate-[-17deg]"
      />
      <div className="absolute bottom-[68px] left-[-8px] z-1 h-px w-full bg-white" />
    </div>
  );
};
