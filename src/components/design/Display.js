import React from 'react';
import './Display.css';
const Display = ({ display, textFormat }) => {
    console.log(display.textColor);
    return (
        <div className="card card-content p-4">
            <div className="imgTshirt text-center">
                <img
                    className="img-fluid"
                    src={`https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/${display.tshirtColor}`}
                    alt="img-tshirt">
                </img>
            </div>
            <div className="memeText text-center">
                <div className="upperText">
                    <p style={{ fontSize: textFormat, color: display.textColor }}>{`${display.upperText}` || 'Upper Text here'}</p>
                    <img
                        className="img-fluid"
                        src={`${display.url}` || 'http://via.placeholder.com/400x300'}
                        alt="img-tshirt">
                    </img>
                </div>
                <div className="lowerText">
                    <p style={{ fontSize: textFormat, color: display.textColor }}>{`${display.lowerText}` || 'Lower Text here'}</p>
                </div>
            </div>
        </div>
    )
}

export default Display