import Image from "next/image"
import "./Style.css"
export default function CardProductos({imagen, titulo}) {
  return (
   <>
    <div class= "contenedorDeCartasProducto">
        
        <div>
            <Image src={imagen} width={100} height={100}></Image>
        </div>
        <div>
            <h2>{titulo}</h2>
        </div>
        
    </div>
   </>
  )
}
