import { ResearchCardGraph } from "./ResearchCardGraph.jsx";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const ResearchCard = () => {
  const graphRef = useRef(null);
  const graphInView = useInView(graphRef, { once: true, amount: 0.01 });

  const arrowInitial = {
    WebkitMaskImage:
      "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)",
    maskImage:
      "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)",
  };

  const arrowAnimation = {
    WebkitMaskImage:
      "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%, rgba(0,0,0,0) 100%)",
    maskImage:
      "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%, rgba(0,0,0,0) 100%)",
  };

  return (
    <div className="relative w-[449px] space-y-[39px] overflow-hidden rounded-t-[30px] border-t border-r border-l border-[#2488FF] bg-white px-[33px] pt-[44px] pb-[clamp(100px,calc((137/1920)*100vw),137px)] lg:flex lg:w-full lg:flex-col lg:items-center">
      <p className="font-line text-left text-[clamp(28px,calc((45/1920)*100vw),45px)] leading-[33px] font-bold text-[#014AFF] 2xl:pt-10 2xl:pb-30">
        2026년 100조 <br className="lg:hidden" /> 돌파 예상!
      </p>
      {/* </div> */}
      <div className="relative w-full">
        <div className="relative flex w-full flex-col">
          <motion.div
            initial={arrowInitial}
            animate={graphInView ? arrowAnimation : arrowInitial}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute bottom-55 -left-3 w-[88%] -rotate-[15deg] max-[500px]:bottom-60 max-[500px]:w-[65vw] lg:hidden"
          >
            <img
              loading="lazy"
              src="https://res.cloudinary.com/dnigvhehc/image/upload/f_auto,q_auto/v1778052384/mobile_research_arrow_nfjdy0.png"
            />
          </motion.div>

          <div
            ref={graphRef}
            className="relative z-5 flex w-full items-end justify-around"
          >
            <ResearchCardGraph
              ani
              isInView={graphInView}
              delay={0}
              height={"h-[53px]"}
              bgColor={"bg-[#B8B8B8]"}
              tText={
                <>
                  19조
                  <br /> 5,000억{" "}
                </>
              }
              // year={"2011"}
            />
            <ResearchCardGraph
              ani
              isInView={graphInView}
              delay={0.15}
              height={"h-[87px]"}
              bgColor={"bg-[#B8B8B8]"}
              tText={
                <>
                  25조
                  <br />
                  9,000억
                </>
              }
              // year={"2016"}
            />
            <ResearchCardGraph
              ani
              isInView={graphInView}
              delay={0.3}
              height={"h-[140px]"}
              bgColor={"bg-[#B8B8B8]"}
              tText={
                <>
                  31조
                  <br />
                  9,000억
                </>
              }
              // year={"2018"}
            />
            <ResearchCardGraph
              ani
              isInView={graphInView}
              delay={0.45}
              height={"h-[184px]"}
              bgColor={"bg-[#B8B8B8]"}
              tText={
                <>
                  40조
                  <br />
                  1,000억
                </>
              }
              // year={"2020"}
            />
            <ResearchCardGraph
              ani
              popText
              isInView={graphInView}
              delay={0.6}
              height={"h-[367px]"}
              bgColor={"bg-[linear-gradient(180deg,#0049FF_0%,white_100%)]"}
              tText={
                <p className="leading-6 text-[#014AFF]">
                  <span className="text-subTitle font-extrabold">100조</span>
                  <br /> <span className="text-md font-light">(예상)</span>
                </p>
              }
              // year={"2026"}
            />
            <motion.div
              initial={arrowInitial}
              animate={graphInView ? arrowAnimation : arrowInitial}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute bottom-25 left-15 -z-1 hidden w-[75%] -rotate-[13deg] lg:block xl:bottom-20 xl:left-20 xl:w-[75%] 2xl:bottom-8 2xl:left-23 2xl:w-[80%]"
            >
              <img
                loading="lazy"
                className="w-full xl:skew-y-7 2xl:skew-y-15"
                src="https://res.cloudinary.com/dnigvhehc/image/upload/f_auto,q_auto/v1778040784/research_arrow_imaana.png"
              />
            </motion.div>
            <div className="bg-border-gray absolute bottom-0 left-0 h-[1px] w-full" />
          </div>
          <div className="text-research-graph-sm text-light-black flex items-center justify-around pt-[8px] pb-[19px] font-semibold">
            <p>2011</p>
            <p>2016</p>
            <p>2018</p>
            <p>2020</p>
            <p>2026</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-[10%] w-full bg-[linear-gradient(180deg,transparent_0%,black_100%)] opacity-5" />
    </div>
  );
};
