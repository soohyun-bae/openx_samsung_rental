import { troubleshootingCard } from "../datas/troubleshooting.js";
import { motion } from "framer-motion";

export const TroubleshootingCard = () => {
  return (
    <div className="relative flex-row-center w-full">
      {/* <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative flex-col-center w-full gap-[52px] lg:flex-row lg:gap-15"
      >
        {troubleshootingCard.map((item, index) => (
          <div className="flex-col-center w-full" key={index}>
            <div
              className={`${
                index === 0
                  ? "border-[#2488FF] bg-white font-semibold lg:py-10"
                  : "absolute bg-light-gray border-border-gray font-normal shadow-lg shadow-black/5"
              } text-md text-light-black flex w-full flex-col items-center justify-center rounded-[20px] border p-10 md:items-center lg:w-full`}
            >
              <div
                className={`${
                  index === 0
                    ? "bg-blue py-[12px] font-bold "
                    : "bg-light-black font-regular py-[10px]"
                } font-line text-trouble-shooting-card-title absolute -top-6 rounded-[58px] px-[20px] leading-[20px] text-nowrap text-white`}
              >
                <span className="relative top-[2px]">{item.title}</span>
              </div>
              <div className={`w-max space-y-[16px]`}>
                {item.content.map((content, contentIndex) => (
                  <div className="w-full" key={contentIndex}>
                    {index === 0 ? (
                      <div className="relative flex items-center gap-[16px] lg:gap-7.5">
                        <motion.div
                          style={{ transformOrigin: "left" }}
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ duration: 0.8, delay: 0.8 }}
                          className="to-blue absolute right-[calc(100%-0.4rem)] z-0 hidden h-px w-[14vw] bg-linear-to-r from-white lg:block 2xl:w-[16vw]"
                        />
                        <img
                          className="h-6 w-6"
                          src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776664636/blue-checkbox_f6p3cc.png"
                        />
                        <p className="text-md relative z-10 font-semibold">
                          {content}
                        </p>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2.75 md:w-full">
                        <div className="flex-row-center w-max gap-[16px]">
                          <img
                            className="h-6.25 w-6.25"
                            src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776665114/x-icon_v6lctg.png"
                          />
                          <p className="font-regular text-md relative z-5">
                            {content}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </motion.div> */}
      <div className="relative flex-col-center w-full lg:flex-row lg:gap-15">
      {/* 위 카드 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-20 flex flex-col justify-center w-full"
      >
        <Card item={troubleshootingCard[0]} isTop />
      </motion.div>

      {/* 아래 카드 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="-mt-8 w-full"
      >
        <div className="relative z-10">
          <Card item={troubleshootingCard[1]} />
        </div>
      </motion.div>
    </div>
    </div>
  );
};

const Card = ({ item, isTop = false }) => {
  return (
     <div
      className={`
        relative flex w-full flex-col items-center rounded-[20px] border
        ${isTop
          ? "border-[#2488FF] bg-white font-semibold"
          : "border-border-gray bg-light-gray shadow-lg shadow-black/5"}
      `}
    >
      <div
        className={`
          font-line text-trouble-shooting-card-title absolute rounded-[58px] px-[20px] leading-[20px] text-nowrap text-white
          ${isTop ? "bg-blue -top-6 py-[12px] font-bold" : "top-16 bg-[#747474] font-regular py-[10px]"}
        `}
      >
        <span className="relative top-[2px]">{item.title}</span>
      </div>

      <div className={`${isTop ? "pt-[45px] pb-[36px]" : "pt-[140px] pb-[35px]"} space-y-4`}>
        {item.content.map((content, idx) => (
          <div key={idx} className={`${isTop ? "" : ""}flex items-center gap-4`}>
            <img
              className="h-6 w-6"
              src={
                isTop
                  ? "https://res.cloudinary.com/dnigvhehc/image/upload/v1776664636/blue-checkbox_f6p3cc.png"
                  : "https://res.cloudinary.com/dnigvhehc/image/upload/v1776665114/x-icon_v6lctg.png"
              }
            />
            <p>{content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};