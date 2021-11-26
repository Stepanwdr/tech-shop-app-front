import React from 'react';


const Device = () => {
    return (
        <div className='devices'>
            <h2>Devices</h2>
            <div className="device">
                <img src="" alt=""/>
                <div className="title">Device:<strong>Samsung</strong></div>
                <div className="category">Category:<strong>Android</strong></div>
                <div className="price">Price:<strong>100$</strong></div>
                <div className="rate">Rating:<strong>5</strong></div>
                <button>Add to card</button>
            </div>
        </div>
    );
};


export default Device;