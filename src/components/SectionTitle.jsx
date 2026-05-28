export const SectionTitle = ({ en, ko, description, zIndex = false }) => {
  return (
    <div
      className={`${zIndex ? "relative z-10" : ""} flex-col-center gap-[clamp(15px,calc((40/1920)*100vw),30px)] text-center break-keep`}
    >
      <div className="flex flex-col items-center gap-[20px]">
        <p className="text-xs leading-none font-semibold text-[#747474]">
          {en}
        </p>
        <div className="font-line to-blue from-dark-blue text-ko-section-title leading-sectionTitle-ko font-regular bg-linear-to-b bg-clip-text text-nowrap text-transparent">
          {ko}
        </div>
      </div>
      <div className="font-regular text-sm leading-[1.4] text-[#747474] md:leading-none">
        {description}
      </div>
    </div>
  );
};
