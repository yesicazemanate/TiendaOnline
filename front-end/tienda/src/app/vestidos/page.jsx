"use client"
import axios from "axios";
import CardProductos from "../Componentes/CardProductos/CardProductos"
import Detailvista from "../detalle/page";
import "./StyleVestidos.css"
import { useState,useEffect } from "react"
export default function Vestidos() {
  const [verDetailVestidos,setverDetailVestidos] = useState('vestidos')
  
  const handleverDetalleVestidos =() => {
    setverDetailVestidos(verDetailVestidos === 'vestidos'? 'detalle': 'vestidos')
  }
  
  //Consumo Api
  const [Vestidos, setVestidos] = useState([]);
  useEffect(()=>{
    const consumo = async()=>{
      try{
        const respuesta = await axios.get('http://127.0.0.1:5000/vestido/get')
        const data = respuesta.data
        setVestidos(data)
      }
      catch(error){
        console.log(error)
      }
    }
    consumo();
  },[])
  console.log(Vestidos)
   return (
    <>   

    <div className="ContenedorDedetalleYvestidosGeneral">
   <div className="ContenedorPrincipalCartas">
        
   
    {
      Vestidos.map((short)=>(
        <CardProductos
        key={short._id}
        titulo={short.TipoVestido}
        imagen={short.Imagen}
        onClick={handleverDetalleVestidos}
        />
      ))
    }
  </div>

   <div class="ContenedorDetalle">
   {verDetailVestidos === 'detalle'&& <Detailvista
     imagenn="/img/Vestidos.jpg" 
     nombre="SHORT 1"
    descripcion="Short Blanco con conturon Negro echo En MEDELLIN"
     precio="20.000"/>}

    
</div>
    </div>
    </>

  )
}
