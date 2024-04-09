import Image from "next/image"

import "./navbar.css"
export default function Navbar() {
  return (
    <>
      <nav>
        <div class="logo">
          <a href="/landing">
            <Image width={50} height={50} src="https://i.pinimg.com/564x/21/e9/2b/21e92b919fcff144c0c04fcc66cf5580.jpg" alt="FASHION CODE" />
          </a>
        </div>
        <ul>
          <li><a href="/landing">Inicio</a></li>
          <li><a href="/CardProductos">Productos</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
        <div class="iconos">
          <a href="#">

            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 17h-11v-14h-2" />
              <path d="M6 5l14 1l-1 7h-13" />
            </svg>
          </a>
          <a href="#">
            <Image width={50} height={50}  src="icono-usuario.png" alt="Usuario" />
          </a>
        </div>
      </nav>
    </>
  );
}
