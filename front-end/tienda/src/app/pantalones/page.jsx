import CardProductos from "../Componentes/CardProductos/CardProductos";
import Detailvista from "../detalle/page";
import "../vestidos/StyleVestidos.css"
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
export default function Pantalones() {
  const [verdetallePantalones, setverdetallePantalones] = useState('pantalones')

  const handleverDetalle = () => {
    setverdetallePantalones(verdetallePantalones==='pantalones'? 'detalle': 'detalle')
  }
  const [Pantalones, setPantalones] = useState([ ]);

  useEffect(() => {
    const consumo = async () => {
      try{
        const respuesta = await axios.get('http://127.0.0.1:5000/pantalon/get')
        const data = respuesta.data
        setPantalones(data.pantalon)
      }
      catch(error){
        console.log(error)
      }
    }
    consumo();
  }, []); 

  return (
    <div class="ContenedorDedetalleYvestidosGeneral">
      <div class="ContenedorPrincipalCartas">
      {Pantalones.map((pantalon, index) => (
          <CardProductos
            key={index}
            titulo={pantalon.TipoPantalon}
            imagen={pantalon.Image}
            onClick={() => handleverDetalle(pantalon.id)} // Suponiendo que pantalon tiene un id único
          />
        ))}
    <CardProductos titulo="Pantalones" imagen="/img/pantalones.jpg" onClick={handleverDetalle}/>
    {/*
    <CardProductos titulo="Pantalon" imagen="/img/pantalones.jpg"onClick={handleverDetalle} />
    <CardProductos titulo="Pantalones" imagen="/img/pantalones.jpg"/>
    <CardProductos titulo="Pantalones" imagen="/img/pantalones.jpg"/>
    <CardProductos titulo="Pantalones" imagen="/img/pantalones.jpg"/>
    <CardProductos titulo="Pantalones" imagen="/img/pantalones.jpg"/>
    */} 
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
