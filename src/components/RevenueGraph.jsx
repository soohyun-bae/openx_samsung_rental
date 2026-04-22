export const RevenueGraph = () => {
  return (
    <div>
      <div>
        <div className="relative flex h-[330px] items-end gap-[39px] px-[11px]">
          <div className="flex flex-col items-center gap-[20px]">
            <div className="h-[6px] w-[6px] rounded-full bg-white" />
            <div className="flex flex-col items-center">
              <p className="text-[16px] font-light text-white">월 수익</p>
              <p className="text-[20px] font-semibold text-white">00만원</p>
              <div className="h-[26px] w-[49px] bg-[#747474]" />
            </div>
            <p className="text-[16px] font-light text-white">
              월 10건 <br />
              계약시
            </p>
          </div>
          <div className="flex flex-col items-center gap-[20px]">
            <div className="h-[6px] w-[6px] rounded-full bg-white" />
            <div className="flex flex-col items-center">
              <p className="text-[16px] font-light text-white">월 수익</p>
              <p className="text-[20px] font-semibold text-white">000만원</p>
              <div className="h-[69px] w-[49px] bg-[#747474]" />
            </div>
            <p className="text-[16px] font-light text-white">
              월 20건 <br />
              계약시
            </p>
          </div>
          <div className="flex flex-col items-center gap-[20px]">
            <div className="relative flex flex-col items-center">
              <div
                className="absolute h-[229px] w-[115px] bg-[linear-gradient(180deg,#0049FF_0%,#041827_100%)]"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 18%, 100% 100%, 0% 100%, 0% 18%)",
                }}
              />
              <div className="absolute h-[229px] w-[115px] bg-[linear-gradient(180deg,#0049FF_0%,#041827_100%)]" />
              <div className="z-1 h-[6px] w-[6px] rounded-full bg-white" />
              <p className="z-1 text-[16px] font-light text-white">월 수익</p>
              <p className="z-1 text-[20px] font-semibold text-white">
                0,000만원
              </p>
              <div className="z-1 h-[164px] w-[49px] bg-[#0049FF]" />
            </div>
            <p className="text-[16px] font-light text-white">
              월 30건 <br />
              계약시
            </p>
          </div>
          <div className="absolute bottom-[68px] left-[-8px] z-1 h-px w-full bg-white" />
        </div>
      </div>
    </div>
  );
};
