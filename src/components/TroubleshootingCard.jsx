import { troubleshootingCard } from "../datas/troubleshooting.js";

export const TroubleshootingCard = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-col justify-center items-center gap-8 w-full lg:flex-row lg:gap-15">
        {troubleshootingCard.map((item, index) => (
          <div
            className="w-full flex flex-col gap-5.5 items-center"
            key={index}
          >
            <div
              className={`${
                index === 0
                  ? "bg-light-black font-regular"
                  : "bg-blue font-bold"
              } text-white px-8.75 py-3.25 rounded-[58px] ts-card-title text-nowrap`}
            >
              {item.title}
            </div>
            <div
              className={`${
                index === 0
                  ? " bg-light-gray font-normal"
                  : "bg-white font-semibold lg:py-10"
              } border border-border-gray flex flex-col text-xs text-light-black p-10 rounded-xl lg:w-full md:items-center`}
            >
              <div
                className={`${index === 0 ? "space-y-6" : "space-y-6"} w-max `}
              >
                {item.content.map((content, contentIndex) => (
                  <div className="w-max" key={contentIndex}>
                    {index === 0 ? (
                      <div className="flex items-center md:w-full justify-center relative">
                        <div className="flex items-center gap-4.5 w-max">
                          <img
                            className="w-6.25 h-6.25"
                            src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776665114/x-icon_v6lctg.png"
                          />
                          <p className="font-regular ts-card-content">
                            {content}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2.75 relative">
                        <div
                          className="hidden lg:block absolute h-px z-0"
                          style={{
                            right: "calc(100% - 0.4rem)",
                            width: "13vw",
                            background:
                              "linear-gradient(to right, white, #1428A0)",
                          }}
                        />
                        <img
                          className="w-6 h-6"
                          src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776664636/blue-checkbox_f6p3cc.png"
                        />
                        <p className="font-regular ts-card-content">
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
