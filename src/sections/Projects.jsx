import { useRef } from 'react';
import { HeaderProject, FeaturedProjects } from '../utils/Projects';
import ProjectCard from '../components/ProjectCard';
import TechnicalSkillsLabel from '../components/TechnicalSkillsLabel';
import gsap from 'gsap';
import SrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(SrollTrigger);

const Projects = () => {
  // Section ref
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5 }
      );
    }

    gsap.utils.toArray('.project-container').forEach((project, index) => {
      gsap.fromTo(
        project,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          delay: 0.12 * (index + 1),
          scrollTrigger: {
            trigger: project,
            start: 'top bottom-=100',
          },
          ease: 'power2.inOut',
        }
      );
    });
  }, []);

  return (
    <section
      id="projects"
      className="w-full px-5 md:px-20 py-10 md:py-20 md:mt-10 mt-20 flex flex-col items-center justify-center"
      ref={sectionRef}
    >
      <div>
        <p className="text-4xl font-medium text-white text-center">
          Featured Projects
        </p>
        <div className="w-[50%] border-b-2 border-blue-300 mt-1" />
      </div>
      <div className="project-container flex md:flex-row flex-col justify-between mt-15 relative border-2 border-[#1C1C21] bg-[#0E0E10] rounded-lg">
        <div className="md:h-[50vh] h-60 w-full rounded-xl">
          <img
            src={HeaderProject.image}
            alt={HeaderProject.imageLabel}
            className="h-full w-full object-cover rounded-xl"
          />
        </div>
        <div className="md:w-5/7 py-5 px-7">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            {HeaderProject.title}
          </h2>
          <p className="text-[#afb0b6] mt-2 text-justify">
            A WDCC (
            <span className="italic font-medium">
              Web Development & Consulting Club
            </span>
            ) team-based project to develop a modern, intuitive full stack
            platform to streamline Vroom&apos;s operations with membership,
            volunteer, and event management systems. I aided in implementing
            responsive React components for the navigation bar and gallery web
            page.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <TechnicalSkillsLabel items={HeaderProject.tech} />
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 mt-10 relative w-full">
        {FeaturedProjects.map((project) => (
          <div className="project-container" key={project.key}>
            <ProjectCard projectData={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
