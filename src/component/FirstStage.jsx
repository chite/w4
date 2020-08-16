import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeStage, chooseProject, choosePayment } from '../action/action';
import three_hr from '../asset/photo_3hr_unselected.svg'
import twenty_four from '../asset/photo_24hr_unselected.svg'
import thirty_day from '../asset/photo_30days_unselected.svg'
import ninty_day from '../asset/photo_90days_unselected.svg'
import credit_card from '../asset/icon_credit card.svg'
import atm from '../asset/icon_atm.svg'
import paypal from '../asset/icon_paypal.svg'
import barcode from '../asset/icon_barcode.svg'



function FirstStage() {
    const data = useSelector(state => state)
    const dispatch = useDispatch()
    const movePage = (data) => { dispatch(changeStage(data)) };
    const handlePayment = (data)=>{dispatch(choosePayment(data))};
    const handleProject = (data) => { dispatch(chooseProject(data)) };

    return (
        <>
            <div className="stage">
                <main className="stage__body">
                    <h1 className="stage__title">期間券方案</h1>
                    <ul className="cards">
                        <li
                            className={`${data.project == 1 && 'targeted'} cards__item--r`}
                            onClick={() => handleProject(1)}
                        >
                            <img src={three_hr} className="obj obj--c" />
                        </li>
                        <li
                            className={`${data.project == 2 && 'targeted'} cards__item--r`}
                            onClick={() => handleProject(2)}
                        >
                            <img src={twenty_four} className="obj obj--c" />
                        </li>
                        <li
                            className={`${data.project == 3 && 'targeted'} cards__item--r`}
                            onClick={() => handleProject(3)}
                        >
                            <img src={thirty_day} className="obj obj--c" />
                        </li>
                        <li
                            className={`${data.project == 4 && 'targeted'} cards__item--r`}
                            onClick={() => handleProject(4)}
                        >
                            <img src={ninty_day} className="obj obj--c" />
                        </li>
                    </ul>
                    <h1 className="stage__title">付款方式</h1>
                    <ul className="cards">
                        <li
                            className={`${data.payment && 'targeted'} cards__item--s`}
                            onClick={() => handlePayment(1)}
                        >
                            <img src={credit_card} className="obj obj--c" />
                            <h3 className="cards__text">信用卡</h3>
                        </li>
                        <li className="cards__item--s disabled">
                            <img src={atm} className="obj obj--c" />
                            <h3 className="cards__text">銀行轉帳</h3>
                        </li>
                        <li className="cards__item--s disabled">
                            <img src={paypal} className="obj obj--c" />
                        </li>
                        <li className="cards__item--s disabled">
                            <img src={barcode} className="obj obj--c" />
                            <h3 className="cards__text">超商繳費</h3>
                        </li>
                    </ul>
                </main>
            </div>
            <footer className="footer">
                <button
                    className="footer__btn"
                    onClick={() => movePage(-1)}
                    disabled={data.stage == 1}
                >返回</button>
                <button
                    className="footer__btn"
                    onClick={() => movePage(1)}
                    disabled={!(data.project && data.payment)}
                >繼續</button>
            </footer>
        </>
    )
}

export default FirstStage
