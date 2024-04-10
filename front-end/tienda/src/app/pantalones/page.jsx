import CardProductos from "../Componentes/CardProductos/CardProductos";
import Detailvista from "../detalle/page";
import "../vestidos/StyleVestidos.css"
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
export default function Pantalones() {
  const [verdetallePantalones, setverdetallePantalones] = useState('pantalones')
  const handleverDetalle = (productId) => {
    setverdetallePantalones(productId)
  }
  // const handleverDetalle = () => {
  //   setverdetallePantalones(verdetallePantalones==='pantalones'? 'detalle': 'detalle')
  // }
  const [Pantalones, setPantalones] = useState([ ]);

  useEffect(() => {
    const consumo = async () => {
      try{
        const respuesta = await axios.get('http://127.0.0.1:5000/pantalon/get')
        const data = respuesta.data
        setPantalones(data)
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
      {Pantalones.map((Pantalones) => (
          <CardProductos
            key={Pantalones._id}
            titulo={Pantalones.Precio}
            imagen={Pantalones.Imagen}
            onClick={() => handleverDetalle(Pantalones._id)} 
          />
        ))}
   
     </div> 
      <div class="ContenedorDetalle">
      {
        Pantalones.map((PantalonId)=>{
          if(verdetallePantalones === PantalonId._id){
            return(
              <Detailvista
              key={PantalonId._id}
              imagenn={PantalonId.Imagen}
              nombre={PantalonId.TipoPantalon}
              precio={PantalonId.precio}
              color={PantalonId.Color}
              talla={PantalonId.Talla}
              />
            )
          }
        })
      }
      </div>
    </div>
  )
}
