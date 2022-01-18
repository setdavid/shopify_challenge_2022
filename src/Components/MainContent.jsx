import React from "react";
import ApodContent from "./ApodContent";

function MainContent() {
    return (
        <div id="main-content-fluid" className="container-fluid">
            <div id="main-content" className="container full-height">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-9" style={{background: "red", height: "500px"}}>
                        hello people
                    </div>
                </div>
                <ApodContent />
            </div>
        </div>
    );
}

export default MainContent;
