import React from "react";
import { useSelector } from "react-redux";
import { getApodDaysAgo } from "../js/utils";
import ApodCard from "./ApodCard";
import { APODS_STATUS_GOOD, APODS_STATUS_LOADING } from "../redux/ducks/apod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeteor } from "@fortawesome/free-solid-svg-icons";

function MainContent() {
    let { apodObjs, dateRef, apodsStatus, errMsg } = useSelector(state => state.apod);

    let bottomComp = <div />;
    if (apodsStatus === APODS_STATUS_GOOD) {
        bottomComp = <div id="load-more-btn-wrapper" className="row justify-content-center">
            <div className="col-12 col-md-6">
                <button id="load-more-btn" onClick={e => {
                    e.preventDefault();
                    dateRef.setDate(dateRef.getDate() - 1);
                    getApodDaysAgo(dateRef, 6);
                }}>Load More!</button>
            </div>
        </div>;
    } else if (apodsStatus === APODS_STATUS_LOADING) {
        bottomComp = <div className="row justify-content-center">
            <div className="col-12 col-md-6 loading-wrapper">
                <h4>
                    Loading...
                </h4>
                <FontAwesomeIcon icon={faMeteor} size="2x" className="loading" />
            </div>
        </div>;
    } else {
        bottomComp = <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center" style={{ color: "red" }}>
                {errMsg}
            </div>
        </div>;
    }

    return (
        <div id="main-content-fluid" className="container-fluid">
            <div id="main-content" className="container">
                <div className="row justify-content-center">
                    <div id="app-description" className="col-12 col-md-9">
                        <p style={{ marginBottom: "0" }}>
                            A simple web app to view NASA's Astronomy Picture of the Day (APOD).
                            The app will automatically load the recent week's set of APODs but users
                            can load more if desired. The app comes with a search feature that allows users to
                            input a range of dates to load the set of APODs from that range.
                            Created by David Setiawan.
                        </p>
                    </div>
                </div>
                <div id="apod-content" className="row">
                    <div className="col-12">
                        {apodObjs.map((apodObj, i) => <ApodCard key={i} apodObj={apodObj} />)}
                    </div>
                </div>
                {bottomComp}
            </div>
        </div>
    );
}

export default MainContent;
