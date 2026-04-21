export const SectionTitle = ({ en, ko, description }) => {
  return (
    <div className="flex flex-col gap-[22px] text-center">
      <p className="text-sm font-semibold text-dark-blue">{en}</p>
      <p className="text-xl font-bold gradient-text">{ko}</p>
      <p className="text-lg font-normal text-light-black">{description}</p>
    </div>
  );
};
