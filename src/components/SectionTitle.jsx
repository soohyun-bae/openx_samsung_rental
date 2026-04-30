export const SectionTitle = ({ en, ko, description }) => {
  return (
    <div className="flex-col-center gap-5.5 text-center break-keep md:gap-7.5">
      <p className="text-md text-blue leading-none font-semibold">{en}</p>
      <h3 className="font-line from-dark-blue to-blue bg-linear-to-r bg-clip-text text-3xl font-bold text-nowrap text-transparent">
        {ko}
      </h3>
      <p className="text-md font-regular leading-[1.4] text-[#747474] md:leading-none">
        {description}
      </p>
    </div>
  );
};
