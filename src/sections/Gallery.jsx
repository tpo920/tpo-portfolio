import { useRef } from 'react';
import ZoomableImage from '../components/ZoomableImage/ZoomableImage';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import SrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(SrollTrigger);

const Gallery = () => {
  // Section ref
  const sectionRef = useRef(null);
  // Gallery component refs
  const leftGalleryComponent = useRef(null);
  const rightGalleryComponent = useRef(null);

  //On scroll animation
  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const components = [
      leftGalleryComponent.current,
      rightGalleryComponent.current,
    ];

    components.forEach((component, index) => {
      gsap.fromTo(
        component,
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
            trigger: component,
            start: 'top bottom-=100',
          },
          ease: 'power2.inOut',
        }
      );
    });
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="app-showcase">
      <div>
        <p className="text-4xl font-medium text-white text-center">
          Favourite Works
        </p>
        <div className="w-[58%] border-b-2 border-blue-300 mt-1" />
      </div>
      <div className="w-full">
        <div className="showcaselayout mt-15 relative">
          {/* LEFT Section */}
          <div
            className="first-gallery-element-wrapper"
            ref={leftGalleryComponent}
          >
            <div className="video-wrapper">
              <video muted playsInline controls width="100%">
                <source
                  src="/clips/TrevorCryptocurrencyAnimation.mp4"
                  type="video/mp4"
                />
                Video not supported on current browser.
              </video>
            </div>
            <div className="text-content">
              <h2 className="space-y-5 mt-5">
                Blockchain Technology Reimagined through an Immersive Digital
                Hub
              </h2>
              <p className="text-white-50 md:text-l mt-1 italic">
                - One of my most favourite hand-drawn animated shorts. Inspired
                by neo-futurism concepts and Japan's vibrant, compact cities, I
                wanted to showcase blockchain technology through a unique and
                engaging visual narrative.
              </p>
            </div>
          </div>

          {/* RIGHT Section */}
          <div
            className="gallery-list-wrapper overflow-visible"
            ref={rightGalleryComponent}
          >
            <div className="project">
              <div className="image-wrapper bg-white">
                <ZoomableImage src="/images/Storyboard.png" alt="storyboard" />
              </div>
              <div className="text-content">
                <h2 className="mt-2.5">
                  Capturing User Experience through a Storyboard
                </h2>
                <p className="text-white-50 md:text-m italic">
                  - A comic-like storyboard to visualise a user's experience in
                  reflecting on their ecological impact. This was part of a
                  project to develop a low-fidelity web app.
                </p>
              </div>
            </div>
            <div className="project">
              <div className="image-wrapper bg-[#c2dcf5]">
                <ZoomableImage src="/images/Eggy.png" alt="eggy" />
              </div>
              <div className="text-content">
                <h2 className="mt-2.5">Eggy🥚</h2>
                <p className="text-white-50 md:text-m italic">
                  - A CAD model designed to promote healthy diets for kids
                  through a fun and unique solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
