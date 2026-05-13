import { supportCard } from "../datas/supportCard.jsx";
import { Carousel } from "./Carousel.jsx";
import { motion } from "framer-motion";

export const SupportContents = () => {
  return (
    <Carousel controlsClassName="max-w-[540px]">
      {supportCard.map((item, index) => ({ isActive }) => (
        <motion.div
          animate={{
            scale: isActive ? 1 : 1,
            opacity: isActive ? 1 : 0.7,
          }}
          transition={{
            duration: 0.35,
          }}
          className={`flex h-full w-full max-w-[540px] justify-center rounded-[30px] border bg-white px-[40px] py-14 transition-all duration-300 ${
            isActive
              ? "border-blue shadow-[0_10px_20px_rgba(0,0,0,0.05)]"
              : "border-[#E8E8E8] shadow-[0_10px_20px_rgba(0,0,0,0.05)]"
          } `}
        >
          <div className="flex w-[70%] flex-col items-center gap-12">
            {/* icon */}
            <div className="flex h-[clamp(141px,calc((150/1920)*100vw),150px)] w-[clamp(141px,calc((150/1920)*100vw),150px)] items-center justify-center">
              <img src={item.imgSrc} alt={item.title} className={"w-[219px]"} />
            </div>

            {/* text */}
            <div className="flex flex-col items-center gap-5">
              <p
                className={`text-subTitle text-center font-bold text-nowrap transition-colors duration-300 ${
                  isActive
                    ? "bg-linear-to-b to-blue from-dark-blue bg-clip-text text-transparent"
                    : "text-[#98A3D4]"
                } `}
              >
                {item.title}
              </p>

              <p className="text-center text-[clamp(14px,calc((20/1920)*100vw),20px)] leading-[20px] text-nowrap break-keep text-[#666666] lg:leading-[28px]">
                {item.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </Carousel>
  );
};
