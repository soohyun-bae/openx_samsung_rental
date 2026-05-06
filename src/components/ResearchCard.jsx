import { ResearchCardGraph } from "./ResearchCardGraph.jsx";

export const ResearchCard = () => {
  return (
    <div className="space-y-[39px] rounded-[30px] bg-white/88 pt-[33px] shadow-lg shadow-black/5">
      <img
        className="absolute top-[43%] left-[6%] w-[75%] origin-center -rotate-[13.11deg]"
        src="https://res.cloudinary.com/dnigvhehc/image/upload/v1778040784/research_arrow_imaana.png"
      />
      <div className="flex flex-col gap-[13px]">
        <p className="text-md text-center font-medium">
          국내 렌탈시장 규모 추이 및 전망
        </p>
        <p className="font-line text-blue text-center text-[clamp(30px,calc((1920/40)*100vw),40px)] leading-[45px] font-bold">
          2026년 <br />
          100조 돌파 예상!
        </p>
      </div>
      <div>
        <div className="border-border-gray flex w-full items-end justify-around border-b">
          <ResearchCardGraph
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
            height={"h-[367px]"}
            bgColor={"bg-[linear-gradient(180deg,#0049FF_0%,white_100%)]"}
            tText={
              <p className="leading-6 text-[#014AFF]">
                <span className="text-[clamp(30px,calc((1920/35)*100vw),35px)] font-extrabold">
                  100조
                </span>
                <br /> <span className="text-md font-light">(예상)</span>
              </p>
            }
            // year={"2026"}
          />
        </div>
        <div className="text-md text-light-black flex justify-around pt-[8px] pb-[21px] font-semibold">
          <p>2011</p>
          <p>2016</p>
          <p>2018</p>
          <p>2020</p>
          <p>2026</p>
        </div>
      </div>
    </div>
  );
};
