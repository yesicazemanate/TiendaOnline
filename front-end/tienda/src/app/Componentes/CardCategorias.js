import Image from "next/image"
import "../Componentes/Style.css"


export default function CardCategorias({ title, image }) {
    return (
        <>
            <div className="contenedor-cartas">

                <div className="card-categoria">
                    <Image src={image} width={90} height={60} />
                </div>

                <div className="card-categoria">
                    <h1>{title}</h1>
                </div>

            </div>

            


        </>
    )
}