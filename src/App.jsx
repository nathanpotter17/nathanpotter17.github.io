import React, { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useTexture, Html, Loader, useVideoTexture } from '@react-three/drei'
import { DepthOfField, EffectComposer, SMAA, Bloom, Scanline, ChromaticAberration, Noise, BrightnessContrast } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import { useSpring, a, config } from '@react-spring/three'
import * as THREE from 'three';
import { easing } from 'maath'
import { TV } from './TV'
import { Comp } from './Comp'
import { GB } from './GB'
import { Shell } from './Shell'
import { SideTabel } from './SideTabel'
import './desktopC.css'

let lightInt = 5;
let hemiLight = 0.15;
let shadowLight = 0.3;
let camDefaultZ = 5;
let lookX = 0;
let lookY = 0;
let lookZ = 0;

function Sun() {
  return (
    <mesh
      scale={0.05}
      position={[4.5,2.7,-8]}
      rotation={[0,0,Math.PI/2]}>
      <sphereGeometry args={[10,15,15]} />
      <meshStandardMaterial emissive="#f9d97a" emissiveIntensity={2} toneMapped={false} />
    </mesh>
  )
}

function Resume() {
  const texture1 = useTexture('./Resume.jpg')
  return(
  <a.mesh position={[-0.8,0.1,-3.3]} rotation={[-Math.PI/2,0,Math.PI/4]} scale={0.25} >
    <boxGeometry args={[2,2,0.05]}/>
    <meshPhysicalMaterial map={texture1} />
  </a.mesh>
  )
}

function Sky() {
  const texture = useVideoTexture("./sunny.mp4")
  return(
    <mesh position={[4.2,1.6,-8.5]}>
      <planeGeometry args={[6,6]}/>
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
    
  )
}

function CameraRig() {
  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [(-state.pointer.x * state.viewport.width) / 8, (2.5 + -state.pointer.y) / 3, camDefaultZ], 0.7, delta)
    state.camera.lookAt(lookX, lookY, lookZ);
  })
}

function Ground() {
  const texture = useTexture('./carpet.png')

  return(
    <mesh position={[0,-1,0]} rotation={[-Math.PI/2,0,0]} receiveShadow >
      <planeGeometry args={[9,9]} />
      <shadowMaterial transparent opacity={1}/>
      <meshPhysicalMaterial map={texture} />
    </mesh>
  )
}

function SearchElement() {
  const handleSearch = () => {
    const value = document.getElementById('input').value;
    const iframe = document.getElementById('iframe1');
    iframe.src = `https://www.bing.com/search?q=${value}`;
  };
  
  return(
    <Html
      position={[4, 1, 0]}
      rotation={[0, -Math.PI/2, 0]}
      scale={0.15}
      occlude={'blending'}
      transform
    >
      <div style={{ textAlign: 'center' }}>
        <input
          id='input'
          type='search'
          name='q'
          style={{ background: 'white', color: 'black' }}
        />
        <button
          id='submit'
          onClick={handleSearch}
          style={{
            backgroundColor: '#8b46cc',
            color: 'white',
            height: '25px',
            width: '80px',
            border: 'none',
            borderRadius: '10px',
            fontSize: '18px',
          }}
        >
          Search
        </button>
        <br />
        <iframe
          id='iframe1'
          name='iframe1'
          height='228px'
          width='512px'
          style={{ borderRadius: '10px' }}
        ></iframe>
      </div>
    </Html>
  )
}

