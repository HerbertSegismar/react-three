import 'react-vertical-timeline-component/style.min.css'
import {motion} from 'motion/react'
import {experiences} from '../constants'

const Experience = () => {
  return (
    <div className="padding">
      <motion.p
        className="sectionSubText"
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 1.5 }}
      >
        What I have done so far
      </motion.p>
      <motion.h2
        className="sectionHeadText"
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8, duration: 2 }}
      >
        Work Experience.
      </motion.h2>
      <div>
        {experiences.map((experience, index) => (
          <motion.div
            animate={{
              opacity: [0, 1],
              x: [-screen.width, 0],
              transition: { duration: 5, ease: "easeInOut" },
            }}
            className="flex items-center justify-around gap-10"
            key={index}
          >
            <div>
              <div className="border-4 border-slate-500 rounded-full">
                <img
                  width="100vw"
                  src={experience.icon}
                  alt={experience.company_name}
                  className="border-8 rounded-full border-slate-800 bg-slate-800"
                />
              </div>
            </div>
            <div
              className="bg-slate-800 h-40 flex flex-1 gap-4 items-center rounded-lg border-b-4 border-slate-500"
              style={{ marginBottom: 20 }}
            >
              <div className='flex flex-col items-center w-62'>
                <h3
                  className="text-white text-xl font-bold text-left"
                  style={{ marginBottom: 10, marginLeft: 30 }}
                >
                  {experience.title}
                </h3>
                <h4 className="text-xs text-center">{experience.date}</h4>
              </div>
              <h2
                className="text-sm text-left text-blue-300"
              >
                {experience.points}
              </h2>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Experience