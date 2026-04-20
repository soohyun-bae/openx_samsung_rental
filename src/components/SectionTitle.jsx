import "../style/sectionTitle.scss";
// import { SectionTitle } from "./SectionTitle";

export const SectionTitle = ({ en, ko, description }) => {
  return (
    <div className="section-title-container">
      <p className="en-title">{en}</p>
      <p className="ko-title">{ko}</p>
      <p className="description">{description}</p>
    </div>
  );
};
