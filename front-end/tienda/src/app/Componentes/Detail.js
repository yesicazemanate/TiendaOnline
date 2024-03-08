import Image from "next/image"
export default function Detail({imagen,descripcion, nombre, precio}) {
  return (
    <div>
      <div>
    <Image src={imagen} />
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M9 12h6" /><path d="M12 9v6" /></svg>
      </div>tallas de ropa
      <div>
        <span>{nombre}</span>
        <span> $ {precio}</span>
      </div>
      <div>
        <span>{descripcion}</span>
      </div>
      <div>
        <span>Tallas</span>
        <div>
        <button>XS</button>
        <button>S</button>
        <button>M</button>
        </div>
      </div>

    </div>
  )
}
