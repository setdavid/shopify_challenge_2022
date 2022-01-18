import React from "react";

function ApodCard(props) {
    let { apodObj } = props;
    return (
        <div className="row justify-content-center">
            <div className="apod-card col-12 col-md-9">
                <div className="row apod-card-image">
                    <div className="col-12">
                        <img src={apodObj.hdurl} alt={apodObj.title} />
                    </div>
                </div>
                <div className="row apod-card-description">
                    <div className="col-12">
                        <h4>
                            {apodObj.title}
                        </h4>
                        <h5>
                            {apodObj.copyright}
                        </h5>
                        <h6>
                            {apodObj.date}
                        </h6>
                        <p>
                            {apodObj.explanation}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApodCard;
