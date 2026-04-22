export const RevenueStructureCard = () => {
  return (
    <div className="flex flex-col gap-5.5">
      {/* 1 */}
      <div className="relative bg-[linear-gradient(100deg,#02101B_0%,#07243A_50%,#02101B_100%)] rounded-[15px] flex-row-center">
          <div className="absolute inset-0 overflow-hidden">
            <img src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776833433/money-1_mx2lwr.png" className="absolute w-[10vw] top-[25%] right-[31%] opacity-80 md:w-[5vw] md:top-[25%] md:right-[15%] lg:w-[4vw]" />
            <img src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776833434/money-2_lru4ma.png" className="absolute w-[10vw] top-[30%] right-[5%] opacity-80 md:w-[5vw] md:top-[25%] md:right-[3%] lg:w-[4vw]" />
            <img src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776833434/money-3_dxpopq.png" className="absolute w-[10vw] top-[45%] right-[25%] opacity-80 md:w-[5vw] md:top-[45%] md:right-[10%] md:opacity-100 lg:w-[4vw]" />
            <img src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776833434/money-4_mmxemn.png" className="absolute w-[10vw] top-[85%] right-[40%] opacity-80 md:w-[5vw] md:top-[65%] md:right-[22%] md:opacity-100 lg:w-[4vw]" />
            <img src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776833435/money-5_wnres8.png" className="absolute w-[10vw] top-[65%] right-[20%] opacity-60 md:w-[5vw] md:top-[65%] md:right-[10%] md:opacity-100 lg:w-[4vw]" />
            <img src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776833435/money-6_c7azwp.png" className="absolute w-[9vw] top-[60%] right-[2%] opacity-70 md:w-[5vw] md:top-[60%] md:right-[0%] md:opacity-100 lg:w-[3vw]" />
            <img src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776836071/money-7_j2uo69.png" className="hidden absolute w-[9vw] md:block md:w-[5vw] md:top-[95%] md:right-[25%] md:opacity-40 lg:w-[4vw]" />
            <img src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776835401/money-8_cevk58.png" className="absolute w-[9vw] top-[85%] right-[20%] opacity-70 md:w-[5vw] md:top-[93%] md:right-[10%] md:opacity-100 lg:w-[4vw] lg:top-[90%]" />
            <img src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776833437/money-9_gplpes.png" className="absolute w-[9vw] top-[85%] right-[0%] opacity-70 md:w-[5vw] md:opacity-100 lg:w-[3vw]" />
          </div>
        <div className="flex-col-center gap-5.5 py-11.25">
          <img
            src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776831318/money-icon_i6iwpx.png"
            className="w-14 h-14"
          />
          <div className="flex-col-center gap-5.5">
            <p className="text-white text-lg-to-20 font-semibold">1건당 판매 수수료</p>
            <p className="text-3xl font-bold bg-[linear-gradient(90deg,#B8B8B8_0%,white_50%,#B8B8B8_100%)] text-transparent bg-clip-text">약 00만원</p>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="bg-[linear-gradient(100deg,#02101B_0%,#07243A_50%,#02101B_100%)] rounded-[15px] flex-row-center">
        <div className="flex-col-center gap-5.5 py-11.25">
          <img
            src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776831351/infinite-icon_f6khd1.png"
            className="w-21"
          />
          <div className="flex-col-center gap-5.5">
            <p className="text-white text-lg-to-20 font-semibold">월 반복 수익</p>
            <p className="text-3xl font-bold bg-[linear-gradient(90deg,#B8B8B8_0%,white_50%,#B8B8B8_100%)] text-transparent bg-clip-text">약 O만원 x 약정 기간</p>
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className="bg-[linear-gradient(100deg,#02101B_0%,#07243A_50%,#02101B_100%)] rounded-[15px] flex-row-center">
        <div className="flex-col-center gap-5.5 py-11.25">
          
          <div className="flex-col-center gap-5.5">
            <p className="text-white text-2xl font-semibold">월 건당 <span className="text-3xl font-bold bg-[linear-gradient(90deg,#B8B8B8_0%,white_50%,#B8B8B8_100%)] text-transparent bg-clip-text">5배 수익</span></p>
            <p className="text-md font-light text-white">(운영비 월 10만원 차감 후)</p>
          </div>
        </div>
      </div>
    </div>
  );
};
