import { ResearchCardGraph } from "./ResearchCardGraph.jsx";
import { motion } from "framer-motion";

export const ResearchCard = () => {
  return (
    <div className="space-y-[39px] rounded-[30px] border border-[#2488FF] bg-white/88 px-[33px] pt-[44px]">
      <img
        className="absolute top-[50%] left-[4%] hidden h-[20%] w-[78%] origin-center -rotate-[13.11deg] lg:block"
        src="https://res.cloudinary.com/dnigvhehc/image/upload/v1778040784/research_arrow_imaana.png"
      />
      <motion.div
        initial={{
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%)",
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%)",
        }}
        whileInView={{
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 100%)",
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 100%)",
        }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-70 right-22 w-[75%] -rotate-[13.11deg]"
      >
        <img
          className="origin-center"
          src="https://res.cloudinary.com/dnigvhehc/image/upload/v1778052384/mobile_research_arrow_nfjdy0.png"
        />
      </motion.div>
      {/* <div className="flex flex-col gap-[13px]"> */}
      <p className="font-line text-blue text-left text-[clamp(30px,calc((1920/40)*100vw),40px)] leading-[45px] font-bold">
        2026년 100조 <br /> 돌파 예상!
      </p>
      {/* </div> */}
      <div className="relatvie w-full">
        <div className="flex w-full items-end justify-around">
          <div className="bg-border-gray absolute bottom-11 h-[1px] w-full" />
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
                <span className="text-research-graph-md font-extrabold">
                  100조
                </span>
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
