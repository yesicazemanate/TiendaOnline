import CardProductos from "../Componentes/CardProductos"
// import Detailvista from "../detalle/page";
import VerDetallevestidos from "./VerDetallevestidos";
// import { useState } from "react"
export default function Vestidos() {
  // const [verDetailVestidos,setverDetailVestidos] = useState('vestidos')
  // const handleverDetalleVestidos =() => {
  //   setverDetailVestidos(verDetailVestidos==='vestidos'? 'detalle': 'vestidos')
  // }
   return (
    <>    <VerDetallevestidos/>
    <div class="ContenedorDedetalleYvestidosGeneral">
         <div class="ContenedorPrincipalCartas">
         
          <div>  
   <CardProductos titulo=" (Name Vestido)" imagen="/img/12484244.jpg">
   </CardProductos>
   <p >Darclick</p>
   </div>
    <CardProductos titulo=" (Name Vestido)" imagen="/img/12484244.jpg"/>
    <CardProductos titulo=" (Name Vestido)" imagen="/img/12484244.jpg"/>
    <CardProductos titulo="(Name Vestido)" imagen="/img/12484244.jpg"/>
    <CardProductos titulo="(Name Vestido)" imagen="/img/12484244.jpg"/>
    <CardProductos titulo="(Name Vestido)" imagen="/img/12484244.jpg"/>
    <CardProductos titulo="(Name Vestido)" imagen="/img/12484244.jpg"/>
    <CardProductos titulo=" (Name Vestido)" imagen="/img/12484244.jpg"/>
   </div>
   

    </div>
    </>

  )
}
