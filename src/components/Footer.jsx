export const Footer = () => {
  return (
    <div className="flex-col-center bg-black px-[50px] pt-[54px] pb-[100px]">
      <div className="xl:hidden">
        <MobileFooter />
      </div>
      <div className="hidden xl:block">
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
        src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776921960/samsung-logo-white_zvr1xt.png"
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
    <div>
      <img
        className={`w-[107.51px] cursor-pointer`}
        src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776921960/samsung-logo-white_zvr1xt.png"
        alt="logo"
        onClick={(event) => {
          event.preventDefault();
          handleSmNavClick("main");
        }}
      />
    </div>
  );
};
