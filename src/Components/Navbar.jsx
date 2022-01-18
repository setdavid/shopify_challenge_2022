import React from "react";

export const NAVBAR_HEIGHT = 60;

function Navbar() {
    let navbarCSS = {
        height: `${NAVBAR_HEIGHT}px`
    }

    return (
        <div id="navbar" className="container-fluid" style={navbarCSS}>
            <div className="row full-height">
                <div id="logo" className="col-6">
                    <h3>
                        Spacestagram
                    </h3>
                </div>
                <div id="search-toggle" className="col-6">
                    symbol
                </div>
            </div>
        </div>
    );
}

export default Navbar;
