import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { apodRange } from "../js/utils";

export const NAVBAR_HEIGHT = 60;

function Navbar() {
    let [toggleSearch, setToggleSearch] = useState();
    let [startDate, setStartDate] = useState("");
    let [endDate, setEndDate] = useState("");

    let navbarMainCSS = {
        height: `${NAVBAR_HEIGHT}px`
    }

    let navbarSearchCSS = {
        maxHeight: `${toggleSearch ? "100%" : "0px"}`
    }

    let handleSubmit = e => {
        e.preventDefault();
        apodRange(true, startDate, endDate);
        setToggleSearch(false);
        setStartDate("");
        setEndDate("");
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
                    <div style={{ marginBottom: "20px" }}>
                        Retrieve APODs from a date range:
                    </div>
                    <form style={{ height: "100%", width: "100%" }} onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-12 col-lg-4">
                                <label>Start Date</label>
                                <input
                                    type="date"
                                    name="start_date"
                                    onChange={e => { setStartDate(e.target.value) }} />
                            </div>
                            <div className="col-12 col-lg-4">
                                <label>End Date</label>
                                <input
                                    type="date"
                                    name="end_date"
                                    onChange={e => { setEndDate(e.target.value) }} />
                            </div>
                            <div className="col-12 col-lg-4">
                                <button>Enter</button>
                            </div>
                        </div>
                    </form>
                </div> : ""}
            </div>
        </div>
    );
}

export default Navbar;
