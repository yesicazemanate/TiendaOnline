import Navbar from "./Componentes/Navbar";
import "./globals.css"
import"./StylePage.css"
import CardProductos from "./Componentes/CardProductos";
export default function Home() {
  return (
  <>
   <Navbar/>


   <div class="ContenedorPrincipalCartas">
   <CardProductos titulo=" (Name Vestido)" imagen="/img/12484244.jpg"/>
    <CardProductos titulo=" (Name Vestido)" imagen="/img/12484244.jpg"/>
    <CardProductos titulo=" (Name Vestido)" imagen="/img/12484244.jpg"/>
    <CardProductos titulo="(Name Vestido)" imagen="/img/12484244.jpg"/>
    <CardProductos titulo="(Name Vestido)" imagen="/img/12484244.jpg"/>
    <CardProductos titulo="(Name Vestido)" imagen="/img/12484244.jpg"/>
    <CardProductos titulo="(Name Vestido)" imagen="/img/12484244.jpg"/>
    <CardProductos titulo=" (Name Vestido)" imagen="/img/12484244.jpg"/>
   </div>
  </>
  );
}
