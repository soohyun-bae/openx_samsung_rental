import { categoryCard } from "../datas/categoryCard.jsx";

export const CategoryCard = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="grid grid-cols-2 gap-x-[40px] gap-y-[25px] lg:grid-cols-4">
        {categoryCard.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-[10px] lg:gap-[20px]"
          >
            <div className="w-[clamp(127px,calc((176/1920)*100vw),176px)] transition-all duration-300 ease-out hover:scale-[120%] hover:drop-shadow-[0_20px_40px_rgba(0,0,0,0.16)] 2xl:w-[100%]">
              <img className="h-full w-full" src={item.imgSrc} />
            </div>

            <p className="text-[clamp(16px,calc((20/1920)*100vw),20px)] leading-none font-semibold">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
