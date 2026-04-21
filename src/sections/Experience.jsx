import { WorkExperiences } from '../utils/WorkExperiences';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import SrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(SrollTrigger);

const Experience = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.gradient-line',
      {
        scaleY: 0,
      },
      {
        // Set the origin of the animation to the bottom of the timeline
        transformOrigin: 'top top',
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.timeline-wrapper',
          start: 'top center',
          end: '70% center',
          scrub: true,
        },
      }
    );

    gsap.utils.toArray('.timeline-logo').forEach((logo) => {
      gsap.from(logo, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: 'left left',
        // Animate over 1 second
        duration: 1.5,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: logo,
          start: 'top 60%',
          end: '50% center',
          scrub: true,
        },
      });
    });

    gsap.utils.toArray('.expText').forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: text,
          start: 'top 60%',
        },
      });
    });
  }, []);

  return (
    <section
      id="experience"
      className="w-full px-5 xl:px-70 lg:px-50 md:px-30 py-20 md:mt-5 mt-0 flex flex-col items-center justify-center"
    >
      <div>
        <p className="text-4xl font-medium text-white text-center">
          Work Experience
        </p>
        <div className="w-[31%] border-b-2 border-blue-400 mt-1" />
      </div>
      <div className="mt-10 sm:mt-15 relative">
        <div className="relative z-50 xl:space-y-25 md:space-y-20 space-y-10">
          {WorkExperiences.map((card, index) => (
            <div key={index} className="exp-card-wrapper">
              <div className="flex items-start">
                <div className="timeline-wrapper">
                  <div className="gradient-line w-1 h-full" />
                </div>
                <div className="flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                  <div className="timeline-logo">
                    <img
                      className="rounded-lg"
                      src={card.logoPath}
                      alt={card.company}
                    />
                  </div>
                  <div className="expText w-full h-full border-2 border-[#1C1C21] bg-[#0E0E10] rounded-lg py-5 px-7">
                    <div className="flex flex-row justify-between sm:gap-0 gap-5">
                      <h1 className="font-semibold text-2xl">{card.title}</h1>
                      <p className="text-blue-300 sm:text-base text-sm sm:text-left text-jusftify">
                        {card.date}
                      </p>
                    </div>
                    <p className="font-medium text-[#dddddd]">{card.company}</p>
                    <ul className="list-disc ms-5 mt-5 flex flex-col gap-2 text-[#afb0b6]">
                      {card.responsibilities.map((resp) => (
                        <li key={resp} className="sm:text-left text-justify">
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
