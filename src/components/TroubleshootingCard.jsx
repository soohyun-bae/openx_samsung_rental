import { troubleshootingCard } from "../datas/troubleshooting.jsx";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const TroubleshootingCard = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <div ref={containerRef} className="flex-row-center relative w-full">
      <div className="flex-col-center relative w-full lg:hidden">
        {/* 위 카드 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 flex w-full flex-col justify-center"
        >
          <Card item={troubleshootingCard[0]} isTop isInView={isInView} />
        </motion.div>

        {/* 아래 카드 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="-mt-8 w-full lg:mt-0 lg:w-[92%] lg:translate-x-8"
        >
          <div className="relative z-10">
            <Card item={troubleshootingCard[1]} />
          </div>
        </motion.div>
      </div>
      <div className="relative hidden w-full flex-row-reverse items-center justify-center lg:flex">
        {/* 위 카드 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 flex w-full flex-col justify-center"
        >
          <Card item={troubleshootingCard[0]} isTop isInView={isInView} />
        </motion.div>

        {/* 아래 카드 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="-mt-8 w-full lg:mt-0 lg:w-[92%] lg:translate-x-8"
        >
          <div className="relative z-10">
            <Card item={troubleshootingCard[1]} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Card = ({ item, isTop = false, isInView = false }) => {
  return (
    <div
      className={`relative flex w-full flex-col items-center rounded-[20px] border ${
        isTop
          ? "border-[#2488FF] bg-white font-semibold"
          : "border-border-gray bg-light-gray shadow-lg shadow-black/5 lg:rounded-r-[0px] lg:border-r-0"
      } `}
    >
      <div
        className={`font-line text-trouble-shooting-card-title absolute rounded-[58px] px-[20px] leading-none text-nowrap text-white ${isTop ? "-top-6 bg-[#0039C9] py-[12px] font-bold" : "font-regular top-16 bg-[#9F9F9F] py-[10px] lg:-top-6"} `}
      >
        <span className="relative top-[2px]">{item.title}</span>
      </div>

      <div
        className={`${isTop ? "pt-[45px] pb-[36px] lg:py-[74px]" : "pt-[140px] pb-[35px] lg:py-[70px]"} space-y-4`}
      >
        {item.content.map((content, idx) => (
          <div
            key={idx}
            className={`${isTop ? "" : ""}flex items-center gap-4`}
          >
            <div className="relative">
              <img
                className="h-6 w-6"
                src={
                  isTop
                    ? "https://res.cloudinary.com/dnigvhehc/image/upload/f_auto,q_auto/v1778202802/checkbox-icon_uson6l.png"
                    : "https://res.cloudinary.com/dnigvhehc/image/upload/f_auto,q_auto/v1778202624/x-icon_mk2veb.png"
                }
              />
              {isTop ? (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={
                    isInView
                      ? { opacity: 1, scaleX: 1 }
                      : { opacity: 0, scaleX: 0 }
                  }
                  style={{ transformOrigin: "left" }}
                  transition={{ duration: 0.8 }}
                  className="absolute top-1/2 right-5 hidden h-px w-[10vw] -translate-y-1/2 bg-[linear-gradient(90deg,white_0%,#0039C9_100%)] xl:block"
                />
              ) : (
                <></>
              )}
            </div>
            <p
              className={`${isTop ? "text-troubleshooting-top-content text-black" : "text-md text-[#9B9B9B]"}`}
            >
              {content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
