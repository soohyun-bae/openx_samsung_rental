export const ExpenseCompo = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[5.68px] px-[50px]">
      <div className="flex w-full justify-evenly rounded-[61px] bg-[#014AFF] py-[13px] text-white">
        <p className="text-[clamp(16px,calc((30/1920)*100vw),30px)] font-bold">
          항목
        </p>
        {/* <p className="">|</p> */}
        <div className="relative z-500 w-[1px] bg-white" />
        <p className="text-[clamp(16px,calc((30/1920)*100vw),30px)] font-bold">
          금액
        </p>
      </div>

      {/* 테이블 */}
      <div className="w-full rounded-[20px] shadow-[4px_4px_12px_rgba(0,0,0,0.15)]">
        {/* 가맹비 */}
        <div className="flex items-center border-b border-[#E3E3E3]">
          <div className="leading-none bg-border-gray flex-1 rounded-tl-[20px] py-[18px] text-center text-[clamp(14px,calc((25/1920)*100vw),25px)] font-semibold text-[#5E5E5E] lg:py-[45px]">
            가맹비
          </div>
          <div className="flex-1 py-[18px] text-center text-[clamp(14px,calc((20/1920)*100vw),20px)] text-[#424242]">
            없음
          </div>
        </div>

        {/* 교육비 */}
        <div className="flex items-center border-b border-[#E3E3E3]">
          <div className="leading-none bg-border-gray flex-1 py-[18px] text-center text-sm text-[clamp(14px,calc((25/1920)*100vw),25px)] font-semibold text-[#5E5E5E] lg:py-[45px]">
            교육비
          </div>
          <div className="flex-1 py-[18px] text-center text-[clamp(14px,calc((20/1920)*100vw),20px)] text-[#424242]">
            없음
          </div>
        </div>

        {/* 보증금 */}
        <div className="flex items-center border-b border-[#E3E3E3]">
          <div className="leading-none bg-border-gray flex-1 py-[18px] text-center text-[clamp(14px,calc((25/1920)*100vw),25px)] font-semibold text-[#5E5E5E] lg:py-[45px]">
            보증금
          </div>
          <div className="flex-1 py-[18px] text-center text-[clamp(14px,calc((20/1920)*100vw),20px)] text-[#424242]">
            없음
          </div>
        </div>

        {/* 홈페이지 분양대금 */}
        <div className="bg-border-gray flex items-center border-b border-[#E3E3E3]">
          <div className="flex-1 py-6 text-center text-[clamp(14px,calc((25/1920)*100vw),25px)] leading-relaxed font-semibold text-[#5E5E5E] lg:py-[45px]">
            홈페이지
            <br />
            분양대금
          </div>
          <div className="flex flex-1 flex-col items-center gap-[6.5px] bg-white py-[18px] md:flex-row md:justify-center md:gap-[2px] lg:py-[45px]">
            {/* 분납 */}
            <div className="flex w-[80%] flex-col items-center gap-0 md:items-end">
              <span className="leading-none w-full rounded-[9px] bg-[#014AFF] px-4 py-1 text-center text-[clamp(10px,calc((16/1920)*100vw),16px)] font-semibold text-white md:w-[60%] md:rounded-r-[0px]">
                분납
              </span>
              <div className="w-full rounded-[9px] bg-[#EEEEEE] px-3 py-[13px] text-center text-[clamp(12px,calc((19/1920)*100vw),19px)] leading-[clamp(11px,calc((19/1920)*100vw),19px)] font-bold text-[#014AFF] md:flex md:h-[clamp(51px,calc((78/1920)*100vw),78px)] md:w-[60%] md:flex-col md:items-center md:justify-center md:rounded-r-[0px]">
                월 10만원
                <br />
                <span className="ml-1 text-[clamp(7px,calc((12/1920)*100vw),12px)] font-normal text-[#014AFF]">
                  (월납 24개월)
                </span>
              </div>
            </div>
            {/* 일시불 */}
            <div className="flex w-[80%] flex-col items-center gap-0 md:items-start">
              <span className="leading-none w-full rounded-[9px] bg-[#014AFF] px-4 py-1 text-center text-[clamp(10px,calc((16/1920)*100vw),16px)] font-semibold text-white md:w-[60%] md:rounded-l-[0px]">
                일시불
              </span>
              <div className="leading-none w-full rounded-[9px] bg-[#EEEEEE] px-3 py-[13px] text-center text-[clamp(12px,calc((19/1920)*100vw),19px)] font-bold text-[#014AFF] md:flex md:h-[clamp(51px,calc((78/1920)*100vw),78px)] md:w-[60%] md:items-center md:justify-center md:rounded-l-[0px]">
                200만원
              </div>
            </div>
          </div>
        </div>

        {/* 월 운영비 */}
        <div className="flex items-center">
          <div className="leading-none bg-border-gray flex-1 rounded-bl-[20px] py-[18px] text-center text-sm text-[clamp(14px,calc((25/1920)*100vw),25px)] font-semibold text-[#5E5E5E] lg:py-[45px]">
            월 운영비
          </div>
          <div className="flex-1 text-center text-sm text-[#5E5E5E]">없음</div>
        </div>
      </div>
    </div>
  );
};
