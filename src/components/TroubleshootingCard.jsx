import { troubleshootingCard } from "../datas/troubleshooting.js";
import "../style/troubleshooting.scss";

export const TroubleshootingCard = () => {
  return (
    <div className="cards-wrapper">
      <div className="card-container">
        {troubleshootingCard.map((item, index) => (
          <div className="card-layout" key={index}>
            <div
              className={index === 0 ? "first-card-title" : "second-card-title"}
            >
              {item.title}
            </div>
            <div
              className={
                index === 0
                  ? "first-contents-container"
                  : "second-contents-container"
              }
            >
              {item.content.map((content, contentIndex) => (
                <div className="contents" key={contentIndex}>
                  {index === 0 ? (
                    <>
                      <img
                        className="x-icon"
                        src="https://res.cloudinary.com/dnigvhehc/image/upload/v1776665114/x-icon_v6lctg.png"
                      />
                      <p>{content}</p>
                    </>
                  ) : (
                    <>
                      <img
                        className="checkbox-icon"
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
