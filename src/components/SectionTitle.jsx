export const SectionTitle = ({ en, ko, description, zIndex = false }) => {
  return (
    <div
      className={`${zIndex ? "relative z-10" : ""} flex-col-center gap-[clamp(25px,calc((40/1920)*100vw),40px)] text-center break-keep md:gap-7.5`}
    >
      <p className="text-light-blue text-xs leading-none font-semibold">{en}</p>
      <h3 className="font-line to-light-blue from-border-blue text-ko-section-title leading-sectionTitle-ko bg-linear-to-b bg-clip-text font-bold text-nowrap text-transparent">
        {ko}
      </h3>
      <p className="font-regular text-sm leading-[1.4] text-[#747474] md:leading-none">
        {description}
      </p>
    </div>
  );
};
