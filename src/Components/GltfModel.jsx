import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { whole } from "../valtio"

import { Color } from 'three';
import { useFrame } from '@react-three/fiber';


export default function Model(props) {
  const { nodes, materials } = useGLTF('/customShoes.glb');
  const materialRef = useRef();

  useFrame(() => {
    if(materialRef.current){
      materialRef.current.material.color = new Color(whole.currentColor)
    }
  })

  // useEffect(() => {
  //   whole.currentColor = '#ffffff'
  // },[whole.current])
  return (
    <group {...props} dispose={null}
    onPointerDown={(e) => {
        e.stopPropagation();
        whole.current = e.object.material.name;
        materialRef.current = e.object;
    }}
>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['rtfkt_aj1006_05-High_0'].geometry}
        material={materials['05-High']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['rtfkt_aj1007_01-Sole_0'].geometry}
        material={materials['01-Sole']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['rtfkt_aj1007_01-Sole_0001'].geometry}
        material={materials['01-Sole']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['rtfkt_aj1008_02-Mid_0'].geometry}
        material={materials['02-Mid']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['rtfkt_aj1009_04-One_0'].geometry}
        material={materials['04-One']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['rtfkt_aj1010_03-Top_0'].geometry}
        material={materials['03-Top']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['rtfkt_aj1011_06-Side_0'].geometry}
        material={materials.material_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['rtfkt_aj1011_06-Side_0001'].geometry}
        material={materials.material_0}
      />
    </group>
  )
}

useGLTF.preload('/customShoes.glb')
