import TechnicalSkillsLabel from './TechnicalSkillsLabel';

const ProjectCard = ({ projectData }) => {
  return (
    <div className="w-full h-full border-2 border-[#1C1C21] bg-[#0E0E10] rounded-lg flex flex-col justify-between">
      <div>
        <img
          className="w-full h-70 object-cover rounded-lg"
          src={projectData.image}
          alt={projectData.title}
        />
      </div>
      <div className="py-5 px-7">
        <p className="text-2xl font-semibold">{projectData.title}</p>
        <p className="text-[#afb0b6] mt-2 text-justify">
          {projectData.description}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <TechnicalSkillsLabel items={projectData.tech} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
