import Image from "next/image"
import "./StyleCardProductos.css"

export default function CardProductos({imagen, titulo, onClick}) {
  return (
   <>
    <div onClick={onClick} className= "contenedorDeCartasProducto">
        <div className="Imagen">
            <Image src={imagen} width={150} height={150} alt="producto"></Image>
        </div>
        <div class="Texto">
            <h2>{titulo}</h2>
        </div>
    </div>
   </>
  )
}
