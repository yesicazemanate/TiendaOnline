"use client"
import Image from "next/image";
import Navbar from "../Componentes/Navbar";
import Sudaderas from "../sudaderas/page";
import "./StylePage.css"
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
      <Navbar />

      <div className="Contenedor-principal-categorias">
      {/* VESTIDO*/}
        <div className="contenedor-cartas">
          <div className="card-categoria">
            <Image value={setverVestidos} onClick={handleVestido} src="/img/vestidos.jpg" width={90} height={60} />
          </div>
          <div className="card-categoria">
            <h1>Vestidos</h1>
          </div>
        </div>

        {/* SUDADERAS */}
        <div className="contenedor-cartas">
          <div className="card-categoria">
            <Image value={setverSudaderas} onClick={handleVerSudaderas} src="/img/sudaderas.jpg" width={90} height={60} />
          </div>
          <div className="card-categoria">
            <h1>Sudaderas</h1>
          </div>
        </div>

        {/* SHORTS */}
        <div className="contenedor-cartas">
          <div className="card-categoria">
            <Image value={setVerShorts} onClick={handleVerShorts} src="/img/shorts.jpg" width={90} height={60} />
          </div>
          <div className="card-categoria">
            <h1>Shorts</h1>
          </div>
        </div>
        
        {/* BLUSAS */}
        <div className="contenedor-cartas">
          <div className="card-categoria">
            <Image value={setverBlusas} onClick={handleVerBlusas} src="/img/blusas.jpg" width={90} height={60} />
          </div>
          <div className="card-categoria">
            <h1>Blusas</h1>
          </div>
        </div>

        {/* Pantalones */}
        <div className="contenedor-cartas">
          <div className="card-categoria">
            <Image value={setverPantalones} onClick={handleverPantalones} src="/img/pantalones.jpg" width={90} height={60} />
          </div>
          <div className="card-categoria">
            <h1>Vestidos</h1>
          </div>
        </div>

       
      <div class="ContenedorVerProductosYDetalle">
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
