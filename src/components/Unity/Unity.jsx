import { React, useEffect, useState ,Suspense } from "react";
import { ContactShadows, Environment, useGLTF } from "@react-three/drei"
import { OrbitControls } from '@react-three/drei/core/OrbitControls' ;
import { Hands,VRCanvas } from '@react-three/xr' ;
import "./Unity.scss";



function Models(props) {
const {scene} = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/left-hand-white-webxr-tracking-ready/model.gltf')
return <primitive object={scene} {...props} />
}

export default function Unity() {
  return (
    <div >
<VRCanvas className="Unity" camera={{ position: [0, 94, 0], fov: 50 }}>
<OrbitControls enableZoom={false} enablePan={false}  />
<ambientLight/>
<pointLight position={[10,10,10]} />
<Suspense fallback={null} >
  <Models position={[0,1.2,-0.5]} />
  </Suspense>
  <Hands/>
    </VRCanvas>

    </div>

  
    
  );
}
