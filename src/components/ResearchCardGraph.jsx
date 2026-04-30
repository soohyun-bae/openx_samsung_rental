export const ResearchCardGraph = ({ height, tText, bgColor, year }) => {
  return (
    <div className="flex flex-col items-center gap-[8px]">
      <div className="flex flex-col items-center">
        <p className="text-md text-center font-bold text-[#747474]">{tText}</p>
        <div className={`w-[42px] ${height} rounded-t-2xl ${bgColor}`} />
      </div>
      {/* <p className="">{year}</p> */}
    </div>
  );
};
