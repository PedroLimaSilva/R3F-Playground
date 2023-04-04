/* eslint-disable */
import * as THREE from 'three'
import * as React from 'react'
import { Canvas } from '@react-three/fiber'
import { Experience } from './Experience'

export default function App() {
  return (
  <Canvas
    camera={{
      fov: 45,
      near: 0.1,
      far: 200,
    }}
  >
    <Experience />
  </Canvas>
  )
}
