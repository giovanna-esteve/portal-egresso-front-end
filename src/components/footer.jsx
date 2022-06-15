import React from "react";


function Footer(){
    return (
        <footer className="text-center text-white " style={{backgroundColor: '#f1f1f1'}}>

            <div className="text-center text-dark p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                <small>
                    © 2020 Copyright:
                    <a className="text-dark" href="#/home">Portal Egresso</a>
                </small>
            </div>
        </footer>
    )
}


export default Footer;