import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <h1>D2</h1>
            <section className='opciones'>
                <Link to={'/'}>Home</Link>
                <Link to={'/productos'}>Productos</Link>
            </section>
        </div>
    );
};

export default Header;