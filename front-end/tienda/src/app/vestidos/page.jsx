"use client"
import CardProductos from "../Componentes/CardProductos/CardProductos"
import Detailvista from "../detalle/page";
import "./StyleVestidos.css"
import { useState } from "react"
export default function Vestidos() {
  const [verDetailVestidos,setverDetailVestidos] = useState('vestidos')
  
  const handleverDetalleVestidos =() => {
    setverDetailVestidos(verDetailVestidos === 'vestidos'? 'detalle': 'vestidos')
  }
   return (
    <>   

    <div class="ContenedorDedetalleYvestidosGeneral">
    <div class="ContenedorPrincipalCartas">
        
   <CardProductos 
   titulo=" (Name Vestido)" 
   imagen="/img/12484244.jpg" 
   onClick={handleverDetalleVestidos}/>
    <CardProductos titulo=" (Name Vestido)" imagen="/img/12484244.jpg"/>
    <CardProductos titulo=" (Name Vestido)" imagen="/img/12484244.jpg"/>
    <CardProductos titulo="(Name Vestido)" imagen="/img/12484244.jpg"/>
    <CardProductos titulo="(Name Vestido)" imagen="/img/12484244.jpg"/>
    <CardProductos titulo="(Name Vestido)" imagen="/img/12484244.jpg"/>
    <CardProductos titulo="(Name Vestido)" imagen="/img/12484244.jpg"/>
    <CardProductos titulo=" (Name Vestido)" imagen="/img/12484244.jpg"/>
   </div>

   <div class="ContenedorDetalle">
   {verDetailVestidos === 'detalle'&& <Detailvista
     imagenn="/img/Vestidos.jpg" 
     nombre="SHORT 1"
    descripcion="Short Blanco con conturon Negro echo En MEDELLIN"
     precio="20.000"/>}

    
</div>
    </div>
    </>

  )
}
