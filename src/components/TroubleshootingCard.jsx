import { troubleshootingCard } from "../datas/troubleshooting.js";

export const TroubleshootingCard = () => {
  return (
    <div className="w-full flex-row-center">
      <div className="flex-col-center gap-8 w-full lg:flex-row lg:gap-15">
        {troubleshootingCard.map((item, index) => (
          <div
            className="w-full flex-col-center gap-5.5"
            key={index}
          >
            <div
              className={`${
                index === 0
                  ? "bg-light-black font-regular"
                  : "bg-blue font-bold"
              } text-white px-8.75 py-3.25 rounded-[58px] text-middle text-nowrap leading-none`}
            >
              {item.title}
            </div>
            <div
              className={`${
                index === 0
                  ? " bg-light-gray font-normal"
                  : "bg-white font-semibold lg:py-10"
              } border border-border-gray flex flex-col text-md text-light-black p-10 rounded-xl lg:w-full md:items-center`}
            >
              <div
                className={`${index === 0 ? "space-y-6" : "space-y-6"} w-max `}
              >
                {item.content.map((content, contentIndex) => (
                  <div className="w-max" key={contentIndex}>
                    {index === 0 ? (
                      <div className="flex-row-center md:w-full">
                        <div className="flex-row-center gap-4.5 w-max">
                          <img
                            className="w-6.25 h-6.25"
                            src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776665114/x-icon_v6lctg.png"
                          />
                          <p className="font-regular text-md relative z-5">
                            {content}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2.75 lg:gap-7.5 relative">
                        <div
                          className="hidden lg:block bg-linear-to-r from-white to-blue absolute h-px z-0 w-[14vw] 2xl:w-[16vw] right-[calc(100%-0.4rem)]"
                        />
                        <img
                          className="w-6 h-6"
                          src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776664636/blue-checkbox_f6p3cc.png"
                        />
                        <p className="font-semibold text-md relative z-10">
                          {content}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
