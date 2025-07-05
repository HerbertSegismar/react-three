import { motion } from 'motion/react'
import { fadeIn, textVariant } from '../utils/motion'
import { services } from '../constants';
import { Tilt } from 'react-tilt';

const ServiceCard = ({index, title, icon}: {index: number, title: string, icon: string}) => {
  return (
    <Tilt className="xs:w-[250px] w-full flex flex-1" style={{marginTop: 40}}>
      <motion.div
        animate={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-96 violet-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
        options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="size-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )

}

const About = () => {
  return (
    <div className='paddingX'>
      <motion.div animate={textVariant(1)} id="about">
        <p className="sectionSubText">Introduction</p>
        <h2 className="sectionHeadText">Overview.</h2>
      </motion.div>
      <motion.p
        animate={fadeIn("up", "tween", 0.2, 1)}
        className="mt-4 text-secondary text-lg max-w-3xl leading-7"
      >
        I'm a full-stack developer with experience in React, Next.js, and
        Three.js. I'm also an avid learner, always seeking out new technologies
        and frameworks to expand my skillset.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
}

export default About