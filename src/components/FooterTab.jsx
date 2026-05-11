import { useState, useEffect } from "react";
import { useForm } from "@formspree/react";

export const FooterTabContainer = () => {
  return (
    <div>
      <div className="bg-white xl:hidden">
        <MobileFooterTab />
      </div>
      <div className="hidden xl:flex xl:justify-center xl:bg-linear-to-t xl:from-white xl:from-90% xl:to-transparent xl:pt-[30px] xl:pb-[20px]">
        <DesktopFooterTab />
      </div>
    </div>
  );
};

const MobileFooterTab = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(false);
  const [state, handleSubmit] = useForm("mjgjpjdo");
  const [tabOpen, setTabOpen] = useState(false);

  const tabOpenHandle = () => {
    setTabOpen(() => !tabOpen);
  };

  useEffect(() => {
    if (state.succeeded) {
      alert("상담 신청이 완료되었습니다.");
      setName("");
      setPhone("");
      setAgree(false);
    }
  }, [state.succeeded]);

  return (
    <div className="flex flex-col">
      <div className="flex">
        <button
          href="https://open.kakao.com/o/s9TbPHri"
          className="bg-kakao flex-row-center w-[50%] cursor-pointer gap-[11px] py-[13px]"
        >
          <img
            src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776911568/kakaoicon_ro4ptg.png"
            className="h-[25px] w-[27px]"
          />
          <p className="text-[16px] font-bold text-[#1A1A1A]">바로 상담하기</p>
        </button>
        <button
          onClick={tabOpenHandle}
          className="flex-row-center w-[50%] cursor-pointer gap-[11px] py-[13px]"
        >
          <p className="from-dark-blue to-blue bg-linear-to-l bg-clip-text text-[16px] font-bold text-transparent">
            빠른 창업상담
          </p>
          <img
            src={
              tabOpen
                ? "https://res.cloudinary.com/dnigvhehc/image/upload/v1776922534/x_yb6qgi.png"
                : "https://res.cloudinary.com/dnigvhehc/image/upload/v1776911942/plus_ijtl5h.png"
            }
            className={tabOpen ? "h-[18px] w-[18px]" : "h-[14px] w-[14px]"}
          />
        </button>
      </div>
      <form
        className={`${tabOpen ? "flex flex-col" : "hidden"} gap-[22px] px-[30px] py-[37px]`}
      >
        <div className="flex flex-col items-center gap-[11px]">
          <input
            placeholder="성함"
            name="성함"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-[12px] border-2 border-[#ededed] bg-[#fafafa] px-[clamp(16px,calc((32/1920)*100vw),32px)] py-[clamp(14px,calc((18/1920)*100vw),18px)]"
          />
          <input
            placeholder="연락처 (- 제외 숫자만 입력)"
            name="연락처"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-[12px] border-2 border-[#ededed] bg-[#fafafa] px-[clamp(16px,calc((32/1920)*100vw),32px)] py-[clamp(14px,calc((18/1920)*100vw),18px)]"
          />
        </div>
        <div className="flex justify-center">
          <label htmlFor="agree" className="flex cursor-pointer items-center">
            <span className="flex h-[20px] w-[20px] items-center justify-center rounded-[4px] border border-[#ededed] bg-[#EDEDED] peer-checked:bg-[#EDEDED]">
              <svg
                className="h-5 w-5 text-white peer-checked:opacity-100"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="ml-[16px] text-[16px] font-light text-[#747474]">
              개인정보 수집에 동의합니다
            </span>
          </label>
        </div>
        <div className="flex w-full justify-center">
          <button
            type="submit"
            disabled={state.submitting}
            className="w-[80%] cursor-pointer rounded-[12px] bg-[linear-gradient(120deg,#EEEEEE_0%,white_50%,#EEEEEE_100%)] px-[32px] py-[14px]"
          >
            <p className="text-[clamp(16px,calc((20/1920)*100vw),20px)] font-bold text-[#091B35]">
              {state.submitting ? "제출 중..." : "상담신청"}
            </p>
          </button>
        </div>
      </form>
    </div>
  );
};

const DesktopFooterTab = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(false);
  const [state, handleSubmit] = useForm("mjgjpjdo");

  useEffect(() => {
    if (state.succeeded) {
      alert("상담 신청이 완료되었습니다.");
      setName("");
      setPhone("");
      setAgree(false);
    }
  }, [state.succeeded]);

  return (
    <form onSubmit={handleSubmit} className="flex-row-center gap-[30px]">
      <p className="font-line from-dark-blue to-blue bg-linear-to-l bg-clip-text text-[clamp(16px,calc((40/1920)*100vw),40px)] leading-[40px] font-bold text-transparent">
        빠른 창업상담
      </p>
      <div className="flex items-center gap-[11px]">
        <input
          placeholder="성함"
          name="성함"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-[12px] border-2 border-[#ededed] bg-[#fafafa] px-[clamp(16px,calc((32/1920)*100vw),32px)] py-[clamp(10px,calc((18/1920)*100vw),12px)] text-[15px] leading-none"
        />
        <input
          placeholder="연락처 (- 제외 숫자만 입력)"
          name="연락처"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="rounded-[12px] border-2 border-[#ededed] bg-[#fafafa] px-[clamp(16px,calc((32/1920)*100vw),32px)] py-[clamp(10px,calc((18/1920)*100vw),12px)] text-[15px] leading-none"
        />
      </div>
      <div className="flex items-center gap-[11px]">
        <input
          id="agree"
          type="checkbox"
          name="agree"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          className="peer sr-only"
        />
        <label htmlFor="agree" className="flex cursor-pointer items-center">
          <span className="flex h-4 w-4 items-center justify-center rounded-[4px] border border-[#ededed] bg-[#EDEDED] peer-checked:bg-[#EDEDED]">
            <svg
              className="h-3 w-3 text-white peer-checked:opacity-100"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span className="ml-[12px] text-[16px] leading-[20px] font-light">
            개인정보 수집에 <br />
            동의합니다
          </span>
        </label>
      </div>
      <div className="flex items-center gap-[30px]">
        <button
          type="submit"
          disabled={state.submitting}
          className="cursor-pointer rounded-[12px] bg-[linear-gradient(120deg,#EEEEEE_0%,white_50%,#EEEEEE_100%)] px-[32px] py-[7px]"
        >
          <p className="text-[clamp(16px,calc((20/1920)*100vw),20px)] leading-[28px] font-bold text-[#091B35]">
            {state.submitting ? "제출 중..." : "상담신청"}
          </p>
        </button>
        <a
          className="bg-kakao flex-row-center cursor-pointer gap-[14px] rounded-[12px] px-[24px] py-[7px]"
          href="https://open.kakao.com/o/s9TbPHri"
          target="_blanck"
        >
          <img
            src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776911568/kakaoicon_ro4ptg.png"
            className="h-[clamp(25px,calc((31/1920)*100vw),29px)] w-[clamp(23px,calc((29/1920)*100vw),29px)]"
          />
          <p className="text-[clamp(16px,calc((20/1920)*100vw),20px)] leading-none font-bold text-[#091B35]">
            카톡 상담
          </p>
        </a>
      </div>
    </form>
  );
};
