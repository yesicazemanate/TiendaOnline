"use client"
import Image from "next/image";
import Navbar from "../Componentes/Navbar/Navbar";
import Sudaderas from "../sudaderas/page";
import "./StyleGeneral.css"
import Vestidos from "../vestidos/page";
import { useState } from "react";
import Shorts from "../shorts/page";
import Blusas from "../blusas/page";
import Pantalones from "../pantalones/page";

export default function Home() {
  const [verVestidos, setverVestidos] = useState('vistaGeneral')

  const handleVestido = () => {
    setverVestidos(verVestidos === 'vistaGeneral' ? 'vestidos' : 'vistaGeneral')
  }

  const [verSudaderas, setverSudaderas] = useState("vistaGeneral")
  const handleVerSudaderas = () => {
    setverSudaderas(verSudaderas === 'vistaGeneral' ? 'sudaderas' : 'vistaGeneral')
  }

  const [verShorts, setVerShorts] = useState('vistaGeneral')
  const handleVerShorts = () => {
    setVerShorts(verShorts === 'vistaGeneral' ? "shorts" : "vistaGeneral")
  }

  const [verBlusas, setverBlusas] = useState('vistaGeneral');
  const handleVerBlusas = () => {
    setverBlusas(verBlusas === 'vistaGeneral' ? 'blusas' : 'vistaGeneral');
  }

  const [verPantalones, setverPantalones] = useState('vistaGeneral')
  const handleverPantalones = () => {
    setverPantalones(verPantalones === 'vistaGeneral' ? 'pantalones' : 'vistaGeneral');
  }
  return (
    <>
   

      <div className="PrincipalVistaGeneral">

      <Navbar />
        <div className="Contenedor-principal-categorias">
      {/* VESTIDO*/}
        <div className="contenedor-cartas">
          <div className="card-categorias">
            <Image className="ImagenCategoria" value={setverVestidos} onClick={handleVestido} src="/img/vestidos.jpg" width={90} height={60} alt="image" />
          </div>
          <div className="card-categoria">
            <h1 className="textoCategoria">Vestidos</h1>
          </div>
        </div>

        {/* SUDADERAS */}
        <div className="contenedor-cartas">
          <div className="card-categoria">
            <Image className="ImagenCategoria" value={setverSudaderas} onClick={handleVerSudaderas} src="/img/sudaderas.jpg" width={90} height={60} alt="image"/>
          </div>
          <div className="card-categoria">
            <h1 className="textoCategoria">Sudaderas</h1>
          </div>
        </div>

        {/* SHORTS */}
        <div className="contenedor-cartas">
          <div className="card-categoria">
            <Image className="ImagenCategoria" value={setVerShorts} onClick={handleVerShorts} src="/img/shorts.jpg" width={90} height={60} alt="image"/>
          </div>
          <div className="card-categoria">
            <h1 className="textoCategoria"> Shorts</h1>
          </div>
        </div>
        
        {/* BLUSAS */}
        <div className="contenedor-cartas">
          <div className="card-categoria">
            <Image className="ImagenCategoria" value={setverBlusas} onClick={handleVerBlusas} src="/img/blusas.jpg" width={90} height={60} alt="image" />
          </div>
          <div className="card-categoria">
            <h1 className="textoCategoria">Blusas</h1>
          </div>
        </div>

        {/* Pantalones */}
        <div className="contenedor-cartas">
          <div className="card-categoria">
            <Image className="ImagenCategoria" value={setverPantalones} onClick={handleverPantalones} src="/img/pantalones.jpg" width={90} height={60} alt="image"/>
          </div>
          <div className="card-categoria">
            <h1 className="textoCategoria">Pantalones</h1>
          </div>
        </div>
        </div>
       
      <div className="VerProductosEnVistaGeneral">
        {verVestidos === 'vestidos' && <Vestidos />}
        {verSudaderas == 'sudaderas' && <Sudaderas />}
        {verShorts === 'shorts' && <Shorts />}
        {verBlusas === 'blusas' && <Blusas />}
        {verPantalones === 'pantalones' && <Pantalones />}
        
      </div>
      </div>
    

    </>
  );
}
