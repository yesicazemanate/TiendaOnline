import Navbar from "./Componentes/Navbar";
import "./globals.css"
import"./StylePage.css"
import CardProductos from "./Componentes/CardProductos";
import CardCategorias from "./Componentes/CardCategorias";
export default function Home() {
  return (
  <>
      <Navbar />
      
      <div className="Contenedor-principal-categorias">
        <CardCategorias
          title="Vestidos" image="/img/vestidos.jpg" />
        <CardCategorias title="Sudaderas" image="/img/sudaderas.jpg" />
        <CardCategorias title="Shorts" image="/img/shorts.jpg" />
        <CardCategorias title="Blusas" image="/img/blusas.jpg" />
        <CardCategorias title="Pantalones" image="/img/pantalones.jpg" />
      </div>


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
