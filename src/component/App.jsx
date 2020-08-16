import React from 'react';
import { useSelector } from 'react-redux'
import { hot } from 'react-hot-loader/root';
import FirstStage from './FirstStage'
import SecondStage from './SecondStage'
import Done from './Done'
import Error from './Error'

function App() {
    const stageIndex = useSelector(state => state.stage)
    function renderStage(number) {
        switch (number) {
            case 1:
                return <FirstStage />
            case 2:
                return <SecondStage />
            case 3:
                return <Done />
            default:
                return <Error />
        }
    }
    return (
        <>
            <article className="layout">
                <nav className="bar">
                    <ul className="nav">
                        <li className={`nav__item ${stageIndex == 1 && 'nav__item--targeted'}`}>
                            <span className="nav__index">
                                1
                            </span>
                            商品訂單
                        </li>
                        <li className={`nav__item ${stageIndex == 2 && 'nav__item--targeted'}`}>
                            <span className="nav__index">2</span>
                            付款資訊
                        </li>
                        <li className={`nav__item ${stageIndex == 3 && 'nav__item--targeted'}`}>
                            <span className="nav__index">3</span>
                            確認訂單
                        </li>
                    </ul>
                </nav>
                {renderStage(stageIndex)}
                
            </article>
        </>
    )

}

export default hot(App)
