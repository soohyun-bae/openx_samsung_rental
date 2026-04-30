import { troubleshootingCard } from "../datas/troubleshooting.js";
import { motion } from "framer-motion";

export const TroubleshootingCard = () => {
  return (
    <div className="flex-row-center w-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex-col-center w-full gap-[52px] lg:flex-row lg:gap-15"
      >
        {troubleshootingCard.map((item, index) => (
          <div className="flex-col-center w-full" key={index}>
            <div
              className={`${
                index === 0
                  ? "bg-light-gray font-normal"
                  : "bg-white font-semibold lg:py-10"
              } border-border-gray text-md text-light-black relative flex flex-col rounded-xl border p-10 shadow-lg shadow-black/5 md:items-center lg:w-full`}
            >
              <div
                className={`${
                  index === 0
                    ? "bg-light-black font-regular"
                    : "bg-blue font-bold"
                } text-middle absolute -top-6 rounded-[58px] px-8.75 py-3.25 leading-none text-nowrap text-white`}
              >
                {item.title}
              </div>
              <div
                className={`${index === 0 ? "space-y-3" : "space-y-3"} w-max`}
              >
                {item.content.map((content, contentIndex) => (
                  <div className="w-max" key={contentIndex}>
                    {index === 0 ? (
                      <div className="flex-row-center md:w-full">
                        <div className="flex-row-center w-max gap-4.5">
                          <img
                            className="h-6.25 w-6.25"
                            src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776665114/x-icon_v6lctg.png"
                          />
                          <p className="font-regular text-md relative z-5">
                            {content}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="relative flex items-center gap-2.75 lg:gap-7.5">
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
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
