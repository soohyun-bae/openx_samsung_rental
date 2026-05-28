import { reliabilityCardData } from "../datas/reliability.jsx";
import { ReliabilityContents } from "./ReliabilityContents.jsx";
import { motion } from "framer-motion";

export const ReliabilityContainer = () => {
  return (
    <>
      <div className="hidden lg:block">
        {reliabilityCardData.map((item, index) => (
          <motion.div
            key={`desktop-reliability-${item.imgSrc}`}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: index * 0.3,
            }}
            style={{ originX: 0.5 }}
            className="relative"
          >
            <img
              src={item.imgSrc}
              className="rounded-2xl bg-transparent drop-shadow-[4px_4px_10px_rgba(0,0,0,0.3)]"
            />
            <div
              className={`absolute top-1/2 z-5 flex -translate-y-1/2 flex-col gap-[18px] text-white ${index === 1 ? "right-1/2 pr-[3%] xl:pr-[5%] text-right" : "left-1/2 pl-[3%] xl:pl-[5%]"}`}
            >
              <div>{item.lgText}</div>
              <div className="text-reliability-sm font-light">{item.smText}</div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-col items-center gap-[25px] lg:hidden">
        {reliabilityCardData.map((item, index) => (
          <motion.div
            key={`mobile-reliability-${item.mobileImgSrc}`}
            className="relative"
            initial={{
              opacity: 0,
              scale: 0,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: index * 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformOrigin: "center center" }}
            className="relative"
          >
            <img
              className="h-[300px] w-[300px] rounded-[20px] bg-transparent shadow-[4px_4px_10px_rgba(0,0,0,0.3)]"
              src={item.mobileImgSrc}
            />
            <div className="absolute bottom-[26.59px] left-[24px] flex flex-col items-start gap-[15px] text-white">
              <div>{item.lgText}</div>
              <div className="text-reliability-sm font-light">{item.smText}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};
