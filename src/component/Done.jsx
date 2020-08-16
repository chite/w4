import React from 'react'
import image from '../asset/photo_order done.svg';

function Done() {
    return (
        <div className="done">
            <img className="done__img obj--f" src={image} alt="done" />
            <h1 className="done__text">訂單已完成 !</h1>
            <button
                className="done__btn"
                onClick={() => window.close()
                }>結束</button>
        </div>
    )
}

export default Done
