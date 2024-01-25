import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./portfolio.scss";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: '/amazonCartClone.png',
    desc: " Explore the Amazon Clone App, a dynamic React-based project. Leveraging the power of React and its state management using a reducer, our app seamlessly integrates a robust 'Add to Cart' functionality. The backend and authentication are powered by Firebase.",
    link: 'https://github.com/VivekKumar-8287/Amazon__Clone',
    btnText: 'click to see'
  },
  {
    id: 2,
    title: "BSBeat App",
    img: "/BSBeat.png",
    desc: "Beatbox Instrument project. Crafted using the JavaScript, HTML, and CSS, this musical endeavor allows you to create beats, experiment with sounds, and by clicking the A,S,D,F,G,H,J,K and L that make a different music notes.",
    link: 'https://exquisite-monstera-692790.netlify.app/',
    btnText: 'click to see'
  },
  {
    id: 3,
    title: "freeCodeCamp",
    img: "/FreeCodeCampLogo.png",
    desc: "To enhance my development skills, I used freeCodeCamp, a nonprofit organization founded by Quincy Larson in 2014. This platform provides a free, self-paced curriculum covering various coding and web development topics, from HTML and CSS to advanced technologies like React.js. Emphasizing hands-on, project-based learning, freeCodeCamp helps users acquire practical skills and build a robust portfolio",
    link:'https://www.freecodecamp.org/fccbdfdc0ca-1990-44f1-956c-c9ac9c12bc8e',
    btnText: 'click to see'
  },
  {
    id: 4,
    title: "Cuber",
    img: "/Rubik'sCube.png",
    desc: "The Rubik's Cube is a 3-D combination puzzle invented in 1974 by Hungarian sculptor and professor of architecture Ernő Rubik. The cube has over 43 quintillion possible combinations, making manual solving a complex task. It Improved Spatial Awareness, Enhanced Problem-Solving Skills, Patience and Perseverance, Memory Improvement, Focus and Concentration and Stress Relief and Relaxation.",
    btnText: ' Explore it'
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ['start start','end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}} >
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank">
            <button>{item.btnText}</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio">
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
