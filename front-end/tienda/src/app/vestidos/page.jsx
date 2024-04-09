"use client"
import axios from "axios";
import CardProductos from "../Componentes/CardProductos/CardProductos"
import Detailvista from "../detalle/page";
import "./StyleVestidos.css"
import { useState,useEffect } from "react"
export default function Vestidos() {
  const [verDetailVestidos,setverDetailVestidos] = useState('vestidos')
  
  // const handleverDetalleVestidos =() => {
  //   setverDetailVestidos(verDetailVestidos === 'vestidos'? 'detalle': 'vestidos')
  //   //setverDetailVestidos(productoPorId)
  // }
  const handleverDetalleVestidos = (productId) => {
    setverDetailVestidos(productId);
  };
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
  console.log(Vestidos.Imagen)
   return (
    <>   

    <div class="ContenedorDedetalleYvestidosGeneral">
   <div class="ContenedorPrincipalCartas">
        
   
    {
      Vestidos.map((Vestidos)=>(
        <CardProductos
        key={Vestidos._id}
        titulo={Vestidos.TipoVestido}
        imagen={Vestidos.Imagen}
        onClick={() => handleverDetalleVestidos(Vestidos._id)}
        />
      ))
    }
  </div>

   <div class="ContenedorDetalle">
     {
      Vestidos.map((vestido)=>{
        if(verDetailVestidos === vestido._id){
          return(
            <Detailvista
            key={vestido._id}
            imagenn={vestido.Imagen} 
            nombre={vestido.TipoVestido}
            precio={vestido.Precio}
            color={vestido.Color}
            talla={vestido.Talla}
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
