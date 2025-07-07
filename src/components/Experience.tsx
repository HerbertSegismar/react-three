import 'react-vertical-timeline-component/style.min.css'
import {motion} from 'motion/react'
import {experiences} from '../constants'
import { exp } from 'three/tsl';

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
        style={{ marginBottom: 30 }}
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
            className="flex items-center justify-around gap-4 w-full 2xl:w-[85vw] mx-auto"
            key={index}
          >
            <div className="flex flex-col items-center">
              <div className="border-4 border-slate-500 rounded-full w-24 2xl:w-32">
                <img
                  src={experience.icon}
                  alt={experience.company_name}
                  className="border-8 rounded-full border-slate-800 bg-slate-800 size-full"
                />
              </div>
              <div className="h-48 w-1 bg-slate-500" />
            </div>
            <div
              className="grid grid-cols-7 bg-slate-800 h-60 gap-4 items-center rounded-lg border-b-4 border-slate-500"
              style={{ marginBottom: 20 }}
            >
              <div className="w-62 2xl:w-96 col-span-2">
                <h3
                  className="text-white text-xl font-bold text-left 2xl:text-2xl"
                  style={{ marginBottom: 10, marginLeft: 25 }}
                >
                  {experience.title}
                </h3>
                <p
                  className="text-secondary text-[16px] font-semibold"
                  style={{ marginLeft: 25 }}
                >
                  {experience.company_name}
                </p>
                <h4 className="text-xs" style={{ marginLeft: 25 }}>
                  {experience.date}
                </h4>
              </div>
              <div
                className="hidden lg:block text-sm 2xl:text-lg text-blue-300 col-span-5"
                style={{ marginLeft: 35, marginRight: 25 }}
              >
                <ul className="mt-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      className="text-white-100 text-[14px] pl-1 tracking-wider"
                      key={`experience-point-${index}`}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Experience