const TechnicalSkillsIcons = ({ items }) => {
  return items.map((item, index) => (
    <div key={index} className="tech-logo">
      <img src={item.imgPath} alt={item.title} className="w-7 h-7" />
    </div>
  ));
};

export default TechnicalSkillsIcons;
