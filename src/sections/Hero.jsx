import { useRef } from 'react';
import { HobbiesText } from '../utils/Hobbies';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SrollTrigger from 'gsap/ScrollTrigger';
import { SocialIconsData } from '../utils/Socials';
import HeroExperience from '../components/HeroModels/HeroExperience';

gsap.registerPlugin(SrollTrigger);

const Hero = () => {
  const modelRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      '.hero-header h1, .hero-text, .eggdog-img, .hero-icons',
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.inOut',
      }
    );

    const model = modelRef.current;

    gsap.fromTo(
      model,
      { x: 150, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '#hero',
          start: 'top 50%',
          end: 'bottom 50%',
          toggleActions: 'play reverse play reverse',
        },
      }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="hero-layout">
        {/* LEFT: Hero Content*/}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-2">
            <div className="hero-header">
              <div className="flex flex-row gap-6">
                <h1>
                  Hello, <span>I&apos;m Trevor </span>
                </h1>
                <img
                  className="eggdog-img md:w-20 md:mt-3 md:h-20 w-15 h-15 rounded-full"
                  src="/images/eggdog.jpg"
                  alt="Eggdog"
                />
              </div>
            </div>
            <p className="hero-text">
              Some of my hobbies include
              <span className="slide">
                <span className="wrapper">
                  {HobbiesText.map((hobby) => (
                    <span
                      key={hobby.id}
                      className="flex items-center md:gap-3 gap-1 pb-2 text-blue-400 font-medium"
                    >
                      {hobby.text}
                    </span>
                  ))}
                </span>
              </span>
            </p>
            <div className="hero-icons">
              {SocialIconsData.map((social) => (
                <a
                  className="icon"
                  target="_blank"
                  key={social.url}
                  href={social.url}
                >
                  <img src={social.imgPath} alt={social.name} />
                </a>
              ))}
            </div>
          </div>
        </header>

        {/* RIGHT: Hero Model*/}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience ref={modelRef} />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
