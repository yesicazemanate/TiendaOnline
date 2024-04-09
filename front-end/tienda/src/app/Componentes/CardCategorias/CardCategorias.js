
import Image from "next/image"
import "./StyleCategorias.css"


export default function CardCategorias({ title, image }) {
    return (
        <>
            <div className="contenedor-cartas">

                <div className="card-categorias">
                    <Image class="ImagenCategoria" src={image} width={90} height={60} />
                </div>

                <div className="card-categoria">
                    <h1 className="textoCategoria">{title}</h1>
                </div>

            </div>

            


        </>
    )
}