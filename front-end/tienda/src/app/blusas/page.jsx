import CardProductos from "../Componentes/CardProductos/CardProductos";
import Detailvista from "../detalle/page";
import "../vestidos/StyleVestidos.css"
import { useState } from "react";
export default function Blusas() {
  const [verdetalleBlusas, setverdetalleBlusas] = useState('blusas')

  const handleverDetalle = () => {
    setverdetalleBlusas(verdetalleBlusas==='blusas'? 'detalle': 'blusas')
  }

  return (
    <div class="ContenedorDedetalleYvestidosGeneral">
      <div class="ContenedorPrincipalCartas">
        <CardProductos titulo={Blusas} imagen="/img/blusa.png " onClick={handleverDetalle}/>
        <CardProductos titulo={Blusas} imagen="/img/blusa.png "/>
        <CardProductos titulo={Blusas} imagen="/img/blusa.png "/>
        <CardProductos titulo={Blusas} imagen="/img/blusa.png "/>
        <CardProductos titulo={Blusas} imagen="/img/blusa.png "/>
        <CardProductos titulo={Blusas} imagen="/img/blusa.png "/>
      </div>
      <div class="ContenedorDetalle">
        {verdetalleBlusas ==='detalle' && <Detailvista
        precio="30.000"
        nombre="BLUSAS"
        descripcion="Echas en Cartegena de Indias, diseño unico, ultimas unidades a la venta"
        imagenn="/img/blusa.png"
        />}
      </div>
    </div>
  )
}
