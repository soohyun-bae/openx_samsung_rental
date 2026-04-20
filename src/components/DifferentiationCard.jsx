import { differentiationCardData } from "../datas/differentiation.js";

export const DifferentiationCard = () => {
  return (
    <div className="differentiation-cards-wrapper">
      {differentiationCardData.map((item, index) => (
        <div className="differentiation-card-container">
          <div className="differentiation-contents-layout">
            <img src={item.imgSrc} className="differentiation-img-icon" />
            <p className="differentiation-title">{item.title}</p>
            <p className="differentiation-description">{item.description}</p>
          </div>
        </div>
      ))}
      <div></div>
    </div>
  );
};
