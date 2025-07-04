import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html as="div" center className="flex flex-col justify-center items-center">
      <span className="canvas-loader"></span>
      <p className="text-sm text-gray-100 font-black" style={{ marginTop: 40 }}>
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
