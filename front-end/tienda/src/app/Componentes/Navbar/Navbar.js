import Image from "next/image"
import { useEffect } from 'react';
import "./navbar.css"
export default function Navbar() {

  useEffect(() => {
    let lastScrollTop = 0;

    function onScroll() {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScroll > lastScrollTop) {
        // Desplazamiento hacia abajo
        document.querySelector('nav').classList.add('nav-up');
      } else {
        // Desplazamiento hacia arriba
        document.querySelector('nav').classList.remove('nav-up');
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para navegadores móviles
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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

            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 17h-11v-14h-2" />
              <path d="M6 5l14 1l-1 7h-13" />
            </svg>
          </a>
          <a href="#">
            <image src="icono-usuario.png" alt="Usuario" />
          </a>
        </div>
      </nav>
    </>
  );
}
