export const ReliabilityContents = ({ src, blueText, description }) => {
  return (
    <div>
      <div>
        <img src={src} alt="신뢰성 내용 이미지" />
        <div>
          <p>{blueText}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
