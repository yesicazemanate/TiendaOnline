import CardProductos from "../Componentes/CardProductos/CardProductos";
import Detailvista from "../detalle/page";
import "../vestidos/StyleVestidos.css"
import { useState } from "react";
export default function Pantalones() {
  const [verdetallePantalones, setverdetallePantalones] = useState('pantalones')

  const handleverDetalle = () => {
    setverdetallePantalones(verdetallePantalones==='pantalones'? 'detalle': 'detalle')
  }

  return (
    <div class="ContenedorDedetalleYvestidosGeneral">
      <div class="ContenedorPrincipalCartas">
    <CardProductos titulo="Pantalones" imagen="/img/pantalones.jpg" onClick={handleverDetalle}/>
    <CardProductos titulo="Pantalon" imagen="/img/pantalones.jpg"onClick={handleverDetalle} />
    <CardProductos titulo="Pantalones" imagen="/img/pantalones.jpg"/>
    <CardProductos titulo="Pantalones" imagen="/img/pantalones.jpg"/>
    <CardProductos titulo="Pantalones" imagen="/img/pantalones.jpg"/>
    <CardProductos titulo="Pantalones" imagen="/img/pantalones.jpg"/>
      </div>
      <div class="ContenedorDetalle">
      {
        verdetallePantalones==='detalle' && <Detailvista
        precio="30.000"
      nombre="PANTALONES"
      descripcion="Echas en Cartegena de Indias, diseño unico, ultimas unidades a la venta"
      imagenn="/img/pantalones.jpg"
        />
      }
      </div>
    </div>
  )
}
