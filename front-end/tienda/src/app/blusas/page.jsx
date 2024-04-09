"use client"
import CardProductos from "../Componentes/CardProductos/CardProductos";
import Detailvista from "../detalle/page";
import "../vestidos/StyleVestidos.css"
import axios from "axios";
import { useState,useEffect } from "react";
export default function Blusas() {
  const [verdetalleBlusas, setverdetalleBlusas] = useState('blusas')

  const handleverDetalle = () => {
    setverdetalleBlusas(verdetalleBlusas==='blusas'? 'detalle': 'blusas')
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
  return (
    <div class="ContenedorDedetalleYvestidosGeneral">
      <div class="ContenedorPrincipalCartas">
        {
          Blusas.map((blusas)=>(
            <CardProductos
            key={blusas._id}
            titulo={blusas.TipoBlusa}
            imagen={blusas.Imagen}
            onClick={handleverDetalle}
            />
          ))
        }
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
