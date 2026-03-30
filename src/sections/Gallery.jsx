import { useRef } from 'react';
import { gsap } from 'gsap';
import SrollTrigger from 'gsap/ScrollTrigger';
import ZoomableImage from '../components/ZoomableImage';

gsap.registerPlugin(SrollTrigger);

const Gallery = () => {
  // Section ref
  const sectionRef = useRef(null);
  // Gallery component refs
  const gallery1Ref = useRef(null);
  const gallery2Ref = useRef(null);
  // Image refs
  const storyBoardRef = useRef(null);
  const eggyRef = useRef(null);

  //TODO animation
  /// Insert insert//

  return (
    <section id="gallery" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT Section */}
          <div className="first-gallery-element-wrapper" ref={gallery1Ref}>
            <div className="video-wrapper">
              <video autoPlay loop muted playsInline width="100%">
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
            ref={gallery2Ref}
          >
            <div className="project">
              <div className="image-wrapper bg-white">
                <ZoomableImage
                  src="/images/Storyboard.png"
                  alt="storyboard"
                  ref={storyBoardRef}
                />
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
                <ZoomableImage
                  src="/images/Eggy.png"
                  alt="eggy"
                  ref={eggyRef}
                />
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
