import React from 'react';
import Header from './Header';
import info from "./El.json"


const Productos = () => {

    const productosR = info.productos

    return (
        <div>
            <Header/>
            <section className='productos'>
                <section className='contenidoProd'>
                    {
                        productosR.map((producto)=>(
                            <section className="card">
                                <img src={producto.imagen} alt="" className="imagen"/>
                                <section className="textos">
                                    <h2 className='nombre'>{producto.nombre}</h2>
                                    <h1>Precio: {producto.precio}</h1>
                                    <h1>Stock: {producto.stock}</h1>
                                    <h1>Proveedor: {producto.proveedor}</h1>
                                    <h1>Descripción: {producto.descripcion}</h1>
                                </section>
                            </section>
                        ))
                    }   
                    <img src="" alt="" />
                    <section className='info'>

                    </section>
                </section>
            </section>
        </div>
    );
};

export default Productos;