import ModifiedGlobe from '../components/ModifiedGlobe';
import TechnicalSkillsIcons from '../components/TechnicalSkillsIcons';
import { Languages, Frameworks, Other } from '../utils/TechSkills';
import { Education } from '../utils/Education';

const About = () => {
  return (
    <section
      id="about"
      className="w-full px-5 md:px-20 py-10 md:py-20 flex items-center justify-center"
    >
      <div className="grid grid-cols-4 grid-rows-1 gap-5 w-full">
        <div className="grid-container p-3">
          <img
            src="/images/ProfilePicture.jpg"
            alt="Profile Picture"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
        <div className="grid-container col-span-2">
          <div>
            <p className="grid-headtext">Trevor Po</p>
            <p className="font-medium font-mb-0.5 text-lg text-[#dddddd]">
              Software Developer
            </p>
            <div className="w-[12%] border-b-2 border-blue-300 mb-4.5" />
            <p className="grid-subtext mb-2.5 md:text-justify">
              I am an enthusiastic and driven individual that provides a
              versatile range of technical skills and a strong foundation for
              problem solving and data analysis. Although my primary interest
              focuses on software development, I am also eager to gain exposure
              to a broader range of fields to work within cross-functional teams
              and diversify my skillset.
            </p>
            <p className="grid-subtext md:text-justify">
              Moving forwards within my career, I am excited to grow as a
              developer, meet new individuals, and construct innovative
              solutions.
            </p>
          </div>
        </div>
        <div className="grid-container col-span-2 col-start-1 row-start-2">
          <p className="grid-headtext text-2xl mb-1">Education</p>
          {Education.map((item, index) => (
            <div key={index} className="education-content_container">
              <div className="flex flex-col h-full justify-start items-center py-2">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-14 h-14 rounded-lg"
                />
                {item.id == 1 && <div className="education-content_bar" />}
              </div>
              <div className="sm:p-2 px-2.5 py-5">
                <p className="font-medium text-lg">{item.name}</p>
                <p className="italic mb-4 text-[#dddddd]">
                  {item.degree}
                  {item.id == 1 && (
                    <span>
                      ,{'  '}
                      <span className="font-normal">First Class Honours</span>
                    </span>
                  )}
                </p>
                <ul className="list-disc pl-5">
                  {item.des.map((line, index) => (
                    <li key={index} className="grid-subtext">
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="grid-container col-start-3 row-start-2 flex flex-col">
          <p className="grid-headtext text-2xl">Location</p>
          <div className="rounded-3xl flex justify-center items-center">
            <ModifiedGlobe />
          </div>
          <div>
            <p className="grid-subtext">
              Currently based in{' '}
              <span className="font-semibold">Auckland, New Zealand</span>.
            </p>
          </div>
        </div>
        <div className="grid-container row-span-2 col-start-4 row-start-1">
          <p className="grid-headtext text-2xl">Technical Skills</p>
          <p className="grid-subtext ">
            I am proficient in several programming languages and frameworks
            surronding web development. Although I prefer working on the
            frontend side through implementing user-friendly solutions, I am
            also comfortable working with backend logic.
          </p>
          <p className="font-medium text-lg mt-3 mb-1.5">Languages</p>
          <div className="flex flex-wrap items-center gap-3">
            <TechnicalSkillsIcons items={Languages} />
          </div>
          <p className="font-medium text-lg mt-3 mb-1.5">
            Technologies & Frameworks
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <TechnicalSkillsIcons items={Frameworks} />
          </div>
          <p className="font-medium text-lg mt-3 mb-1.5">Other</p>
          <div className="flex flex-wrap items-center gap-3">
            {Other.map((item, index) => (
              <div
                key={index}
                className="rounded-md border border-black-50 bg-black-200 flex flex-row h-11 w-full items-center p-2"
              >
                <img src={item.imgPath} alt={item.title} className="w-7 h-7" />
                <p className="text-sm font-medium pl-5 text-[#dddddd] ">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
