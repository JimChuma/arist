import starIcon from "../../../../images/point-star.png"

export default function SectionName({title}) {
  return (
    <div className="section-name">
      <img src={starIcon} alt="star icon" />
      <span>{title}</span>
    </div>
  );
}
