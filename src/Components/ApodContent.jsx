import React from "react";
import ApodCard from "./ApodCard";

function ApodContent() {
    return (
        <div id="apod-content" className="row">
            <div className="col-12">
                <ApodCard />
            </div>
        </div>
    );
}

export default ApodContent;
