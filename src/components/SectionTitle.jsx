export const SectionTitle = ({ en, ko, description }) => {
  return (
    <div className="flex flex-col gap-5.5 text-center break-keep md:gap-7.5">
      <p className="text-sm font-semibold text-blue">{en}</p>
      <p className="text-lg font-bold bg-linear-to-r from-dark-blue to-blue text-transparent bg-clip-text text-nowrap">
        {ko}
      </p>
      <p className="text-sm font-regular text-light-black">{description}</p>
    </div>
  );
};
