import { Html, OrbitControls, Text, Text3D, PivotControls, Float, Stage } from "@react-three/drei"
import { useFrame, extend, useThree } from "@react-three/fiber"
import { AmbientLight } from "three"
import CustomObject from "./CustomObject"
import { Model } from "./Oblject-transformed"
import { Apple } from "./Untitled-transformed"


export default function Experience()
{
    return <><Stage shadows="accumulative">
    <ambientLight intensity={0.8}/>
    <PivotControls
        anchor={ [-1, -0.1, 0]}
         depthTest={false}
         lineWidth={4}
         scale={ 75 }
         fixed={true}
         >
    <Text3D castShadow position={[-7, 3, 0]} font={'./Roboto.json'} >{`Try\nmoving\nyour\nmouse`}<meshStandardMaterial/></Text3D></PivotControls>
    <Float  rotationIntensity={1} floatingRange={[0, 1.7]}>
        
    <Model scale={5} rotation={[Math.PI*0.45, Math.PI*0.1, 0]}/></Float>
    <Apple position={[-8, -2, 1]} />
    <OrbitControls makeDefault/>
       </Stage>
    </>
}