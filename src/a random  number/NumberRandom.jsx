import { useState } from 'react'
import './css/style.css'
export default function NumberRandom() {
  const [minValNum, setMinValNum] = useState(0)
  const [maxValNum, setMaxValNum] = useState(5)
  const [randomNum, setRandomNum] = useState(10)

  const giveRandomNum = () => {
    if (minValNum > maxValNum) {
      alert('max küçüktür ')
    } if (minValNum === maxValNum) {
      alert('max eşittir  ')
    }else {
      setRandomNum(Math.floor(
        Math.random() * (maxValNum - minValNum + 1) + minValNum))
    }
  }
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="randomNum">
            <p>Random Number : <span>{randomNum} </span></p>
          </div>
          <div className="numContainer">
            <div >
              <p>Min:</p>
              <input
                type="number"
                value={minValNum}
                onChange={e => setMinValNum(+e.target.value)}
              />
            </div>
            <div >
              <p>Max:</p>
              <input
                type="number"
                value={maxValNum}
                onChange={e => setMaxValNum(+e.target.value)}
              />
            </div>
          </div>
          <button onClick={() => giveRandomNum()}>Get Random Number</button>
        </div>
      </div>
    </>
  )
}