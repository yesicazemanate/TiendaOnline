import Image from "next/image"

export default function CardProductos({imagen, titulo}) {
  return (
   <>
    <div>
        
        <div>
            <Image src={imagen}></Image>
        </div>
        <div>
            <h2>{titulo}</h2>
        </div>
        
    </div>
   </>
  )
}
