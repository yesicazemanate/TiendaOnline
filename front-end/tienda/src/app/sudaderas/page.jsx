"use client"
import"../vestidos/StyleVestidos.css"
import { useState } from "react"
import Detailvista from "../detalle/page"
import CardProductos from "../Componentes/CardProductos/CardProductos"
export default function Sudaderas() {
  const [verdetalleSudaderas, setverdetalleSudaderas] = useState('sudaderas')

  const handleverDetalleSudaderas = () => {
    setverdetalleSudaderas(verdetalleSudaderas=== 'sudaderas'? 'detalle': 'sudaderas')
  }
  return (
    <>
    <div class="ContenedorDedetalleYvestidosGeneral">
        <div class="ContenedorPrincipalCartas">

       <CardProductos 
       titulo=" (Name sudaderas)" 
       imagen="/img/sudaderas.jpg" 
       onClick={handleverDetalleSudaderas}/>
    <CardProductos titulo=" (Name sudaderas)" imagen="/img/sudaderas.jpg"/>
    <CardProductos titulo=" (Name sudaderas)" imagen="/img/sudaderas.jpg"/>
    <CardProductos titulo="(Name sudaderas)" imagen="/img/sudaderas.jpg"/>
    <CardProductos titulo="(Name sudaderas)" imagen="/img/sudaderas.jpg"/>
    <CardProductos titulo="(Name sudaderas)" imagen="/img/sudaderas.jpg"/>
    <CardProductos titulo="(Name sudaderas)" imagen="/img/sudaderas.jpg"/>
    </div>
    <div class="ContenedorDetalle">
      {verdetalleSudaderas === 'detalle' && <Detailvista 
      precio="30.000"
      nombre="SUDAERAS"
      descripcion="Echas en Cartegena de Indias, diseño unico, ultimas unidades a la venta"
      imagenn="/img/sudaderas.jpg"/>}
    </div>
    </div>
    </>
  )
}
