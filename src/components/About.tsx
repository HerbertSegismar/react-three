import { motion } from "motion/react"; 
import { services } from "../constants";
import { Tilt } from "react-tilt";
import { cardAnimation, container } from "../utils/motion";  


const ServiceCard = ({ title, icon }: { title: string; icon: string }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full flex justify-around flex-1"
      style={{ marginTop: 40 }}
    >
      <motion.div
        variants={cardAnimation}
        className="h-[282px] w-[386px] green-pink-gradient rounded-[20px] p-[1px] flex items-center justify-center"
      >
        <div className="w-96 violet-gradient p-[1px] rounded-[20px] shadow-card">
          <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <motion.img
              src={icon}
              alt={title}
              className="size-16 object-contain"
              whileHover={{ scale: 1.1 }}
            />
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <motion.section
      className="paddingX"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px 0px -100px 0px" }} // Adjusted margins for better trigger timing
    >
      <div id="about">
        <motion.p
          className="sectionSubText"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Introduction
        </motion.p>
        <motion.h2
          className="sectionHeadText"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Overview.
        </motion.h2>
      </div>

      <motion.p
        className="mt-4 text-secondary text-lg max-w-3xl leading-7"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        I'm a full-stack developer with experience in React, Next.js, and
        Three.js. I'm also an avid learner, always seeking out new technologies
        and frameworks to expand my skillset.
      </motion.p>

      <motion.div
        className="mt-20 flex flex-wrap gap-10 justify-around"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px 0px -100px 0px" }} // Fine-tuned trigger area
      >
        {services.map((service, index) => (
          <motion.div key={`service-${index}`} variants={cardAnimation}>
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default About;
