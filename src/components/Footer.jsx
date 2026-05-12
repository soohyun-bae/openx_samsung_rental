export const Footer = () => {
  return (
    <div className="flex-col-center bg-black px-[50px] pt-[54px] pb-[100px]">
      <div className="xl:hidden">
        <MobileFooter />
      </div>
      <div className="hidden w-full lg:block">
        <DesktopFooter />
      </div>
    </div>
  );
};

const MobileFooter = () => {
  return (
    <div className="flex-col-center gap-[36px]">
      <img
        className={`w-[107.51px] cursor-pointer`}
        src="https://res.cloudinary.com/dnigvhehc/image/upload/f_auto,q_auto/v1776921960/samsung-logo-white_zvr1xt.png"
        alt="logo"
        onClick={(event) => {
          event.preventDefault();
          handleSmNavClick("main");
        }}
      />
      <div className="flex-col-center text-[12px] font-light text-white/50">
        <p>
          주소 : 서울시 마포구 성암로330,
          <br />
          DMC첨단산업센터 B동 808호
        </p>
        <p>DMC첨단산업센터 B동 808호</p>
        <p>대표전화 : 010-4559-5049</p>
        <p>이메일 : allpass@kakao.com</p>
        <p>Copyright © 2025 브랜드경제신문. All rights reserved.​</p>
      </div>
    </div>
  );
};

const DesktopFooter = () => {
  return (
    <div className="w-full">
      <div className="flex w-full items-start justify-around">
        <div className="flex flex-col">
          <div className="flex gap-2 text-[15px] font-light text-white/80">
            <p>오픈엑스</p>
            <p>|</p>
            <p>대표이사 : 김미진</p>
            <p>|</p>
            <p>가맹문의 : 010-2973-7375</p>
          </div>
          <div className="text-[15px] font-light text-white/80">
            <p>주소 : 서울시 마포구 성암로330, DMC첨단산업센터 B동 808호</p>
          </div>
          <div className="text-[15px] font-light text-white/80">
            <p>Copyright © 2026 삼성전자가전렌탈. All rights reserved.​</p>
          </div>
        </div>
        <div className="flex gap-2 text-[15px] font-light text-white/80">
          <p>개인정보처리방침</p>
          <p>|</p>
          <p>이메일 무단수집거부</p>
        </div>
      </div>
    </div>
  );
};
