export const SectionTitle = ({ en, ko, description, zIndex = false }) => {
  return (
    <div
      className={`${zIndex ? "relative z-10" : ""} flex-col-center gap-[35px] text-center break-keep md:gap-7.5`}
    >
      <p className="text-md text-light-blue leading-none font-semibold">{en}</p>
      <h3 className="font-line from-dark-blue to-blue text-ko-section-title leading-sectionTitle-ko bg-linear-to-b bg-clip-text font-bold text-nowrap text-transparent">
        {ko}
      </h3>
      <p className="text-md font-regular leading-[1.4] text-[#747474] md:leading-none">
        {description}
      </p>
    </div>
  );
};
