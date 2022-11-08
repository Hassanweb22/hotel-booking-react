import React from 'react'
import "./Featured.css"

const Featured = () => {
    return (
        <div className='featured limitWidth'>
            <div className="featuredItem">
                <div className="imageContainer">
                    <img src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=" alt="dublin" />
                    <div className="after"></div>
                </div>
                <div className="featuredTitle">
                    <h1>Dublin</h1>
                    <p>122 properties</p>
                </div>
            </div>
            <div className="featuredItem">
                <div className="imageContainer">
                    <img src="https://images.unsplash.com/photo-1588993608283-7f0eda4438be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXVzdGlufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="austin" />
                    <div className="after"></div>
                </div>
                <div className="featuredTitle">
                    <h1>Austin</h1>
                    <p>332 properties</p>
                </div>
            </div>
            <div className="featuredItem">
                <div className="imageContainer">
                    <img src="https://www.worldatlas.com/r/w1200/upload/2e/e9/77/shutterstock-105440606.jpg" alt="amsterdam" />
                    <div className="after"></div>
                </div>
                <div className="featuredTitle">
                    <h1>Amsterdam</h1>
                    <p>522 properties</p>
                </div>
            </div>
        </div>
    )
}

export default Featured