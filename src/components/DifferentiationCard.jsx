import { differentiationCardData } from "../datas/differentiation.js";

export const DifferentiationCard = () => {
  return (
    <div className="grid grid-cols-2 gap-0">
      {differentiationCardData.map((item, index) => (
        <div key={index} className="border border-border-gray rounded-[15px] p-6">
          <div className="flex flex-col gap-[22px]">
            <img 
              src={item.imgSrc} 
              className={index === 2 ? "w-[247px] h-auto" : "w-[85px] h-auto"}
            />
            <p className="text-lg font-semibold text-light-black">{item.title}</p>
            <p className="text-sm font-normal text-light-black">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
