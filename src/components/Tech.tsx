import { technologies } from "../constants"
import BallCanvas from "../components/canvas/BallCanvas"

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <img src={technology.icon} alt={technology.name} />
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default Tech