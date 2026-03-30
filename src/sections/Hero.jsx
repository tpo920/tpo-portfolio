import React from 'react';
import { HobbiesText } from '../utils/Hobbies';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import IconButton from '../components/IconButton';
import HeroExperience from '../components/HeroModels/HeroExperience';

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.hero-header h1, .hero-text',
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
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="hero-layout">
        {/* LEFT: Hero Content*/}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-2">
            <div className="hero-header">
              <h1>
                Hello, <span>I&apos;m Trevor</span>
              </h1>
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
          </div>
        </header>

        {/* RIGHT: Hero Model*/}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
