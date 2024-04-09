import CardProductos from "../Componentes/CardProductos/CardProductos"
import axios from "axios";
import { useState,useEffect } from "react"
import Detailvista from "../detalle/page"
import "../vestidos/StyleVestidos.css"
export default function Shorts() {
  const [verDetalleShorts, setverdetalleSudaderas] = useState('shorts')
  const handleverDetalle = () => {
    setverdetalleSudaderas(verDetalleShorts=== 'shorts'? 'detalle': 'shorts')
  }
  const [Shorts, setShorts] = useState([])
  useEffect(()=> {
    const consumo = async () =>{
      try{
        const respuesta = await axios.get('http://127.0.0.1:5000/short/get ') 
        const data = respuesta.data
        setShorts(data)
      }
      catch(error){
        console.log(error)
      }
    }
    consumo();
  },[])
  return (
    <div class="ContenedorDedetalleYvestidosGeneral">
      <div class="ContenedorPrincipalCartas">
        
        {
          Shorts.map((short)=>(
            <CardProductos
            key={short}
            titulo={short.TipoShort}
            imagen={short.Imagen}
            onClick={handleverDetalle}
            />
          ))
        }
       
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
