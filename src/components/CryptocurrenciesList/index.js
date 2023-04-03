// Write your JS code here
import Loader from 'react-loader-spinner'

import {Component} from 'react'
import './index.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {cryptoData: [], isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )

    const data = await response.json()
    console.log(data)
    const updatedData = data.map(eachData => ({
      currencyLogo: eachData.currency_logo,
      currencyName: eachData.currency_name,
      euroValue: eachData.euro_value,
      id: eachData.id,
      usdValue: eachData.usd_value,
    }))
    this.setState({cryptoData: updatedData, isLoading: false})
  }

  render() {
    const {isLoading} = this.state
    const {cryptoData} = this.state
    return (
      <div className="list-items">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="currency-image"
        />
        <div className="list-items-container">
          <div className="list-items-heading">
            <h1 className="coin-type-head">Coin Type</h1>
            <div className="usd-euro-container">
              <h1 className="usd-head">USD</h1>
              <h1 className="euro-head">EURO</h1>
            </div>
          </div>
          <ul>
            {isLoading ? (
              <div data-testid="loader">
                <Loader type="Rings" color="#ffffff" height={80} width={80} />
              </div>
            ) : (
              cryptoData.map(eachData => (
                <CryptocurrencyItem key={eachData.id} details={eachData} />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}
export default CryptocurrenciesList
