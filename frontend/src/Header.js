import React from 'react';

//Receber como props ou desestruturado {title, etc}
function Header(props){
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );
}

export default Header;