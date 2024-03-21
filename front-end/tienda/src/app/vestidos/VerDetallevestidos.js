import "../vistaGeneral/StylePage.css"
import CardProductos from "../Componentes/CardProductos"
import { useState } from "react"
import Detailvista from "../detalle/page"
import "./index.css"
export default function VerDetallevestidos() {
    const [verDetailVestidos,setverDetailVestidos] = useState('vestidos')
  const handleverDetalleVestidos =() => {
    setverDetailVestidos(verDetailVestidos==='vestidos'? 'detalle': 'vestidos')
  }
  return (
    <div class="vestidos">
    <div class="vestido1">
      <CardProductos titulo=" (Name Vestido)" imagen="/img/12484244.jpg"/>
     <div value={setverDetailVestidos} onClick={handleverDetalleVestidos} >
        Ver Detalle
     </div>
     </div>
     <div class="detalle">
     {verDetailVestidos === 'detalle'&& <Detailvista  imagenn="/img/shorts.jpg" nombre="Short1"
          descripcion="Short Blanco con conturon Negro echo En MEDELLIN"
          precio="20.000"/>}
     </div>
   
    </div>
    
  )
}
