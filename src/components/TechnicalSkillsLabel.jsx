const TechnicalSkillsLabel = ({ items }) => {
  return items.map((item, index) => (
    <div
      key={index}
      className="rounded-md font-medium border border-black-50 bg-black-200 p-2"
    >
      <p>{item}</p>
    </div>
  ));
};

export default TechnicalSkillsLabel;
