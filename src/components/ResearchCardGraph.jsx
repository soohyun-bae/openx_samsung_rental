import { motion } from "framer-motion";

export const ResearchCardGraph = ({
  height,
  tText,
  bgColor,
  year,
  ani = false,
  delay = 0,
}) => {
  return (
    <div className="flex w-[45px] flex-col items-center gap-[8px]">
      <div className="flex flex-col items-center gap-[14px]">
        {ani ? (
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-research-graph-sm text-center font-bold text-nowrap text-[#747474]"
          >
            {tText}
          </motion.p>
        ) : (
          <p className="text-research-graph-sm text-center font-bold text-nowrap text-[#747474]">
            {tText}
          </p>
        )}
        {ani ? (
          <>
            <motion.div
              initial={{
                WebkitMaskImage:
                  "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)",
                maskImage:
                  "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)",
              }}
              whileInView={{
                WebkitMaskImage:
                  "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%, rgba(0,0,0,0) 100%)",
                maskImage:
                  "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%, rgba(0,0,0,0) 100%)",
              }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: `${delay}` }}
              className={`w-[42px] lg:w-[77px] ${height} rounded-t-2xl ${bgColor}`}
            />
          </>
        ) : (
          <>
            <div
              className={`w-[42px] lg:w-[77px] ${height} rounded-t-2xl ${bgColor}`}
            />
          </>
        )}
      </div>

      {/* <p className="text-research-graph-sm text-light-black flex justify-around pb-[19px] font-semibold">
        {year}
      </p> */}
    </div>
  );
};
