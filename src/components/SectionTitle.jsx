export const SectionTitle = ({ en, ko, description }) => {
  return (
    <div className="flex-col-center gap-5.5 text-center break-keep md:gap-7.5">
      <p className="text-md font-semibold text-blue leading-none">{en}</p>
      <h3 className="leading-[1.3] md:leading-none bg-linear-to-r from-dark-blue to-blue text-transparent bg-clip-text text-nowrap">
        {ko}
      </h3>
      <p className="leading-[1.4] md:leading-none text-md font-regular text-light-black">{description}</p>
    </div>
  );
};
