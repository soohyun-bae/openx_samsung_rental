import { motion } from "framer-motion";

export const RevenueGraph = () => {
  return (
    <div className="flex h-82.5 items-end gap-9.75 px-2.75 lg:gap-[100px] 2xl:gap-[173.57px]">
      <div className="flex items-end gap-9.75 lg:gap-[100px] 2xl:gap-62.5">
        <div className="flex flex-col items-center gap-[20px]">
          <div className="relative">
            <div className="relative z-11 h-[6px] w-[6px] rounded-full bg-white" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0 }}
              className="absolute top-[3px] h-[2px] w-[115px] origin-left rotate-[-22deg] bg-[linear-gradient(90deg,#062237_0%,#7F8D98_100%)] lg:w-[2880%] lg:rotate-[-14.5deg] 2xl:left-[6%] 2xl:w-[5600%] 2xl:rotate-[-7.5deg]"
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[16px] font-light text-white">월 수익</p>
            <p className="text-[20px] font-semibold text-nowrap text-white">
              00만원
            </p>
            <div className="h-[26px] w-[49px] bg-[#747474] 2xl:w-[79.87px]" />
          </div>
          <p className="text-center text-[16px] font-light text-white">
            월 10건 <br />
            계약시
          </p>
        </div>
        <div className="flex flex-col items-center gap-[20px]">
          <div className="relative">
            <div className="relative z-3 h-[6px] w-[6px] rounded-full bg-white" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute bottom-[4px] left-[5px] z-2 h-[2px] w-[153.5px] origin-left rotate-[-40deg] bg-[linear-gradient(90deg,#7F8D98_0%,white_100%)] lg:w-[3400%] lg:rotate-[-28.8deg] 2xl:top-[2px] 2xl:left-[49%] 2xl:w-[6400%] 2xl:rotate-[-28.2deg]"
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[16px] font-light text-white">월 수익</p>
            <p className="text-[20px] font-semibold text-nowrap text-white">
              000만원
            </p>
            <div className="h-[69px] w-[49px] bg-[#747474] 2xl:w-[79.87px]" />
          </div>
          <p className="text-center text-[16px] font-light text-white">
            월 20건 <br />
            계약시
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-[20px] 2xl:px-[79px]">
        <div className="flex w-max flex-col items-center">
          <div className="relative flex flex-col items-center">
            <div className="z-3 mb-40 flex flex-col items-center 2xl:mb-60">
              <p className="hidden text-[20px] font-bold text-white 2xl:block">
                약 5배 수익
              </p>
              <div className="h-[6px] w-[6px] rounded-full bg-white" />
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
              className="absolute bottom-0 2xl:h-[425px] 2xl:w-[238.23px]"
            >
              <img
                src="https://res.cloudinary.com/dnigvhehc/image/upload/f_auto,q_auto/v1776841282/revenue-graph-arrow_lkgsah.png"
                className="h-[292px] w-[115px] 2xl:h-[425px] 2xl:w-[238.23px]"
                alt="수익 그래프 화살표 이미지"
              />
            </motion.div>
          </div>
        </div>
        <p className="text-center text-[16px] font-light text-white">
          월 30건 <br />
          계약시
        </p>
      </div>
    </div>
  );
};
