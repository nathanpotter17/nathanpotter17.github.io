import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function SideTabel(props) {
  const { nodes, materials } = useGLTF('/SideTabel-transformed.glb')
  
  return (
    <group {...props} dispose={null}>
      <group position={[-4.05, -1, -2.05]} rotation={[0, Math.PI / 2, 0]} scale={1.56}>
        <mesh geometry={nodes.Cylinder008.geometry} material={materials['steel_frame_shelves_01.001']} />
        <mesh geometry={nodes.Cylinder008_1.geometry} material={materials['books.001']} />
        <mesh geometry={nodes.Cylinder008_2.geometry} material={materials['bookP.001']} />
        <mesh geometry={nodes.Cylinder008_3.geometry} material={materials['Material.027']} />
        <mesh geometry={nodes.Cylinder008_4.geometry} material={materials['Material.029']} />
        <mesh geometry={nodes.Cylinder008_5.geometry} material={materials['Material.031']} />
      </group>
    </group>
  )
}

useGLTF.preload('/SideTabel-transformed.glb')
