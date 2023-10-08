import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Ground (props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./Ground-transformed.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Plane007" geometry={nodes.Plane007.geometry} material={materials.carpet} receiveShadow />
      </group>
    </group>
  )
}

useGLTF.preload('./Ground-transformed.glb')
