import { ResearchCardGraph } from "./ResearchCardGraph.jsx";
import { motion } from "framer-motion";

export const ResearchCard = () => {
  return (
    <div className="relative space-y-[39px] overflow-hidden rounded-t-[30px] border-t border-r border-l border-[#2488FF] bg-white/88 px-[33px] pt-[44px] pb-[clamp(100px,calc((137/1920)*100vw),137px)]">
      <motion.div
        initial={{
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)",
        }}
        whileInView={{
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%, rgba(0,0,0,0) 100%)",
        }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-35 left-30 hidden w-[70%] origin-center -rotate-[0.15deg] lg:block lg:w-[67%]"
      >
        <img
          className="h-[352px] w-[70vw] origin-center"
          src="https://res.cloudinary.com/dnigvhehc/image/upload/v1778040784/research_arrow_imaana.png"
        />
      </motion.div>
      <motion.div
        initial={{
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)",
        }}
        whileInView={{
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%, rgba(0,0,0,0) 100%)",
        }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-60 left-10 -rotate-[13.11deg] max-[500px]:left-4 lg:hidden"
      >
        <img
          className="h-[clamp(123px,calc((352/1920)*100vw),352px)] w-[70vw] origin-center md:w-[40vw]"
          src="https://res.cloudinary.com/dnigvhehc/image/upload/v1778052384/mobile_research_arrow_nfjdy0.png"
        />
      </motion.div>
      {/* <div className="flex flex-col gap-[13px]"> */}
      <p className="font-line text-left text-[clamp(28px,calc((45/1920)*100vw),45px)] leading-[33px] font-bold text-[#0039C9]">
        2026년 100조 <br /> 돌파 예상!
      </p>
      {/* </div> */}
      <div className="relative w-full">
        <div className="relative flex w-full items-end justify-around">
          <div className="bg-border-gray absolute bottom-[clamp(44px,calc((56/1920)*100vw),56px)] left-0 h-[1px] w-full" />
          <ResearchCardGraph
            height={"h-[53px]"}
            bgColor={"bg-[#B8B8B8]"}
            tText={
              <>
                19조
                <br /> 5,000억{" "}
              </>
            }
            year={"2011"}
          />
          <ResearchCardGraph
            height={"h-[87px]"}
            bgColor={"bg-[#B8B8B8]"}
            tText={
              <>
                25조
                <br />
                9,000억
              </>
            }
            year={"2016"}
          />
          <ResearchCardGraph
            height={"h-[140px]"}
            bgColor={"bg-[#B8B8B8]"}
            tText={
              <>
                31조
                <br />
                9,000억
              </>
            }
            year={"2018"}
          />
          <ResearchCardGraph
            height={"h-[184px]"}
            bgColor={"bg-[#B8B8B8]"}
            tText={
              <>
                40조
                <br />
                1,000억
              </>
            }
            year={"2020"}
          />
          <ResearchCardGraph
            ani
            height={"h-[367px]"}
            bgColor={"bg-[linear-gradient(180deg,#0049FF_0%,white_100%)]"}
            tText={
              <p className="leading-6 text-[#014AFF]">
                <span className="text-subTitle font-extrabold">100조</span>
                <br /> <span className="text-md font-light">(예상)</span>
              </p>
            }
            year={"2026"}
          />
        </div>
      </div>
    </div>
  );
};
