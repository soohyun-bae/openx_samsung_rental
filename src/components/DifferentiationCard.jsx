import { differentiationCardData } from "../datas/differentiation.jsx";

export const DifferentiationCard = () => {
  return (
    <div className="grid grid-cols-1 gap-5.5 lg:grid-cols-2">
      {differentiationCardData.map((item, index) => (
        <div
          key={index}
          className="border border-border-gray bg-white rounded-[15px] px-5.25 py-11.25"
        >
          <div className="flex flex-col gap-[48.85px] items-center">
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
            <div className="flex flex-col items-center gap-5.5">
              <p className="text-[24px] font-bold text-blue">{item.title}</p>
              <p className="text-sm font-normal text-light-black text-center break-keep">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
