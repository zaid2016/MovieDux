import React from 'react';
import '../styles.css';

export default function Footer(){

    const currentYear = new Date().getFullYear();

    return(
        <footer className='footer'>
            <p classname='footer-text'>
            © {currentYear} Moviedux, All rights reserved.
            </p>
        </footer>
    );
}