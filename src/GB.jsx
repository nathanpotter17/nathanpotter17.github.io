import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function GB(props) {
  const { nodes, materials } = useGLTF('/GB-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh.geometry} material={materials['default.002']} />
      <mesh geometry={nodes.Mesh_1.geometry} material={materials['default.003']} />
      <mesh geometry={nodes.Mesh_2.geometry} material={materials['screen.001']} />
    </group>
  )
}

useGLTF.preload('/GB-transformed.glb')
