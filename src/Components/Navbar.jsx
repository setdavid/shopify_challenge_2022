import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { apodRange, initialize } from "../js/utils";
import { batch, useDispatch } from "react-redux";
import { clearApodObjs, setDateRef } from "../redux/ducks/apod";

export const NAVBAR_HEIGHT = 60;

function Navbar() {
    let [toggleSearch, setToggleSearch] = useState();
    let [startDate, setStartDate] = useState("");
    let [endDate, setEndDate] = useState("");

    let dispatch = useDispatch();

    let navbarMainCSS = {
        height: `${NAVBAR_HEIGHT}px`
    }

    let navbarSearchCSS = {}

    if (toggleSearch) {
        navbarSearchCSS = {
            ...navbarSearchCSS,
            opacity: 1,
            maxHeight: "100vh"
        }
    } else {
        navbarSearchCSS = {
            ...navbarSearchCSS,
            opacity: 0,
            maxHeight: 0
        }
    }

    let handleSubmit = e => {
        e.preventDefault();

        let startDateArr = startDate.split("-").map(substring => parseInt(substring));
        let startDateObj = new Date(startDateArr[0], startDateArr[1] - 1, startDateArr[2]);
        batch(() => {
            dispatch(setDateRef(startDateObj));
            dispatch(clearApodObjs());
        });
        apodRange(startDate, endDate);

        setToggleSearch(false);
    }

    return (
        <header id="navbar" className="container-fluid">
            <div id="navbar-main" className="row" style={navbarMainCSS}>
                <div id="logo" className="col-6">
                    <button onClick={() => initialize()}>
                        <h1 style={{ fontSize: "1.75rem" }}>
                            Spacestagram
                        </h1>
                    </button>
                </div>
                <div id="search-toggle" className="col-6">
                    <button name="search_date_range" onClick={() => setToggleSearch(!toggleSearch)} >
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>
            <div id="navbar-search" className="row" style={navbarSearchCSS}>
                <div className="col-10">
                    <div style={{ marginBottom: "20px" }}>
                        Retrieve APODs from a date range:
                    </div>
                    <form style={{ height: "100%", width: "100%" }} onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-12 col-lg-4">
                                <label for="start_date">Start Date</label>
                                <input
                                    type="date"
                                    name="start_date"
                                    value={startDate}
                                    onChange={e => { setStartDate(e.target.value) }} />
                            </div>
                            <div className="col-12 col-lg-4">
                                <label for="end_date">End Date</label>
                                <input
                                    type="date"
                                    name="end_date"
                                    value={endDate}
                                    onChange={e => { setEndDate(e.target.value) }} />
                            </div>
                            <div id="navbar-search-enter" className="col-12 col-lg-4">
                                <button type="submit">Enter</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
