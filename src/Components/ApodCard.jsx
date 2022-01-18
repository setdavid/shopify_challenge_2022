import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function ApodCard(props) {
    let { apodObj } = props;

    let [liked, setLiked] = useState(false);

    let likeBtnCSS = {}

    if (liked) {
        likeBtnCSS = {
            ...likeBtnCSS,
            color: "red"
        }
    } else {
        likeBtnCSS = {
            ...likeBtnCSS,
            color: "var(--text)"
        }
    }

    return (
        <div className="row justify-content-center">
            <div className="apod-card col-12 col-md-9">
                <div className="row apod-card-image">
                    <div className="col-12">
                        <img src={apodObj.url} alt={apodObj.title} />
                    </div>
                </div>
                <div className="row apod-card-description">
                    <div className="col-12">
                        <div>
                            <h4>
                                {apodObj.title}
                            </h4>
                            <button className="like-btn" style={likeBtnCSS} onClick={() => setLiked(!liked)}>
                                <FontAwesomeIcon size="lg" icon={faHeart} />
                            </button>
                        </div>
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
