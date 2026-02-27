import { useEffect, useState, useRef } from "react";
import TagCloud from "TagCloud";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./Skill.scss";
import { Outlet } from "react-router-dom";

function Skill() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const contentRef = useRef(null);

  useEffect(() => {
    const myTags = [
      "JavaScript",
      "CSS",
      "HTML",
      "Tailwind CSS",
      "Figma",
      "C",
      "C++",
      "React.js",
      "Next.js",
      "Python",
      "git",
      "github",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Supabase",
      "TypeScript",
      "MySQL",
      "PostgreSQL",
      "Rest API",
      "Redis",
      "Prisma",
      "TanStack Query",
      "AWS",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Jenkins",
      "Genrative AI",
    ];

    const tagCloud = TagCloud(".content", myTags, {
      radius: 350,
      maxSpeed: "fast",
      initSpeed: "fast",
      direction: 135,
      keep: true,
    });

    let currentScale = 1;
    let ticking = false;

    const updateTransform = () => {
      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(-50%) scale(${currentScale})`;
      }
      ticking = false;
    };

    const handleWheel = (e) => {
      e.preventDefault();

      const zoomSpeed = 0.0015;
      currentScale += e.deltaY * -zoomSpeed;

      currentScale = Math.min(Math.max(0.4, currentScale), 3);

      if (!ticking) {
        window.requestAnimationFrame(updateTransform);
        ticking = true;
      }
    };

    const sphereContainer = contentRef.current;
    if (sphereContainer) {
      sphereContainer.addEventListener("wheel", handleWheel, {
        passive: false,
      });
    }
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    return () => {
      clearTimeout(timer);
      if (tagCloud && typeof tagCloud.destroy === "function") {
        tagCloud.destroy();
      }
      if (sphereContainer) {
        sphereContainer.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <>
      <div className="container skill-page">
        <span className="tags top-html">&lt;/html&gt;</span>
        <span className="tags top-tags">&lt;body&gt;</span>
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["S", "k", "i", "l", "l", "s", " ", "&"]}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["E", "x", "p", "e", "r", "i", "e", "n", "c", "e"]}
              idx={22}
            />
          </h1>
          <p>
            The main area of my expertise is full-stack web development (both
            client and service side of the web).
            <br />
            <br />
            • Languages: C/C++, JavaScript, TypeScript, Python, SQL,
            HTML/CSS
            <br />
            • Developer Tools: VS Code, Git, Docker,
            CI/CD, Linux, AWS, Supabase, Figma
            <br />
            • Technologies/Frameworks: React, Node.js, Next.js,
             MongoDB, MySQL, PostgreSQL, Redis, Prisma, TanStack Query, Gen AI
            <br />• Undergraduate Coursework: Data Structures, Operating
            Systems, Algorithms Analysis, Database Management, Artificial
            Intelligence, OOP's, Distributed Systems, Computer Networks
          </p>

   <div className="timeline-container">
  <div className="timeline-title">TIMELINE</div>

  {/* Company Row */}
  <div className="timeline-company-row">
    <div className="company-block" style={{ width: "22%" }}>
      <span>WebDev</span>
    </div>

    <div className="company-block" style={{ width: "22%" }}>
      <span>Freelance</span>
    </div>

    <div className="company-block" style={{ width: "22%" }}>
      <span>Dana Inc.</span>
    </div>

    <div className="company-block" style={{ width: "20%" }}>
      <span>CyberSRC</span>
    </div>
  </div>

  {/* Track */}
  <div className="timeline-track">

    <div className="timeline-segment" style={{ left: "0%", width: "22%" }}>
      <span className="timeline-label">Projects</span>
      <div className="timeline-bar pink"></div>
    </div>

    <div className="timeline-segment" style={{ left: "22%", width: "22%" }}>
      <span className="timeline-label">Freelance Projects</span>
      <div className="timeline-bar teal"></div>
    </div>

    <div className="timeline-segment" style={{ left: "44%", width: "22%" }}>
      <span className="timeline-label">SDE Intern</span>
      <div className="timeline-bar blue"></div>
    </div>

    <div className="timeline-segment" style={{ left: "66%", width: "17%" }}>
      <span className="timeline-label">SDE   Intern</span>
      <div className="timeline-bar yellow"></div>
    </div>

  </div>

  {/* Axis */}
  <div className="timeline-axis">
    <span style={{ left: "0%" }}>2023</span>
    <span style={{ left: "22%" }}>2024</span>
    <span style={{ left: "44%" }}>2025</span>
    <span style={{ left: "66%" }}>2026</span>
    <span style={{ left: "100%" }}>2027</span>
  </div>
</div>

        </div>
        <Outlet />
        <div ref={contentRef} className="content"></div>
        <div className="scroll-hint">Scroll here to zoom in and zoom out</div>
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </>
  );
}

export default Skill;