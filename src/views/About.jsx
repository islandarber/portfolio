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

const About = () => {

    const skills = [ "Javascript", "React", "Node.js", "Express", "MongoDB", "TypeScript", "HTML", "CSS", "Git" ];

    return (
        <div className=' min-h-screen font-source '>
          <h1 className='mt-8 text-6xl text-white text-center'>About me</h1>
          <div className="flex justify-center items-center gap-24 text-white m-6">
              {/* The description here */}
              <div className='w-[400px] flex flex-col items-center gap-4'>
                  <img src={aboutme} alt="aboutme" className='w-[150px] border border-white rounded-full p-2' />
                  <p className='text-sm'>Driven by a passion for JavaScript, React, and the endless possibilities of web development, I thrive on creativity and problem-solving. Life-long learning is at the core of my journey, constantly pushing me to explore new challenges and technologies. Beyond coding, cooking, traveling, and watching series are some of the things that recharge my creativity and keep me inspired.</p>
              </div>
          
              {/* Skill Set here */}
              <div className='skill-set flex gap-4 mt-4'>
                  {/* 1st column */}
                  <div className='flex flex-col justify-center items-center gap-4'>
                      <div className='skill-container'>
                          <img src={html} alt="htmlLogo" className='skill-logo'/>
                          <p>HTML5</p>
                      </div>
                      <div className='skill-container'>
                          <img src={css}
                           alt="cssLogo"
                           className='skill-logo'
                           />
                          <p>CSS</p>
                      </div>
                      <div className='skill-container'>
                          <img src={react} alt="reactLogo" className='skill-logo'/>
                          <p>React</p>
                      </div>
                  </div>
                  {/* 2nd column */}
                  <div className='flex flex-col justify-center items-center items-center gap-4'>
                      <div className='skill-container'>
                          <img src={js} alt="jsLogo" className='skill-logo'/>
                          <p>Javascript</p>
                      </div>
                      <div className='skill-container'>
                          <img src={node} alt="nodeLogo" className='skill-logo'/>
                          <p>Node.js</p>
                      </div>
                      <div className='skill-container'>
                          <img src={express} alt="expressLogo" className='skill-logo'/>
                          <p>Express</p>
                      </div>
                      <div className='skill-container'>
                          <img src={mongo} alt="mongoLogo" className='skill-logo'/>
                          <p>MongoDB</p>
                      </div>
                  </div>
                  {/* 3rd column */}
                  <div className='flex flex-col justify-center items-center items-center gap-4'>
                      <div className='skill-container'>
                          <img src={ts} alt="tsLogo" className='skill-logo'/>
                          <p>TypeScript</p>
                      </div>
                      <div className='skill-container'>
                          <img src={c} alt="cLogo" className='skill-logo'/>
                          <p>C</p>
                      </div>
                      <div className='skill-container'>
                          <img src={git} alt="gitLogo" className='skill-logo'/>
                          <p>Git</p>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    );
};

export default About;