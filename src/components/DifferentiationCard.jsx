import { differentiationCardData } from "../datas/differentiation.jsx";

export const DifferentiationCard = () => {
  return (
    <div className="grid grid-cols-1 gap-5.5 xl:grid-cols-2">
      {differentiationCardData.map((item, index) => (
        <div
          key={index}
          className="border border-border-gray bg-white rounded-[15px] px-5.25 py-11.25"
        >
          <div className="flex flex-col gap-[48.85px] items-center">
            <div className="h-22.5 flex-row-center">
            <img
              src={item.imgSrc}
              className={
                index === 1
                  ? "w-[96.68px] h-auto"
                  : index === 2
                    ? "w-54.75"
                    : index === 3
                      ? "w-[76.25px]"
                      : "w-[79.7px] h-auto"
              }
            />
            </div>
            <div className="flex flex-col items-center gap-5.5">
              <p className="text-lg font-bold text-blue">{item.title}</p>
              <p className="text-[16px] font-regular text-light-black text-center break-keep">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
