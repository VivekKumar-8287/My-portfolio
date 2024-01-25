import React, { useRef } from 'react'
import {motion,useInView} from 'framer-motion'
import './services.scss'

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    }
};

const Services = () => {

    const ref = useRef();

    const isInView = useInView(ref, { margin: "-100px" });

    const branding = ['item1','item2','item3','item4']
  return (
    <motion.div 
    className='services' 
    variants={variants} 
    initial='initial' 
    // animate='animate'
    // whileInView='animate'
    ref={ref}
    animate={'animate'}
    // animate={isInView && 'animate'}
    >
        <motion.div className="textContainer" variants={variants}>
            <p>I focus on solve real life problem with
                <br /> My development skills
            </p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1><motion.b whileHover={{color:'orange'}}>Unique</motion.b> Ideas</h1>
            </div>
            <div className='title'>
                <h1>
                    <motion.b whileHover={{color:'orange'}}>For real life</motion.b> problem
                </h1>
                <motion.button whileHover={{backgroundColor:'white',color:'orange'}}>What I Do</motion.button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            {branding.map((item)=>(
            <motion.div className="box" key={item} whileHover={{background:'lightgray',color:'black'}}>
                <h2>Lorem ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis quo enim doloribus culpa quod dolorum incidunt,  expedita optio </p>
                <button>Go</button>
            </motion.div>
                 ))}
        </motion.div>
    </motion.div>
  )
}

export default Services