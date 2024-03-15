import Image from "next/image"
import "./Style.css"

export default function CardProductos({imagen, titulo}) {
  return (
   <>
    <div class= "contenedorDeCartasProducto">
        <div class="Imagen">
            <Image src={imagen} width={150} height={150}></Image>
        </div>
        <div class="Texto">
            <h2>{titulo}</h2>
        </div>
    </div>
   </>
  )
}
