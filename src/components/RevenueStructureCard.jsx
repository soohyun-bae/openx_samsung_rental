import { revenueCard } from "../datas/revenueCard.jsx";
import { RevenueGraph } from "./RevenueGraph.jsx";

export const RevenueStructureCard = () => {
  return (
    <div className="flex w-max flex-col items-start">
      {revenueCard.map((item) => (
        <div key={item.title} className="flex w-max items-center gap-[10px]">
          <div className="h-[clamp(160px,calc((200/768)*100vw),200px)] w-[clamp(160px,calc((200/768)*100vw),200px)]">
            <img
              className="h-full w-full object-contain"
              src={item.imgSrc}
              alt={item.title}
            />
          </div>
          <div className="flex w-[clamp(140px,calc((170/768)*100vw),170px)] flex-col items-stretch gap-[22px]">
            <p className="flex w-full items-center justify-center rounded-[50px] bg-blue px-[35px] py-[13px] text-center text-[clamp(14px,calc((25/1920)*100vw),25px)] leading-none font-bold text-nowrap text-white">
              {item.title}
            </p>
            <p className="font-line bg-linear-to-b from-[#014AFF] to-[#1428A0] bg-clip-text text-center text-[clamp(25px,calc((45/1920)*100vw),45px)] leading-none font-bold text-nowrap text-transparent">
              {item.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
