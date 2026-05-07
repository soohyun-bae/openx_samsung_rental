import { motion } from "framer-motion";
import { Carousel } from "./Carousel";
import { differentiationCardData } from "../datas/differentiation";

export const DifferentiationCard = () => {
  return (
    <Carousel>
      {differentiationCardData.map((item, index) => ({ isActive }) => (
        <motion.div
          animate={{
            scale: isActive ? 1 : 0.9,
            opacity: isActive ? 1 : 0.35,
          }}
          transition={{
            duration: 0.35,
          }}
          className={`h-full w-[25vw] rounded-[30px] border bg-white px-6 py-14 transition-all duration-300 ${
            isActive
              ? "border-[#4B8EFF] shadow-[0_10px_40px_rgba(75,142,255,0.08)]"
              : "border-[#E8E8E8]"
          } `}
        >
          <div className="flex flex-col items-center gap-12">
            {/* icon */}
            <div className="flex h-[clamp(141px,calc((150/1920)*100vw),150px)] w-[clamp(141px,calc((150/1920)*100vw),150px)] items-center justify-center rounded-full bg-[#F8F8F8]">
              <img
                src={item.imgSrc}
                alt={item.title}
                className={
                  index === 1
                    ? "w-[96px]"
                    : index === 2
                      ? "w-[219px]"
                      : index === 3
                        ? "w-[76px]"
                        : "w-[80px]"
                }
              />
            </div>

            {/* text */}
            <div className="flex flex-col items-center gap-5">
              <p
                className={`text-subTitle text-center font-bold transition-colors duration-300 ${
                  isActive ? "text-[#1637A2]" : "text-[#98A3D4]"
                } `}
              >
                {item.title}
              </p>

              <p className="text-center text-sm leading-[28px] break-keep text-[#666666]">
                {item.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </Carousel>
  );
};
