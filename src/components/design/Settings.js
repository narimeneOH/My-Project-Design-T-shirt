import React from 'react';
import './Display.css'
const urlImgBase = 'https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/';

const Settings = ({ color, upperText, lowerText, uploadImage, textSize, textColor, saveDesign }) => {
    return (
        <div className="card bg-light container p-4">
            <h3 className="text-center mb-4">Settings</h3>
            <h4 className="mb-4 mt-2">Change T-shirt color</h4>
            <div className="tshirt-color">
                <img onClick={color} src={`${urlImgBase}black.png`} alt="white-tshirt" id="black" />
                <img onClick={color} src={`${urlImgBase}white.png`} alt="white-tshirt" id="white" />
                <img onClick={color} src={`${urlImgBase}grey.png`} alt="grey-tshirt" id="grey" />
                <img onClick={color} src={`${urlImgBase}blue.png`} alt="blue-tshirt" id="blue" />
                <img onClick={color} src={`${urlImgBase}red.png`} alt="red-tshirt" id="red" />
            </div>
            <h4 className="mb-4 mt-2">Write Text</h4>
            <input onChange={upperText} type="text" className="form-control form-control-sm mb-2" placeholder="Upper Text" />
            <input onChange={lowerText} type="text" className="form-control form-control-sm " placeholder="Lower Text" />
            <hr />
            <h4 className="mb-4 mt-2">Upload image</h4>
            <div className="form-group">
                <input onChange={uploadImage} type="file" className="form-control-file mb-2" />
            </div>
            <hr />
            <h4 className="mb-4 mt-2">Text size</h4>
            <input onChange={textSize} type="range" min="12" max="33" />
            <h4 className="mb-4 mt-2">Text color</h4>
            <select onChange={textColor} className="form-control form-control-sm mb-2">
                <option>white</option>
                <option>black</option>
                <option>red</option>
                <option>blue</option>
            </select>
            <hr />
            <button className="btn btn-primary btn-sm mb-2 mt-2" onClick={saveDesign} id="saveDesign">Save</button>
        </div>
    )
}

export default Settings