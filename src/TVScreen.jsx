/* REFERENCE: POIMANDRES DEV 'MONITOR EXAMPLE' */

import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useCursor, Text } from '@react-three/drei'

export function TVScreen ({ scale, ...props }) {
  const ref = useRef()
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  useCursor(hovered)
  useFrame((state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta))
  return (
    <mesh
      {...props}
      position={[0,0,5]}
      ref={ref}
      scale={clicked ? scale * 1.4 : scale * 1.2}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry />
      <meshStandardMaterial color={hovered ? 'green' : 'lightblue'} />
    </mesh>
  )
}
