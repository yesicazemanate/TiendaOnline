import Navbar from "./Componentes/Navbar";
import "./globals.css"
import CardProductos from "./Componentes/CardProductos";
export default function Home() {
  return (
  <>
   <Navbar/>
   <CardProductos
   titulo="Stefa" image="./hugs/sfs"/>
  </>
  );
}
