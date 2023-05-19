import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="homeFondo">
            <section className="contenido">
                <h1>Bienvenido a D2</h1>
                <Link to={'/productos'}> <button>Productos</button> </Link>
                <h4>
                    D2 tu almacen de confianza, encuentra tus productos a los mejores precios (creo)
                </h4>
            </section>
            
        </div>
    );
};

export default Home;