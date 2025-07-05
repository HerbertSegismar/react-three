import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
import CanvasLoader from './Loader'

const Computers = ({isMobile}: {isMobile: boolean}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={4} groundColor="black" />
      <pointLight intensity={0.2} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene} 
        scale={isMobile ? 0.5 : 0.75}
        position={[0, -3, -1.5]}
        rotation={[0, -5.6, 0]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the screen size is less than 500px
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    // Set the initial value of isMobile
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: { matches: boolean }) => {
      setIsMobile(event.matches);
    };

    // Add a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      // Remove the listener when the component is unmounted 
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  },[])

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

export default ComputersCanvas