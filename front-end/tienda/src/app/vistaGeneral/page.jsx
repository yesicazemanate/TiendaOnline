"use client"
import Navbar from "../Componentes/Navbar";
import Sudaderas from "../sudaderas/page";
import "./StylePage.css"
import Vestidos from "../vestidos/page";
import {useState} from "react";
import CardCategorias from "../Componentes/CardCategorias";
import Shorts from "../shorts/page";
import Blusas from "../blusas/page";
import Pantalones from "../pantalones/page";

import Detail from "../Componentes/Detail";
export default function Home() {
  const [verVestidos, setverVestidos] = useState('vistaGeneral')

  const handleVestido = () =>{
    setverVestidos (verVestidos=== 'vistaGeneral'? 'vestidos' :'vistaGeneral')
  }

  const[verSudaderas, setverSudaderas] = useState("vistaGeneral")
  const handleVerSudaderas = () =>{
    setverSudaderas(verSudaderas=== 'vistaGeneral'? 'sudaderas' : 'vistaGeneral')
  }

  const [verShorts,setVerShorts] = useState('vistaGeneral')
  const handleVerShorts = () =>{
    setVerShorts (verShorts === 'vistaGeneral'? "shorts": "vistaGeneral")
  }

  const [verBlusas,setverBlusas]= useState('vistaGeneral');
  const handleVerBlusas = () =>{
    setverBlusas(verBlusas === 'vistaGeneral'? 'blusas': 'vistaGeneral');
  }

  const [verPantalones,setverPantalones] = useState('vistaGeneral')
  const handleverPantalones = ()=>{
    setverPantalones(verPantalones === 'vistaGeneral'? 'pantalones': 'vistaGeneral');
  }
  return (
  <>
      <Navbar />
      
      <div className="Contenedor-principal-categorias">
      <div class="Vestidos">
        <CardCategorias           title="Vestidos" image="/img/vestidos.jpg" >
        </CardCategorias>
        <svg  value={setverVestidos} onClick={handleVestido} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M12 18c-.328 0 -.652 -.017 -.97 -.05c-3.172 -.332 -5.85 -2.315 -8.03 -5.95c2.4 -4 5.4 -6 9 -6c3.465 0 6.374 1.853 8.727 5.558" /><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M20.2 20.2l1.8 1.8" /></svg>
        </div>
        <div class="Vestidos">
        <CardCategorias title="Sudaderas" image="/img/sudaderas.jpg" />
        <svg value={setverSudaderas} onClick={handleVerSudaderas} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M12 18c-.328 0 -.652 -.017 -.97 -.05c-3.172 -.332 -5.85 -2.315 -8.03 -5.95c2.4 -4 5.4 -6 9 -6c3.465 0 6.374 1.853 8.727 5.558" /><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M20.2 20.2l1.8 1.8" /></svg>
        </div>

        <div class="Vestidos">
        <CardCategorias title="Shorts" image="/img/shorts.jpg" />
        <svg values={setVerShorts} onClick={handleVerShorts} set xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M12 18c-.328 0 -.652 -.017 -.97 -.05c-3.172 -.332 -5.85 -2.315 -8.03 -5.95c2.4 -4 5.4 -6 9 -6c3.465 0 6.374 1.853 8.727 5.558" /><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M20.2 20.2l1.8 1.8" /></svg>
        </div>

        <div class="Vestidos" >
        <CardCategorias title="Blusas" image="/img/blusas.jpg" />
        <svg values={setverBlusas} onClick={handleVerBlusas} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M12 18c-.328 0 -.652 -.017 -.97 -.05c-3.172 -.332 -5.85 -2.315 -8.03 -5.95c2.4 -4 5.4 -6 9 -6c3.465 0 6.374 1.853 8.727 5.558" /><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M20.2 20.2l1.8 1.8" /></svg>
        </div>

        <div class="Vestidos">
        <CardCategorias title="Pantalones" image="/img/pantalones.jpg" />
        <svg value={setverPantalones} onClick={handleverPantalones} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M12 18c-.328 0 -.652 -.017 -.97 -.05c-3.172 -.332 -5.85 -2.315 -8.03 -5.95c2.4 -4 5.4 -6 9 -6c3.465 0 6.374 1.853 8.727 5.558" /><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M20.2 20.2l1.8 1.8" /></svg>
        </div>
      </div>
    <div>
      {verVestidos === 'vestidos'&& <Vestidos/>}
      {verSudaderas == 'sudaderas'&& <Sudaderas/>}
      {verShorts === 'shorts'&& <Shorts/>}
      {verBlusas === 'blusas' && <Blusas />}
      {verPantalones === 'pantalones' && <Pantalones/>}
      <Detail imagenn="/img/shorts.jpg" nombre="Short1" />
      </div>

  </>
  );
}
