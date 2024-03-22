import CardProductos from "../Componentes/CardProductos/CardProductos"
import { useState } from "react"
import Detailvista from "../detalle/page"
import "../vestidos/StyleVestidos.css"
export default function Shorts() {
  const [verDetalleShorts, setverdetalleSudaderas] = useState('shorts')
  const handleverDetalle = () => {
    setverdetalleSudaderas(verDetalleShorts=== 'shorts'? 'detalle': 'shorts')
  }
  return (
    <div class="ContenedorDedetalleYvestidosGeneral">
      <div class="ContenedorPrincipalCartas">
        <CardProductos titulo="Shorts" imagen="/img/shorts.jpg" onClick={handleverDetalle}/>
        <CardProductos titulo={Shorts} imagen="/img/shorts.jpg"/>
        <CardProductos titulo={Shorts} imagen="/img/shorts.jpg"/>
        <CardProductos titulo={Shorts} imagen="/img/shorts.jpg"/>
        <CardProductos titulo={Shorts} imagen="/img/shorts.jpg"/>
        <CardProductos titulo={Shorts} imagen="/img/shorts.jpg"/>
        <CardProductos titulo={Shorts} imagen="/img/shorts.jpg"/>
        <CardProductos titulo={Shorts} imagen="/img/shorts.jpg"/>
      </div>
      <div class="ContenedorDetalle">
        {verDetalleShorts === 'detalle' && <Detailvista
        precio="30.000"
        nombre="SHORTS"
        descripcion="Echas en Cartegena de Indias, diseño unico, ultimas unidades a la venta"
        imagenn="/img/shorts.jpg"/>}
      </div>
    </div>
  )
}
