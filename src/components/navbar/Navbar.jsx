import React from "react";
import "../../App.css"

const Dir = () => {

    return (
        <nav>
            <div className='options'>
                <a href="/home" className='hover-underline-animation'> Home </a>
                <a href="/english" className='hover-underline-animation'> Inglés </a>
                <a href="/spanish" className='hover-underline-animation'> Español </a>
            </div>
        </nav>
    );

};

export default Dir;