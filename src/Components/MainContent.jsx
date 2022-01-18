import React from "react";
import { useSelector } from "react-redux";
import ApodCard from "./ApodCard";

function MainContent() {
    let { apodObjs } = useSelector(state => state.apod);
    console.log(apodObjs.length);
    console.log(apodObjs);

    return (
        <div id="main-content-fluid" className="container-fluid">
            <div id="main-content" className="container full-height" style={{ paddingTop: "20px" }}>
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
                        {apodObjs.map((apodObj, i) => <ApodCard key={i} apodObj={apodObj} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContent;
