import React from 'react'

function Error() {
    return (
        <>
            <div className="text-center">
                <h1>抱歉，網站發生錯誤</h1>
                <button>返回首頁</button>
            </div>
            <div className="ghost-container">
                <div className="ghost-copy">
                    <div className="one block"></div>
                    <div className="two block"></div>
                    <div className="three block"></div>
                    <div className="four block"></div>
                </div>
                <div className="ghost">
                    <div className="face">
                        <div className="eye"></div>
                        <div className="eye-right"></div>
                        <div className="mouth"></div>
                    </div>
                </div>
                <div className="shadow"></div>
            </div>
        </>
    )
}

export default Error
