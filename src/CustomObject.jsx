import * as THREE from 'three'
import { useMemo, useRef, useEffect } from 'react'
export default function CustomObject( {triCount} ) {

    const geometryRef = useRef()
   
    const verticiesCount = triCount * 3
    //

        
    const positions = useMemo(() =>
    {
        const positions = new Float32Array(verticiesCount*3)

        for(let i = 0; i < verticiesCount *3; i++)
            positions[i] = (Math.random() - 0.5) * 3
        return positions
    }, [verticiesCount])
    useEffect(()=>{
        geometryRef.current.computeVertexNormals()
    }, [])

    return <mesh>
        <bufferGeometry ref={ geometryRef }> 
            <bufferAttribute
                attach="attributes-position" 
                count={ verticiesCount }
                itemSize={ 3 }
                array={ positions }
            />
        </bufferGeometry>
        <meshStandardMaterial color="red" side={THREE.DoubleSide}/>
    </mesh>
}
CustomObject.defaultProps = {
    triCount: 10
  };