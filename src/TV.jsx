import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, useAnimations, PerspectiveCamera, RenderTexture } from '@react-three/drei'
import { TVScreen } from './TVScreen' 

export function TV (props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/tv-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group {...props} dispose={null}>
      <group name="Cube_005" >
        <mesh geometry={nodes.Cube008.geometry} material={materials.frontcrt} />
        <mesh geometry={nodes.Cube008_1.geometry} material={materials.basecrt} />
        <mesh geometry={nodes.Cube008_2.geometry} material={materials.backcrt} />
        <mesh geometry={nodes.Cube008_3.geometry} material={materials.screen} />
        <mesh geometry={nodes.Cube008_4.geometry} material={materials['Material.006']} />
        <ScreenInteractive frame="Cube005" panel="Cube008_3" />
      </group>
    </group>
  )
}

function Screen({ frame, panel, children, ...props }) {
  const { nodes, materials } = useGLTF('/tv-transformed.glb')
  return (
    <group {...props}>
      <mesh castShadow receiveShadow geometry={nodes[frame].geometry} material={materials.basecrt} />
      <mesh geometry={nodes[panel].geometry}>
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
      <color attach="background" args={['black']} />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.75} />
      <pointLight position={[-10, -10, -10]} />
      <TVScreen scale={1} />
    </Screen>
  )
}

useGLTF.preload('/tv-transformed.glb')
