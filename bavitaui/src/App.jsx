import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div className="comparison-container">
      <table className="comparison-table">
        <thead>
          <tr>
            <th></th>
            <th>₹ 399</th>
            <th>₹ 699</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>data</td>
            <td>1 GB / day</td>
            <td>3 GB / day</td>
          </tr>
          <tr>
            <td>calls</td>
            <td>truly unlimited</td>
            <td>truly unlimited</td>
          </tr>
          <tr>
            <td>data pooling</td>
            <td><span className="cross">✗</span></td>
            <td><span className="check">✓</span></td>
          </tr>
          <tr className="section">
            <td colSpan="3">additional benefits</td>
          </tr>
          <tr>
            <td>mobile security</td>
            <td><span className="cross">✗</span></td>
            <td><span className="check">✓</span></td>
          </tr>
          <tr>
            <td>location tracking</td>
            <td><span className="cross">✗</span></td>
            <td><span className="check">✓</span></td>
          </tr>
          <tr>
            <td>google workspace</td>
            <td><span className="check">✓</span></td>
            <td><span className="check">✓</span></td>
          </tr>
          <tr className="section">
            <td colSpan="3">OTT benefits</td>
          </tr>
          <tr>
            <td>Sony Liv</td>
            <td><span className="cross">✗</span></td>
            <td><span className="check">✓</span></td>
          </tr>
          <tr>
            <td>Disney + Hotstar</td>
            <td><span className="cross">✗</span></td>
            <td><span className="check">✓</span></td>
          </tr>
          <tr>
            <td>Vi™ movies and TV</td>
            <td><span className="check">✓</span></td>
            <td><span className="check">✓</span></td>
          </tr>
          <tr>
            <td></td>
            <td><button className="buy-now">buy now</button></td>
            <td><button className="buy-now">buy now</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  )
}

export default App
