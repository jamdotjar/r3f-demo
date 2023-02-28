/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 untitled-transformed.glb --shadows
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Apple(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/untitled-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Icosphere" castShadow receiveShadow geometry={nodes.Icosphere.geometry} material={materials['Material.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/untitled-transformed.glb')
