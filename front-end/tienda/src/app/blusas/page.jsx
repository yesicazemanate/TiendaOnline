"use client"
import CardProductos from "../Componentes/CardProductos/CardProductos";
import Detailvista from "../detalle/page";
import "../vestidos/StyleVestidos.css"
import axios from "axios";
import { useState,useEffect } from "react";
export default function Blusas() {
  const [verdetalleBlusas, setverdetalleBlusas] = useState('blusas')
  // const handleverDetalle = () => {
  //   setverdetalleBlusas(verdetalleBlusas==='blusas'? 'detalle': 'blusas')
  // }
  const handleverDetalle = (productoPorId) =>{
    setverdetalleBlusas(productoPorId)
  }
  //Consumo Api
  const [Blusas,setBlusas]= useState([])
  useEffect(()=>{
    const consumo = async () => {
      try{
      const respuesta = await axios.get('http://127.0.0.1:5000/blusa/get')
      const data = respuesta.data
      setBlusas(data)
      }
      catch(error){
        console.log(error)
      }
    }
    consumo();
  },[])
  console.log(Blusas)
  return (
    <div class="ContenedorDedetalleYvestidosGeneral">
      <div class="ContenedorPrincipalCartas">
        {
          Blusas.map((Blusas)=>(
            <CardProductos
            key={Blusas._id}
            titulo={Blusas.TipoBlusa}
            imagen={Blusas.Imagen}
            onClick={()=>handleverDetalle(Blusas._id)}
            />
          ))
        }
      </div>
      <div class="ContenedorDetalle">
        {
          Blusas.map((blusasById)=>{
            if(verdetalleBlusas === blusasById._id){
              return(
                <Detailvista
                key={blusasById._id}
                imagenn={blusasById.Imagen}
                nombre={blusasById.TipoBlusa}
                precio={blusasById.precio}
                color={blusasById.Color}
                talla={blusasById.Talla}
                />
              )
            }
          })
        }
      </div>
    </div>
  )
}