function LightSwitch() {
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)
  
  const renderer = new THREE.WebGLRenderer();
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  const light = useRef();

  const { scale, position, rotation } = useSpring({
    scale: active ? 0.13 : hovered ? 0.12 : 0.13,
    position: [4.52, 0.60, 0.765],
    rotation: active ? [0, 0, Math.PI/1.2] : [0, 0, Math.PI/4],
    config: config.stiff
  })

  if (active == true) {
    lightInt = 0;
    hemiLight = 0.05;
    shadowLight = 0;
  } else {
    lightInt = 7;
    hemiLight = 0.15;
    shadowLight = 0.1;
  }

  return(
    <group>
      <a.mesh
        scale={scale}
        position={position}
        rotation={rotation}
        onClick={() => setActive(!active)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}>
        <boxGeometry args={[0.2, 2, 0.2]} />
        <meshStandardMaterial color={"white"} />
      </a.mesh>
      <pointLight distance={7} intensity={lightInt} position={[0, 2, 1]} color="#fff7da" />
      <hemisphereLight intensity={hemiLight} groundColor="white" />
      <directionalLight
        ref={light}
        color="white"
        position={[0, 20, 20]}
        intensity={shadowLight}
        radius={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.001}
        shadow-camera-near={0.1}
        shadow-camera-far={500}
        shadow-camera-left={-50}
        shadow-camera-right={50}
        shadow-camera-top={50}
        shadow-camera-bottom={-50}
      />
    </group>
  )

}


export const App = () => {

  const [activeTab, setActiveTab] = useState('HOME');

  function handleTabClick(tabName) {
    setActiveTab(tabName); // Update the active tab state

    // Call the appropriate function based on the active tab
    if (tabName === 'HOME') {
        camDefaultZ = 4;
        lookX = 0;
        lookY = 0;
        lookZ = 0;
    } else if (tabName === 'ABOUT') {
        camDefaultZ = 0;
        lookX = 0;
        lookY = 1;
        lookZ = -5;
    }
    // Add additional conditions for other tabs if needed
  }

  return (
    <>
    <div className="tabs__head">
      <h2 className="logo">NATHAN POTTER.</h2>
      <button
        className={`tabs__toggle ${activeTab === 'HOME' ? 'is-active' : ''}`}
        onClick={() => handleTabClick('HOME')}
      >
        HOME
      </button>
      <button
        className={`tabs__toggle ${activeTab === 'ABOUT' ? 'is-active' : ''}`}
        onClick={() => handleTabClick('ABOUT')}
      >
        ABOUT
      </button>
    </div>
    <div>
      <Canvas style={{ width: '100vw', height: '100vh' }} shadows gl={{ antialias: SMAA }}>
      
          {/* Lights */}
          <color attach="background" args={['black']} />
          <Sun />
          <Sky />
          <LightSwitch />
          <pointLight distance={3} intensity={3} position={[-3, 1, -3.2]} color="white" />

          <pointLight distance={3} intensity={2} position={[6, 1, -1]} color="white" />
          
          {/* Borders */}
          <Shell />
          <Ground />

          {/* Desk */}
          <SideTabel />
          <GB position={[0,-1,1.5]} />
          <Resume />

          {/* Game Center */} 
          <TV position={[3.33,-1.025,-3.25]} rotation={[0,2.4,0]} />
          <Comp />

        <EffectComposer disableNormalPass>
          <Bloom luminanceThreshold={1} mipmapBlur luminanceSmoothing={0.2} intensity={2} />
          <DepthOfField target={[0, 0, 13]} focalLength={0.3} bokehScale={15} height={700} />
          <Noise
            premultiply
            intensity={0.5}
            blendFunction={BlendFunction.ADD} 
          />
            <BrightnessContrast
            brightness={-0.1} // brightness. min: -1, max: 1
            contrast={0} 
          />

        </EffectComposer>
        <CameraRig />
        
      </Canvas>
    </div>
    <div className="foot">
        <p>&copy; NP 2023</p>
        <div className="social">
          <ul id="icons">
              <a href="https://www.instagram.com/naterenders/" target="_blank">
                <li className="icon1"></li>
              </a>
              <a href="https://www.linkedin.com/in/nathan-potter1" target="_blank">
                <li className="icon2"></li>
              </a>
          </ul>
        </div>
    </div>
    </>
  )
}
