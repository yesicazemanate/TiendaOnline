import Image from "next/image"
export default function Detailvista({imagenn,descripcion, nombre, precio}) {
  return (
    <div class="ContenedorDetalle">
      <div class="DetalleImagen">
        <Image class="ImagenDetalle" src={imagenn} width={150} height={150}/>
<svg xmlns="http://www.w3.org/2000/svg" class="MasDetalle" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M9 12h6" /><path d="M12 9v6" /></svg>
      </div>
      <div class="ContenedorTallas">
        <div class="textoTallas">Tallas disponibles</div>
        <div class="ContainerTallas">
        <span class="Talla"> S </span>
        <span class="Talla">XS</span>
        <span class="Talla">Xl</span>
        <span class="Talla">M</span>
        </div>
      </div>
      
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
