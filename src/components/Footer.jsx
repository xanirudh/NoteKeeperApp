import React from "react";

function Footer(){
    const year = new Date().getFullYear;

    return(
        <footer>
            <p>Copyrights C {year} </p>
        </footer>
    );

}

export default Footer;