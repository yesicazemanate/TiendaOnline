import Navbar from "./Componentes/Navbar";
import "./globals.css"
import CardProductos from "./Componentes/CardProductos";
export default function Home() {
  return (
  <>
   <Navbar/>
   <CardProductos titulo="Vestido (Name Vestido)" imagen="/img/12484244.jpg"/>
  </>
  );
}
