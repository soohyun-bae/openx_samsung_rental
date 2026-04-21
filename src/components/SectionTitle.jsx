export const SectionTitle = ({ en, ko, description }) => {
  return (
    <div className="flex flex-col gap-5.5 text-center break-keep md:gap-7.5">
      <p className="sm-semibold text-blue">{en}</p>
      <p className="lg-bold bg-linear-to-r from-dark-blue to-blue text-transparent bg-clip-text text-nowrap">
        {ko}
      </p>
      <p className="sm-regular text-light-black">{description}</p>
    </div>
  );
};
