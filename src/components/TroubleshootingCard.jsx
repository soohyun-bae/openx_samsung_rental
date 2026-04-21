import { troubleshootingCard } from "../datas/troubleshooting.js";

export const TroubleshootingCard = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex justify-center items-center gap-[58px] w-full">
        {troubleshootingCard.map((item, index) => (
          <div className="flex flex-col gap-[28px] items-center" key={index}>
            <div
              className={index === 0 ? "bg-light-black text-white px-[35px] py-[6px] rounded-[6px] text-xs font-normal w-max" : "bg-dark-blue text-white px-[35px] py-[6px] rounded-[6px] text-xs font-normal w-max"}
            >
              {item.title}
            </div>
            <div
              className={index === 0 ? "border border-border-gray bg-light-gray flex flex-col gap-[24px] w-[581.44px] px-[180px] py-[57px] text-xs font-normal rounded-[12px] text-light-black" : "border border-border-gray bg-white px-[122px] py-[57px] flex flex-col w-[581.44px] text-xs font-normal rounded-[12px] text-light-black"}
            >
              {item.content.map((content, contentIndex) => (
                <div className="flex items-center gap-[18px]" key={contentIndex}>
                  {index === 0 ? (
                    <>
                      <img
                        className="w-[20px] h-[20px] flex-shrink-0"
                        src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776665114/x-icon_v6lctg.png"
                      />
                      <p>{content}</p>
                    </>
                  ) : (
                    <>
                      <img
                        className="w-[20px] h-[20px] flex-shrink-0"
                        src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776664636/blue-checkbox_f6p3cc.png"
                      />
                      <p>{content}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
