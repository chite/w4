import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeStage, writeData } from '../action/action'
import card1 from '../asset/mastercard.png'
import card2 from '../asset/visa.png'
import card3 from '../asset/jcb.png'

const CheckingPage = () => (
  <section className="checkPage">
    <div className="checkPage__icon">
      <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
    <p className="checkPage__text">信用卡驗證中</p>
  </section>
);

function SecondStage() {
  const form = useRef(null);
  const data = useSelector(state => state);
  const [inputValid, setInputVaild] = useState({
    creditCard: true,
    validDate: true,
    cvc: true,
    name: true,
    psd: true,
  })
  const [cardDate, setCardDate] = useState('');
  const [waitingPage, setWaitingPage] = useState(false);
  const dispatch = useDispatch();
  const movePage = (data) => { dispatch(changeStage(data)) };
  const sendData = (data) => { dispatch(writeData(data)) };

  useEffect(() => {
    switch (data.project) {
      case 1:
        setCardDate('3 小時');
        break;
      case 2:
        setCardDate('24 小時');
        break;
      case 3:
        setCardDate('30 日');
        break;
      case 4:
        setCardDate('90 日');
        break;
      default:
        break;
    }
  }, []);

  function hanldeChange(e, value, key) {
    const payload = {
      key,
      value
    }
    sendData(payload);
    updateValidState(e, key);
  }

  function SendPsd() {
    const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let psd = '';
    for (let i = 0; i < 4; i++) {
      psd += num[Math.floor(Math.random() * num.length)]
    }
    const fakeEvent = {
      target: document.querySelector('#psd'),

    }
    // update store
    hanldeChange(fakeEvent, psd, 'psd');
    // update valid state
    setInputVaild({ ...inputValid, psd: true });
  }

  function updateValidState(e, key) {
    if (e.target.checkValidity()) {
      setInputVaild({
        ...inputValid,
        [key]: true
      });
    }
  }

  function checkInputs() {
    const newInputVaild = { ...inputValid };
    Array.from(document.querySelectorAll('input:invalid')).forEach(dom => {
      if (dom.checkValidity()) {
        newInputVaild[dom.id] = true;
      } else {
        newInputVaild[dom.id] = false;
      }
    })
    setInputVaild(newInputVaild);
  }

  function nextStage() {
    if (form.current.checkValidity()) {
      setWaitingPage(true);
      setTimeout(() => {
        movePage(1);
      }, 2000);
    } else {
      form.current.reportValidity();
      checkInputs();
    }
  }

  return (
    <>
      <div className="stage">
        <main className="col">
          <form
            ref={form}
            className="col--6 inputGroup"
          >
            <h1 className="stage__title mb-3">信用卡資訊</h1>

            <div className="col">
              <label className="col--6 inputGroup__title" >信用卡卡號：</label>
              <div className="col--6 row">
                <img src={card1} className="obj--c row__img" />
                <img src={card2} className="obj--c row__img" />
                <img src={card3} className="obj--c row__img" />
              </div>
            </div>
            <input
              id="creditCard"
              placeholder="0000-0000-0000-0000"
              className={`${!inputValid.creditCard && 'invalid'} inputGroup__input`}
              pattern="^(\d{4}-){3}\d{4}$"
              maxLength="19"
              required
              value={data.creditCard}
              onChange={(e) => hanldeChange(e, e.target.value, 'creditCard')}
            />

            <div className="col">
              <div className="col--6-c pr-1">
                <label className="inputGroup__title" pattern="">有效年/月：</label>
                <input
                  id="validDate"
                  placeholder="MM/YY"
                  className={`${!inputValid.validDate && 'invalid'} inputGroup__input`}
                  pattern="^\d{2}\/(0[1-9]|1[012])$"
                  maxLength="7"
                  required
                  value={data.validDate}
                  onChange={(e) => hanldeChange(e, e.target.value, 'validDate')}
                />
              </div>
              <div className="col--6-c pl-1">
                <label className="inputGroup__title">CVC：</label>
                <input
                  id="cvc"
                  placeholder="000"
                  className={`${!inputValid.cvc && 'invalid'} inputGroup__input`}
                  pattern="^\d{3}$"
                  maxLength="3"
                  required
                  value={data.cvc}
                  onChange={(e) => hanldeChange(e, e.target.value, 'cvc')}
                />
              </div>
            </div>

            <label className="inputGroup__title">持卡人姓名：</label>
            <input
              id="name"
              placeholder="As shown as the card"
              className={`${!inputValid.name && 'invalid'} inputGroup__input`}
              type="text"
              required
              value={data.name}
              onChange={(e) => hanldeChange(e, e.target.value, 'name')}
            />

            <label className="inputGroup__title">輸入交易密碼：</label>
            <div className="col">
              <div className="col--6-c pr-1">
                <input
                  id="psd"
                  className={`${!inputValid.psd && 'invalid'} inputGroup__input`}
                  required
                  value={data.psd}
                  onChange={() => { }}
                />
              </div>
              <div className="col--6-c">
                <button
                  className="inputGroup__btn"
                  type="button"
                  onClick={SendPsd}
                >取得簡訊傳送交易密碼</button>
              </div>
            </div>
          </form>
          <section className="col--6 poster">
            <div className="poster__layout">
              <div className="poster__left">
                <img src={`https://raw.githubusercontent.com/chite/w4/master/src/asset/project${data.project}.svg`} className="poster__img obj--c" />
              </div>
              <hr />
              <div className="poster__right">
                <h2 className="poster__title">Karaoke期間券</h2>
                <ul className="poster__list">
                  <li>從購買日起可無限歡唱 {cardDate}。</li>
                  <li>有效期總計不能超過365天。</li>
                  <li>此期間券僅適用本公司產品。 </li>
                  <li>到期前追加購買，將自動延長期限。</li>
                  <li>您無法取消或退還購買的期間券。</li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
      <footer className="footer">
        <button
          className="footer__btn"
          onClick={() => movePage(-1)}
        >返回</button>
        <button
          className="footer__btn"
          onClick={nextStage}
        >繼續</button>
      </footer>
      {
        waitingPage &&
        <CheckingPage />
      }
    </>
  )
}

export default SecondStage
