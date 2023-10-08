import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Shell(props) {
  const { nodes, materials } = useGLTF('/Shell-transformed.glb')
  return (
    <group position={[0,-1,0]} {...props} dispose={null}>
      <mesh geometry={nodes.Cube002.geometry} material={materials['walls.001']} receiveShadow/>
      <mesh geometry={nodes.Cube002_1.geometry} material={materials['carpet.001']} receiveShadow/>
      <mesh geometry={nodes.Cube002_2.geometry} material={materials['walls.003']} receiveShadow/>
      <mesh geometry={nodes.Cube002_3.geometry} material={materials['walls.004']} receiveShadow/>
      <mesh geometry={nodes.Cube002_4.geometry} material={materials['dividers.001']} />
      <mesh geometry={nodes.Cube002_5.geometry} material={materials['windowsill.001']} />
      <mesh geometry={nodes.Cube002_6.geometry} material={materials['sp.001']} />
      <mesh geometry={nodes.Cube002_7.geometry} material={materials['spfront.001']} />
      <mesh geometry={nodes.Cube002_8.geometry} material={materials['dividers.001']} />
      <mesh geometry={nodes.Cube002_9.geometry} material={materials['blanket.001']} />
      <mesh geometry={nodes.Cube002_10.geometry} material={materials['ceil.001']} />
      <mesh geometry={nodes.Cube002_11.geometry} material={materials.bed} />
      <mesh geometry={nodes.Cube002_12.geometry} material={materials.pillows} />
      <mesh geometry={nodes.Cube002_13.geometry} material={materials.curtains} />
      <mesh geometry={nodes.Cube002_14.geometry} material={materials.cord} />
      <mesh geometry={nodes.Cube002_15.geometry} material={materials['Material.021']} />
      <mesh geometry={nodes.Cube002_16.geometry} material={materials['Material.022']} />
      <mesh geometry={nodes.Cube002_17.geometry} material={materials['dividers.001']} />
      <mesh geometry={nodes.Cube002_18.geometry} material={materials['dividers.001']} />
      <mesh geometry={nodes.Cube002_19.geometry} material={materials.middleboard} />
      <mesh geometry={nodes.Cube002_20.geometry} material={materials.deckimg} />
      <mesh geometry={nodes.Cube002_21.geometry} material={materials.grip} />
      <mesh geometry={nodes.Cube002_22.geometry} material={materials['Material.017']} />
      <mesh geometry={nodes.Cube002_23.geometry} material={materials['pillows.001']} />
      <mesh geometry={nodes.Cube002_24.geometry} material={materials.wooden_table_02} />
      <mesh geometry={nodes.Cube002_25.geometry} material={materials.books} />
      <mesh geometry={nodes.Cube002_26.geometry} material={materials.bookP} />
      <mesh geometry={nodes.Cube002_27.geometry} material={materials['Material.019']} />
      <mesh geometry={nodes.Cube002_28.geometry} material={materials.shade} castShadow receiveShadow/>
      <mesh geometry={nodes.Cube002_29.geometry} material={materials['Material.020']} />
      <mesh geometry={nodes.Cube002_30.geometry} material={materials['Material.018']} />
      <mesh geometry={nodes.Cube002_31.geometry} material={materials.basecompy} />
      <mesh geometry={nodes.Cube002_32.geometry} material={materials['Cream Keys Gloss']} />
      <mesh geometry={nodes.Cube002_33.geometry} material={materials['Cream Keys Matt']} />
      <mesh geometry={nodes.Cube002_34.geometry} material={materials['Grey Keys Gloss']} />
      <mesh geometry={nodes.Cube002_35.geometry} material={materials['Grey Keys Matt']} />
      <mesh geometry={nodes.Cube002_36.geometry} material={materials['Normal Lettering']} />
      <mesh geometry={nodes.Cube002_37.geometry} material={materials['SysReq Green']} />
      <mesh geometry={nodes.Cube002_38.geometry} material={materials['Light Grey Lettering']} />
      <mesh geometry={nodes.Cube002_39.geometry} material={materials['White Feet']} />
      <mesh geometry={nodes.Cube002_40.geometry} material={materials['Material.015']} />
      <mesh geometry={nodes.Cube002_41.geometry} material={materials.Black} />
      <mesh geometry={nodes.Cube002_42.geometry} material={materials['Cream Keys Matt']} />
      <mesh geometry={nodes.Cube002_43.geometry} material={materials['Grey Keys Matt']} />
      <mesh geometry={nodes.Cube002_44.geometry} material={materials['Sticker Dark Grey']} />
      <mesh geometry={nodes.Cube002_45.geometry} material={materials['Light Holes']} />
      <mesh geometry={nodes.Cube002_46.geometry} material={materials['side_table_01.001']} />
      <mesh geometry={nodes.Cube002_47.geometry} material={materials.butt} />
      <mesh geometry={nodes.Cube002_48.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Cube002_49.geometry} material={materials['base.001']} />
      <mesh geometry={nodes.Cube002_50.geometry} material={materials['dividers.001']} />
      <mesh geometry={nodes.Cube002_51.geometry} material={materials['l2.001']} />
      <mesh geometry={nodes.Cube002_52.geometry} material={materials.base} />
      <mesh geometry={nodes.Cube002_53.geometry} material={materials.joy} />
      <mesh geometry={nodes.Cube002_54.geometry} material={materials.start} />
      <mesh geometry={nodes.Cube002_55.geometry} material={materials.c} />
      <mesh geometry={nodes.Cube002_56.geometry} material={materials.a} />
      <mesh geometry={nodes.Cube002_57.geometry} material={materials.b} />
      <mesh geometry={nodes.Cube002_58.geometry} material={materials.dpad} />
      <mesh geometry={nodes.Cube002_59.geometry} material={materials['Material.025']} />
      <mesh geometry={nodes.Cube002_60.geometry} material={materials['64cord.002']} />
      <mesh geometry={nodes.Cube002_61.geometry} material={materials['Material.013']} />
      <mesh geometry={nodes.Cube002_62.geometry} material={materials.pin3} />
      <mesh geometry={nodes.Cube002_63.geometry} material={materials['dividers.001']} />
      <mesh geometry={nodes.Cube002_64.geometry} material={materials.pin4} />
      <mesh geometry={nodes.Cube002_65.geometry} material={materials['poster.001']} />
      <mesh geometry={nodes.Cube002_66.geometry} material={materials.pin1} />
      <mesh geometry={nodes.Cube002_67.geometry} material={materials['dividers.001']} />
      <mesh geometry={nodes.Cube002_68.geometry} material={materials.pin2} />
    </group>
  )
}

useGLTF.preload('/Shell-transformed.glb')
