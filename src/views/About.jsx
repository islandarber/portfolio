import html from '../assets/skillsLogos/htmlLogo.png';
import git from '../assets/skillsLogos/gitLogo.png';
import css from '../assets/skillsLogos/cssLogo.png';
import js from '../assets/skillsLogos/jsLogo.png';
import react from '../assets/skillsLogos/reactLogo.png';
import node from '../assets/skillsLogos/nodejsLogo.png';
import express from '../assets/skillsLogos/expressLogo.png';
import mongo from '../assets/skillsLogos/mongoLogo.png';
import ts from '../assets/skillsLogos/tsLogo.png';
import c from '../assets/skillsLogos/cLogo.png';
import aboutme from '../assets/skillsLogos/aboutme.png';
import { motion } from "framer-motion";

const About = () => {

    const skills = [ "Javascript", "React", "Node.js", "Express", "MongoDB", "TypeScript", "HTML", "CSS", "Git" ];


    return (
        <section id="about" className='min-h-screen font-source pt-14'>
          <div className='flex flex-col justify-center items-center gap-4 mt-8'>
              <h1 className='text-4xl md:text-7xl text-white text-center'>About me</h1>
              <hr className="w-3/4 md:w-1/2 border-0 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 text-white m-4">
              {/* The description here */}
              <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className='w-full lg:w-1/3 flex flex-col items-center gap-4'>
                  <img src={aboutme} alt="aboutme" className='w-32 md:w-40 border border-white rounded-full p-2' />
                  <p className='text-lg md:text-xl'>Driven by a passion for JavaScript, React, and the endless possibilities of web development, I thrive on creativity and problem-solving. Life-long learning is at the core of my journey, constantly pushing me to explore new challenges and technologies. Beyond coding, cooking, traveling, and watching series are some of the things that recharge my creativity and keep me inspired.</p>
              </motion.div>
          
              {/* Skill Set here */}
              <motion.div
                className='skill-set flex gap-4 mt-4'>
                  {/* 1st column */}
                  <div className='flex flex-col justify-center items-center gap-4'>
                      <motion.div
                        initial={{opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                       className='skill-container'>
                          <img src={html} alt="htmlLogo" className='skill-logo'/>
                          <p>HTML5</p>
                      </motion.div>
                      <motion.div
                        initial={{opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
                       className='skill-container'>
                          <img src={css}
                           alt="cssLogo"
                           className='skill-logo'
                           />
                          <p>CSS</p>
                      </motion.div>
                      <motion.div
                      initial={{opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
                      className='skill-container'>
                          <img src={react} alt="reactLogo" className='skill-logo'/>
                          <p>React</p>
                      </motion.div>
                  </div>
                  {/* 2nd column */}
                  <div className='flex flex-col justify-center items-center items-center gap-4'>
                      <motion.div
                        initial={{opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 1 }}
                       className='skill-container'>
                          <img src={js} alt="jsLogo" className='skill-logo'/>
                          <p>Javascript</p>
                      </motion.div>
                      <motion.div 
                      initial={{opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                      className='skill-container'>
                          <img src={node} alt="nodeLogo" className='skill-logo'/>
                          <p>Node.js</p>
                      </motion.div>
                      <motion.div 
                      initial={{opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
                      className='skill-container'>
                          <img src={express} alt="expressLogo" className='skill-logo'/>
                          <p>Express</p>
                      </motion.div>
                      <motion.div 
                      initial={{opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                      className='skill-container'>
                          <img src={mongo} alt="mongoLogo" className='skill-logo'/>
                          <p>MongoDB</p>
                      </motion.div>
                  </div>
                  {/* 3rd column */}
                  <div className='flex flex-col justify-center items-center items-center gap-4'>
                      <motion.div 
                      initial={{opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                      className='skill-container'>
                          <img src={ts} alt="tsLogo" className='skill-logo'/>
                          <p>TypeScript</p>
                      </motion.div>
                      <motion.div 
                      initial={{opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                      className='skill-container'>
                          <img src={c} alt="cLogo" className='skill-logo'/>
                          <p>C</p>
                      </motion.div>
                      <motion.div 
                      initial={{opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                      className='skill-container'>
                          <img src={git} alt="gitLogo" className='skill-logo'/>
                          <p>Git</p>
                      </motion.div>
                  </div>
              </motion.div>
          </div>
        </section>
    );
};

export default About;