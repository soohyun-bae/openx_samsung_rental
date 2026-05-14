import { useState } from "react";

const footerModalContent = {
  privacy: {
    title: "개인정보처리방침",
    body: [
      <div>
        <p className="font-bold break-keep">1. 개인정보의 수집 및 이용 목적</p>
        <p className="break-keep">
          가맹 관련 문의 확인 및 답변을 위한 연락통지, 처리결과 통보 등을
          목적으로 개인정보를 처리합니다.
        </p>
      </div>,
      <div>
        <p className="font-bold break-keep">2. 처리하는 개인정보 항목</p>
        <p>
          {" "}
          - 필수항목 : 이름, 연락처 (접속 IP 정보, 쿠키, 서비스 이용 기록, 접속
          로그)
        </p>
        <p className="break-keep">- 선택항목 : 문의내용</p>
      </div>,
      <div>
        <p className="font-bold break-keep">3. 개인정보의 처리 및 보유 기간</p>
        <p className="break-keep">
          ① 법령에 따른 개인정보 보유.이용기간 또는 정보주체로부터 개인정보를
          수집 시에 동의 받은 개인정보 보유, 이용기간 내에서 개인정보를 처리,
          보유합니다.
        </p>
        <p className="break-keep">② 개인정보의 보유 기간은 5년입니다.</p>
      </div>,
    ],
  },
  email: {
    title: "이메일 무단수집거부",
    body: [
      <div>
        <p className="break-keep">
          웹사이트 이용자에게 무차별적으로 보내지는 타사의 메일을 차단하기 위해,{" "}
          <br />본 웹사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그
          밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부하며, 이를
          위반시 정보통신망법에 의해 형사처벌됨을 유념하시기 바랍니다.
        </p>
      </div>,
    ],
  },
};

export const Footer = () => {
  const [activeModal, setActiveModal] = useState(null);
  const modalContent = activeModal ? footerModalContent[activeModal] : null;

  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="flex-col-center bg-black px-[50px] pt-[54px] pb-[100px]">
      <div className="xl:hidden">
        <MobileFooter onOpenModal={openModal} />
      </div>
      <div className="hidden w-full lg:block">
        <DesktopFooter onOpenModal={openModal} />
      </div>
      {modalContent && (
        <FooterModal
          title={modalContent.title}
          body={modalContent.body}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

const FooterModal = ({ title, body, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-5"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="footer-modal-title"
        className="w-full max-w-[560px] rounded-[8px] bg-white px-6 py-7 text-[#1A1A1A] shadow-xl md:px-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-6">
          <h2 id="footer-modal-title" className="text-[22px] font-bold">
            {title}
          </h2>
          <button
            type="button"
            aria-label="모달 닫기"
            onClick={onClose}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#F2F2F2] text-[20px] leading-none text-[#1A1A1A]"
          >
            ×
          </button>
        </div>
        <div className="mt-5 flex flex-col gap-3 text-[14px] leading-[22px] text-[#555] md:text-[15px] md:leading-[24px]">
          {body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

const FooterPolicyLinks = ({ onOpenModal, className = "" }) => {
  return (
    <div className={`flex gap-2 text-nowrap ${className}`}>
      <button
        type="button"
        onClick={() => onOpenModal("privacy")}
        className="cursor-pointer font-light text-inherit"
      >
        개인정보처리방침
      </button>
      <p>|</p>
      <button
        type="button"
        onClick={() => onOpenModal("email")}
        className="cursor-pointer font-light text-inherit"
      >
        이메일 무단수집거부
      </button>
    </div>
  );
};

const MobileFooter = ({ onOpenModal }) => {
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
      <div className="flex-col-center gap-3 text-[12px] font-light text-white/50">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-nowrap">
            <p className="">(주)오픈엑스</p>
            <p>|</p>
            <p>대표이사 : 김미진</p>
            <p>|</p>
            <p>가맹문의 : 010-4861-8407</p>
          </div>
          <p className="text-nowrap">
            주소 : 서울시 마포구 성암로330, DMC첨단산업센터 B동 808호
          </p>
        </div>
        <p className="text-nowrap">
          Copyright © 2026 삼성전자가전렌탈. All rights reserved.​
        </p>
        <FooterPolicyLinks onOpenModal={onOpenModal} />
      </div>
    </div>
  );
};

const DesktopFooter = ({ onOpenModal }) => {
  return (
    <div className="w-full">
      <div className="flex w-full items-start justify-around">
        <div className="flex flex-col">
          <div className="flex gap-2 text-[15px] font-light text-white/80">
            <p>오픈엑스</p>
            <p>|</p>
            <p>대표이사 : 김미진</p>
            <p>|</p>
            <p>가맹문의 : 010-4861-8407</p>
          </div>
          <div className="text-[15px] font-light text-white/80">
            <p>주소 : 서울시 마포구 성암로330, DMC첨단산업센터 B동 808호</p>
          </div>
          <div className="text-[15px] font-light text-white/80">
            <p>Copyright © 2026 삼성전자가전렌탈. All rights reserved.​</p>
          </div>
        </div>
        <FooterPolicyLinks
          onOpenModal={onOpenModal}
          className="text-[15px] font-light text-white/80"
        />
      </div>
    </div>
  );
};
