import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import CustomObject from './CustomObject.jsx'
import { InterpolateDiscrete } from 'three'
import { Html } from '@react-three/drei'


const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(

<Canvas shadows
dpr={ 1}
    gl={{
        antialias: true
        
        
    }}

    camera={{
        fov: 50,
        near: 0.1,
        far: 200,
        position: [0, 3, 12]
    }}
>
    <Experience />
    <Html></Html>
    
</Canvas>

)