import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera, RenderTexture } from '@react-three/drei'
import { TVScreen } from './TVScreen'

export function Comp(props) {
  const { nodes, materials } = useGLTF('./comp-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.18, 0.765, -4.04]} scale={[0.4, 0.28, 0.25]}>
        <mesh geometry={nodes.Cube004.geometry} material={materials.basecompy} castShadow/>
        <mesh geometry={nodes.Cube004_1.geometry} material={materials.screenj} />
        <mesh geometry={nodes.Cube004_2.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Cube004_3.geometry} material={materials['Material.009']} />
        <mesh geometry={nodes.Cube004_4.geometry} material={materials['Material.003']} castShadow/>
        <mesh geometry={nodes.Cube004_5.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Cube004_6.geometry} material={materials.glass} />
        <mesh geometry={nodes.Cube004_7.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Cube004_8.geometry} material={materials['Material.010']} />
        <mesh geometry={nodes.Cube004_9.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Cube004_10.geometry} material={materials.Material} />
        <ScreenInteractive frame="Cube004" panel="Cube004_1" />
      </group> 
    </group>
  )
}

function Screen({ frame, panel, children, ...props }) {
  const { nodes, materials } = useGLTF('/comp-transformed.glb')
  return (
    <group {...props}>
      <mesh castShadow receiveShadow geometry={nodes[frame].geometry} material={materials.basecompy} />
      <mesh geometry={nodes[panel].geometry} >
        <meshBasicMaterial toneMapped={false}>
          <RenderTexture width={512} height={512} attach="map" anisotropy={16}>
            {children}
          </RenderTexture>
        </meshBasicMaterial>
      </mesh>
    </group>
  )
}

/* Renders a monitor with a spinning box */
function ScreenInteractive(props) {
  return (
    <Screen {...props}>
      <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 10]} />
      <color attach="background" args={['white']} />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.75} />
      <pointLight position={[-10, -10, -10]} />
      <TVScreen scale={1} />
    </Screen>
  )
}

useGLTF.preload('./comp-transformed.glb')
