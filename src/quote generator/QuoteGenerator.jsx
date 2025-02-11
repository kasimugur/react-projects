import { useEffect, useState } from "react";

export default function QuoteGenerator() {

  const [quotes, setQuotes] = useState('')

  const getQuote = () => {
    fetch('https://type.fit/api/quotes')
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length)
        setQuotes(data[randomNum])
      })
  }

  useEffect(() => {
    getQuote();
  }, [])

  // https://type.fit/api/quotes 
  return (
    <>
      <div className="app">
        <div className="quoute">
          <p>{quotes.text} </p>
          <p>{quotes.author} </p>

          <div className="btnContainer">
            <button onClick={getQuote} className="btn">Get Quote</button>
          </div>
        </div>
      </div>
    </>
  )
}