import './css/style.css'
export default function NumberRandom() {
  return (
    <>
    <div className="hero">
      <div className="container">
        <div className="randomNum">
          <p>Random Number . <span>5</span></p>
        </div>
        <div className="numContainer">
          <div className='box-input'>
            <p>Min:</p>
            <input type="number" />
          </div>
          <div className='box-input'>
            <p>Max:</p>
            <input type="number" />
          </div>
        </div>
        <button>Get Random Number</button>
      </div>
    </div>
    </>
  )
}