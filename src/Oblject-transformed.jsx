/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 oblject-transformed.glb --shadows
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/oblject-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Icosphere001.geometry} position={[0.16, 0, 0.28]} scale={0.18} ><meshToonMaterial color={'darkorange'}/></mesh>
    </group>
  )
}

useGLTF.preload('/oblject-transformed.glb')
