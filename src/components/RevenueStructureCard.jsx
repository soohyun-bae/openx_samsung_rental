import { RevenueGraph } from "./RevenueGraph.jsx";

export const RevenueStructureCard = () => {
  return (
    <div className="flex flex-col gap-5.5">
      {/* 1 */}
      <div className="flex-row-center relative rounded-[15px] bg-[linear-gradient(100deg,#02101B_0%,#07243A_50%,#02101B_100%)]">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776833433/money-1_mx2lwr.png"
            className="absolute top-[25%] right-[31%] w-[10vw] opacity-80 md:top-[25%] md:right-[15%] md:w-[5vw] lg:w-[4vw]"
          />
          <img
            src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776833434/money-2_lru4ma.png"
            className="absolute top-[30%] right-[5%] w-[10vw] opacity-80 md:top-[25%] md:right-[3%] md:w-[5vw] lg:w-[4vw]"
          />
          <img
            src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776833434/money-3_dxpopq.png"
            className="absolute top-[45%] right-[25%] w-[10vw] opacity-80 md:top-[45%] md:right-[10%] md:w-[5vw] md:opacity-100 lg:w-[4vw]"
          />
          <img
            src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776833434/money-4_mmxemn.png"
            className="absolute top-[85%] right-[40%] w-[10vw] opacity-80 md:top-[65%] md:right-[22%] md:w-[5vw] md:opacity-100 lg:w-[4vw]"
          />
          <img
            src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776833435/money-5_wnres8.png"
            className="absolute top-[65%] right-[20%] w-[10vw] opacity-60 md:top-[65%] md:right-[10%] md:w-[5vw] md:opacity-100 lg:w-[4vw]"
          />
          <img
            src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776833435/money-6_c7azwp.png"
            className="absolute top-[60%] right-[2%] w-[9vw] opacity-70 md:top-[60%] md:right-[0%] md:w-[5vw] md:opacity-100 lg:w-[3vw]"
          />
          <img
            src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776836071/money-7_j2uo69.png"
            className="absolute hidden w-[9vw] md:top-[95%] md:right-[25%] md:block md:w-[5vw] md:opacity-40 lg:w-[4vw]"
          />
          <img
            src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776835401/money-8_cevk58.png"
            className="absolute top-[85%] right-[20%] w-[9vw] opacity-70 md:top-[93%] md:right-[10%] md:w-[5vw] md:opacity-100 lg:top-[90%] lg:w-[4vw]"
          />
          <img
            src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776833437/money-9_gplpes.png"
            className="absolute top-[85%] right-[0%] w-[9vw] opacity-70 md:w-[5vw] md:opacity-100 lg:w-[3vw]"
          />
        </div>
        <div className="flex-col-center gap-5.5 py-11.25">
          <img
            src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776831318/money-icon_i6iwpx.png"
            className="h-14 w-14"
          />
          <div className="flex-col-center gap-5.5">
            <p className="text-lg-to-20 font-semibold text-white">
              1건당 판매 수수료
            </p>
            <p className="bg-[linear-gradient(90deg,#B8B8B8_0%,white_50%,#B8B8B8_100%)] bg-clip-text text-3xl font-bold text-transparent">
              약 00만원
            </p>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="flex-row-center rounded-[15px] bg-[linear-gradient(100deg,#02101B_0%,#07243A_50%,#02101B_100%)]">
        <div className="flex-col-center gap-5.5 py-11.25">
          <img
            src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776831351/infinite-icon_f6khd1.png"
            className="w-21"
          />
          <div className="flex-col-center gap-5.5">
            <p className="text-lg-to-20 font-semibold text-white">
              월 반복 수익
            </p>
            <p className="bg-[linear-gradient(90deg,#B8B8B8_0%,white_50%,#B8B8B8_100%)] bg-clip-text text-3xl font-bold text-transparent">
              약 O만원 x 약정 기간
            </p>
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className="flex-row-center rounded-[15px] bg-[linear-gradient(100deg,#02101B_0%,#07243A_50%,#02101B_100%)]">
        <div className="flex-col-center gap-5.5 py-11.25">
          <div className="flex-col-center gap-5.5">
            <p className="text-2xl font-semibold text-white">
              월 건당{" "}
              <span className="bg-[linear-gradient(90deg,#B8B8B8_0%,white_50%,#B8B8B8_100%)] bg-clip-text text-3xl font-bold text-transparent">
                5배 수익
              </span>
            </p>
            <p className="text-md font-light text-white">
              (운영비 월 10만원 차감 후)
            </p>
          </div>
          <div>
            <RevenueGraph />
          </div>
        </div>
      </div>
    </div>
  );
};
