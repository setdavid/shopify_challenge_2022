import React from "react";
import { useSelector } from "react-redux";
import { getApodDaysAgo } from "../js/utils";
import ApodCard from "./ApodCard";

function MainContent() {
    let { apodObjs, dateRef } = useSelector(state => state.apod);
    console.log(apodObjs.length);
    console.log(apodObjs);

    let apodObjsArr = new Array(apodObjs.length);

    for (let i = apodObjs.length - 1; i >= 0; i--) {
        apodObjsArr[apodObjs.length - 1 - i] = <ApodCard key={i} apodObj={apodObjs[i]} />
    }

    return (
        <div id="main-content-fluid" className="container-fluid">
            <div id="main-content" className="container">
                <div className="row justify-content-center">
                    <div id="app-description" className="col-12 col-md-9">
                        <p style={{ marginBottom: "0" }}>
                            A simple web app to view NASA's Astronomy Picture of the Day (APOD).
                            The app will automatically load the recent week's set of APODs but users
                            can load more. The app comes with a search feature that allows users to
                            input a range of dates to load the set of APODs from the range of dates.
                            Created by David Setiawan.
                        </p>
                    </div>
                </div>
                <div id="apod-content" className="row">
                    <div className="col-12">
                        {apodObjsArr}
                    </div>
                </div>
                <div id="load-more-btn-wrapper" className="row">
                    <div className="col-12">
                        <button id="load-more-btn" onClick={e => {
                            e.preventDefault();
                            dateRef.setDate(dateRef.getDate() - 1);
                            getApodDaysAgo(dateRef, 6);
                        }}>Load More!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContent;
