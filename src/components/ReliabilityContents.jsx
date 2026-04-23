export const ReliabilityContents = ({ src, blueText, description }) => {
  return (
    <div>
      <div>
        <img src={src} />
        <div>
          <p>{blueText}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
