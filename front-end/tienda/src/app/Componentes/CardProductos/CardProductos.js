import Image from "next/image"
import "./StyleCardProductos.css"

export default function CardProductos({imagen, titulo, onClick}) {
  return (
   <>
    <div onClick={onClick} class= "contenedorDeCartasProducto">
        <div class="Imagen">
            <Image class="ImagenTamaño" src={imagen} width={150} height={150}></Image>
        </div>
        <div class="Texto">
            <h2>{titulo}</h2>
        </div>
    </div>
   </>
  )
}
