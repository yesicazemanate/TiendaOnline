"use client"
import axios from "axios";

import"../vestidos/StyleVestidos.css"
import { useState,useEffect } from "react"
import Detailvista from "../detalle/page"
import CardProductos from "../Componentes/CardProductos/CardProductos"
export default function Sudaderas() {
  const [verdetalleSudaderas, setverdetalleSudaderas] = useState('sudaderas')

  // const handleverDetalleSudaderas = () => {
  //   setverdetalleSudaderas(verdetalleSudaderas=== 'sudaderas'? 'detalle': 'sudaderas')
  // }
  const handleVerDetalle = (productoById) =>{
    setverdetalleSudaderas(productoById)
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
    {Sudadera.map((Sudaderas) => (
            <CardProductos
              key={Sudaderas._id}
              titulo={Sudaderas.TipoSudadera}  
              imagen={Sudaderas.Imagen} 
              onClick={()=>handleVerDetalle(Sudaderas._id)}
            />
          ))}
    </div>
    <div class="ContenedorDetalle">
      {Sudadera.map((sudadera)=>{
        if(verdetalleSudaderas === sudadera._id){
          return(
            <Detailvista
            key={sudadera._id}
            imagenn={sudadera.Imagen}
            nombre={sudadera.TipoSudadera}
            precio={sudadera.precio}
            color={sudadera.Color}
            talla={sudadera.Talla}
            />
          )
        }
      })
      }
    </div>
    </div>
    </>
  )
}
