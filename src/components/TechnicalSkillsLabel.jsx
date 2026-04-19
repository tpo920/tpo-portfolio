const TechnicalSkillsLabel = ({ items }) => {
  return items.map((item, index) => (
    <div
      key={index}
      className="rounded-md font-medium border border-black-50 bg-black-200 p-2 group-hover:bg-blue-400 transition-colors duration-200 ease-linear"
    >
      <p>{item}</p>
    </div>
  ));
};

export default TechnicalSkillsLabel;
