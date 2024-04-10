"use client"
import CardProductos from "../Componentes/CardProductos/CardProductos"
import axios from "axios";
import { useState,useEffect } from "react"
import Detailvista from "../detalle/page"
import "../vestidos/StyleVestidos.css"
export default function Shorts() {
  const [verDetalleShorts, setverdetalleSudaderas] = useState('shorts')
  // const handleverDetalle = () => {
  //   setverdetalleSudaderas(verDetalleShorts=== 'shorts'? 'detalle': 'shorts')
  // }
  const handleverDetalle = (productId) => {
    setverdetalleSudaderas(productId)
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
    <>    
     <h2 class="TextoCategoria">CATEGORIA DE SHORTS</h2>
    <div class="ContenedorDedetalleYvestidosGeneral">
      <div class="ContenedorPrincipalCartas">
        
        {
          Shorts.map((Shorts)=>(
            <CardProductos
            key={Shorts._id}
            titulo={Shorts.TipoShort}
            imagen={Shorts.Imagen}
            onClick={()=> handleverDetalle(Shorts._id)}
            />
          ))
        }
       
      </div>
      <div class="ContenedorDetalle">
        {
          Shorts.map((short)=>{
            if(verDetalleShorts === short._id){
              return(
                <Detailvista
                key={short._id}
                imagenn={short.Imagen}
                nombre={short.TipoShort}
                precio={short.precio}
                color={short.Color}
                talla={short.Talla}
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
