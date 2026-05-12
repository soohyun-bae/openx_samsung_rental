import { supportCard } from "../datas/supportCard.jsx";
import { Carousel } from "./Carousel.jsx";
import { motion } from "framer-motion";

export const SupportContents = () => {
  return (
    <Carousel controlsClassName="w-full max-w-[540px]">
      {supportCard.map((item, index) => ({ isActive }) => (
        <motion.div
          animate={{
            scale: isActive ? 1 : 1,
            opacity: isActive ? 1 : 0.7,
          }}
          transition={{
            duration: 0.35,
          }}
          className={`h-full w-full max-w-[540px] rounded-[30px] border bg-white py-14 transition-all duration-300 ${
            isActive
              ? "border-[#4B8EFF] shadow-[0_10px_20px_rgba(0,0,0,0.05)]"
              : "border-[#E8E8E8] shadow-[0_10px_20px_rgba(0,0,0,0.05)]"
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
                  isActive
                    ? "bg-linear-to-b from-[#014AFF] to-[#2488FF] bg-clip-text text-transparent"
                    : "text-[#98A3D4]"
                } `}
              >
                {item.title}
              </p>

              <p className="text-center text-sm leading-[20px] break-keep text-[#666666] lg:leading-[28px]">
                {item.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </Carousel>
  );
};
