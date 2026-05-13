import { revenueCard } from "../datas/revenueCard.jsx";

export const RevenueStructureCardDesktop = () => {
  return (
    <div className="flex justify-center gap-[25px]">
      {revenueCard.map((item) => (
        <div
          key={item.title}
          className="relative flex w-[383px] flex-col items-center justify-around rounded-[30px] bg-white shadow-sm shadow-black/5"
        >
          <div className="flex h-full w-max flex-col items-center justify-center gap-[50px] px-[30px] pt-[71px] pb-[42px]">
            <div className="flex h-[clamp(200px,calc((278/1920)*100vw),278px)] w-[clamp(200px,calc((278/1920)*100vw),278px)] items-end transition-all duration-300 ease-out hover:scale-[120%]">
              <img className="h-auto w-full" src={item.deskImgSrc} />
            </div>
            <p className="font-line leading-auto revenue-title-text-animate text-[clamp(25px,calc((45/1920)*100vw),45px)] font-bold text-nowrap">
              {item.price}
            </p>
          </div>
          <p className="left-center absolute -top-5 flex w-[clamp(120px,calc((190/1920)*100vw),190px)] items-center justify-center rounded-[50px] bg-[#014AFF] px-[35px] py-[13px] text-center text-[clamp(14px,calc((25/1920)*100vw),25px)] leading-none font-semibold text-nowrap text-white">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};
