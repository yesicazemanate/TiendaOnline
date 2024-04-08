"use client"
import axios from "axios";

import"../vestidos/StyleVestidos.css"
import { useState,useEffect } from "react"
import Detailvista from "../detalle/page"
import CardProductos from "../Componentes/CardProductos/CardProductos"
export default function Sudaderas() {
  const [verdetalleSudaderas, setverdetalleSudaderas] = useState('sudaderas')

  const handleverDetalleSudaderas = () => {
    setverdetalleSudaderas(verdetalleSudaderas=== 'sudaderas'? 'detalle': 'sudaderas')
  }

  const [Sudadera, setSudadera] = useState([])
  useEffect(() => {
    const consumo = async () => {
      try {
        const respuesta = await axios.get('http://127.0.0.1:5000/sudadera/get');
        const data = respuesta.data;
        setSudadera(data); 
      } catch (error) {
        console.log(error);
      }
    };
    consumo();
  }, []);
  return (
    <>
    <div class="ContenedorDedetalleYvestidosGeneral">
        <div class="ContenedorPrincipalCartas">

   

    {Sudadera.map((sudadera) => (
            <CardProductos
              key={sudadera}
              titulo={sudadera.TipoSudadera}  
              imagen={sudadera.Imagen} 
              onClick={handleverDetalleSudaderas}
            />
          ))}
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
