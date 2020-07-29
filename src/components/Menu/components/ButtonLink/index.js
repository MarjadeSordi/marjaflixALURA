import React from 'react'

function ButtonLink(props){
    console.log(props);
    return(
        <a href={props.href} className={props.className}>
            {props.children}
           @marjadesordi 
        </a>
    );
}

export default ButtonLink;