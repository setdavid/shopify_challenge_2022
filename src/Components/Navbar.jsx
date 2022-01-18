import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const NAVBAR_HEIGHT = 60;

function Navbar() {
    let [toggleSearch, setToggleSearch] = useState();

    let navbarMainCSS = {
        height: `${NAVBAR_HEIGHT}px`
    }

    let navbarSearchCSS = {
        maxHeight: `${toggleSearch ? "100px" : "0px"}`
    }

    return (
        <div id="navbar" className="container-fluid">
            <div id="navbar-main" className="row" style={navbarMainCSS}>
                <div id="logo" className="col-6">
                    <h3>
                        Spacestagram
                    </h3>
                </div>
                <div id="search-toggle" className="col-6">
                    <FontAwesomeIcon icon={faSearch} className="clickable" onClick={() => setToggleSearch(!toggleSearch)} />
                </div>
            </div>
            <div id="navbar-search" className="row" style={navbarSearchCSS}>
                {toggleSearch ? <div className="col-12">
                    hello
                </div> : ""}
            </div>
        </div>
    );
}

export default Navbar;
