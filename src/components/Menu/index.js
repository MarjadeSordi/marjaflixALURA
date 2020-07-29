import React from "react";
import Logo from "../../assets/img/Logo.png";
import '../Menu/Menu.css';
import Button from '../Button'

function Menu(){
    return ( 
    <nav className="Menu">
        <a href="/">
        <img className='Logo' src={Logo} alt="MarjaFlix"/>
    
        </a>
        
        <Button as='a' className="ButtonLink" href="/">
            @marjadesordi
        </Button>
    </nav>
    ); 
}

export default Menu; 