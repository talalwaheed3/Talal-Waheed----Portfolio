import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowCaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
      }
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <a
                href="https://github.com/talalwaheed3/OutOfStock/tree/Angular-OutOfStock/frontend/ng-outstock"
                target="_blank"
              >
                <img src="/images/outstock.png" alt="OutOfStock" />
              </a>
            </div>
            <div className="text-content">
              <h2>Outstock - A Clean, Minimal eCommerce Web Store.</h2>
              <p className="text-white-50 md:text-xl">
                An eCommerce web store build with Angular 18, NodeJs, ExpressJS
                for a fast, user-friendly experience.
              </p>
            </div>
          </div>
          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <a
                  href="https://github.com/talalwaheed3/CrciketCoaching"
                  target="_blank"
                >
                  <img
                    src="/images/gestuer-based cricket coaching system.png"
                    alt="Cricket Coaching System"
                  />
                </a>
              </div>
              <h2>AI Powered, A Gesture Based Cricket Coaching System.</h2>
            </div>
            {/* <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="Library Managment" />
              </div>
              <h2>Library Management Platform</h2>
            </div> */}
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <a
                  href="https://github.com/talalwaheed3/usepoppcorn"
                  target="_blank"
                >
                  <img src="/images/usePopcorn.png" alt="usePopcorn" />
                </a>
              </div>
              <h2>usePopcorn - A simple Movie rating website.</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowCaseSection;
