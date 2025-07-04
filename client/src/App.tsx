import React from 'react'
import './App.css'
import Square from './components/Square';

function App() {
  const squareStyle = [
    {
      text: "Snap Scrolling",
      bgColor: "#e04641",
      textColor: "#f7bb2e",
      paragraph: "Looking for a Webflow Agency? Contact"
    },
    {
      text: "Snap Scrolling",
      bgColor: "#1d7847",
      textColor: "#ddea90",
      paragraph: "Looking for a Webflow Agency? Contact"
    },
    {
      text: "Snap Scrolling",
      bgColor: "#2c3950",
      textColor: "#f7d5b1",
      paragraph: "Looking for a Webflow Agency? Contact"
    },
    {
      text: "Snap Scrolling",
      bgColor: "#614f89",
      textColor: "#fea4b9",
      paragraph: "Looking for a Webflow Agency? Contact"
    }

  ]

  return (
    <React.Fragment>
      <main>
        <div className="container">
          {
            squareStyle.map((item, index) => (
              <Square title={item?.text} key={index} bgColor={item?.bgColor} textColor={item?.textColor} paragraph={item?.paragraph} />
            ))
          }
        </div>
      </main>
    </React.Fragment>
  )
}

export default App
