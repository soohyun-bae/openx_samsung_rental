import { differentiationCardData } from "../datas/differentiation.jsx";
import { motion } from "framer-motion";

export const DifferentiationCard = () => {
  return (
    <div className="grid grid-cols-1 gap-5.5 xl:grid-cols-2">
      {differentiationCardData.map((item, index) => (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            delay: index * 0.3,
          }}
          key={index}
          className="border-border-gray rounded-[15px] border bg-white px-5.25 py-11.25"
        >
          <div className="flex flex-col items-center gap-[48.85px] md:gap-2.5">
            <div className="flex-row-center h-22.5">
              <img
                src={item.imgSrc}
                className={
                  index === 1
                    ? "h-auto w-[96.68px]"
                    : index === 2
                      ? "w-54.75"
                      : index === 3
                        ? "w-[76.25px]"
                        : "h-auto w-[79.7px]"
                }
              />
            </div>
            <div className="flex flex-col items-center gap-5.5">
              <p className="text-blue text-lg font-bold">{item.title}</p>
              <p className="font-regular text-light-black text-center text-[16px] text-nowrap break-keep">
                {item.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
