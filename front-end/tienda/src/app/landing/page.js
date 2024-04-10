import "../landing/landing.css"
export default function Landing() {
    return (
        <>
            {/* <header>
                <a href="/landing">
                    <img src="logo.png" alt="FashionCode" />
                </a>
            </header> */}
            <main>
                <section className="hero">
                    <h1>FASHION CODE</h1>
                    <h2>ROPA ACCESORIOS</h2>
                    <a href="/vistaGeneral">COMPRAR AHORA</a>
                </section>
              
                <section className="arrivals">
                    <h2>&nbsp;&nbsp;&nbsp; NUEVOS ARRIBOS</h2>
                    <div className="productos">
                        <div className="producto">
                            <img src="https://i.pinimg.com/736x/1c/c1/56/1cc15628c2a63e292a4b92613747b591.jpg" alt="Gabardina marrón" />
                            <h3>Gabardina marrón</h3>
                            <p>Precio: $100</p>
                            <a href="#">COMPRAR</a>
                        </div>
                        <div className="producto">
                            <img src="https://i.pinimg.com/564x/28/c4/8b/28c48b76fa518095a44431f90079f825.jpg" alt="Bolso de piel" />
                            <h3>Bolso de piel</h3>
                            <p>Precio: $200</p>
                            <a href="#">COMPRAR</a>
                        </div>
                        <div className="producto">
                            <img src="https://i.pinimg.com/564x/16/b7/68/16b768309d3745c788b9cd23087b12f2.jpg" alt="Tacones altos" />
                            <h3>Tacones altos</h3>
                            <p>Precio: $150</p>
                            <a href="#">COMPRAR</a>
                        </div>
                    </div>
                </section>
                <section className="venta-estacional">
                    <h2>VENTA ESTACIONAL</h2>
                    <br />
                    <p>¡Aprovecha descuentos hasta 50%!</p>
                    <a href="#">VER OFERTAS</a>
                </section>
            </main>
            <footer className="venta-estacional">
                <p>&copy; 2024 FashionCode</p>
            </footer>
        </>
    );
}
