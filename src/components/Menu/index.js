import React from "react";
import { Link } from 'react-router-dom';
import Logo from "../../assets/img/Logo.png";
import '../Menu/Menu.css';
import Button from '../Button'

function Menu(){
    return ( 
    <nav className="Menu">
        <Link to="/">
        <img className='Logo' src={Logo} alt="MarjaFlix"/>
    
        </Link>
        
        <Button as={Link} className="ButtonLink" to="/cadastro/video">
            @marjadesordi
        </Button>
    </nav>
    ); 
}

export default Menu; 