import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { Outlet, Link } from "react-router-dom";
import "./About.scss";

function About() {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3300);
  }, []);

  return (
    <div className="container about-page">
      <div className="page">
        <span className="tags top-html">&lt;/html&gt;</span>
        <span className="tags top-tags">&lt;body&gt;</span>

        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
            strArray={[
  "M","y",","," ",
  "M","y","s","e","l","f"," ",
  "&"," ","I",
]}
              idx={15}
            />
          </h1>
          <p>
I’m Dhiraj Gupta, a B.Tech Computer Science student and MERN Stack Developer
with hands-on experience building scalable full-stack applications and
high-performance dashboards.

<br /><br />

Currently working as a <strong>Software Engineer Intern at CyberSRC</strong>,
where I built a CXO Risk Monitoring Dashboard using Next.js and TypeScript,
optimized REST APIs with PostgreSQL and Redis caching, and developed systems
handling <strong>50K+ records</strong> efficiently.

<br /><br />


💻 Tech stack: MERN, Next.js, Docker, AWS, CI/CD <br />
🧠 Problem solving: <strong>800+ DSA problems solved</strong>

<br /><br />

I’m passionate about building scalable backend systems, clean UI experiences,
and real-world products that create impact. I’m actively seeking Full Stack /
MERN Developer opportunities.

<Link to="/contact" className="reach">
  {" "}Reach out to me!
</Link>
</p>
          <div className="myCv">
            <div className="rtext">My Resume</div>
            <div className="okay">
              <a
                href="https://drive.google.com/file/d/1X4z1tmv4E3A8iuawO6N12vPMv_96TExE/view?usp=drive_link"
                target="__blank"
              >
                CLICK HERE TO VIEW PDF
              </a>
            </div>
          </div>
        </div>

        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  );
}

export default About;