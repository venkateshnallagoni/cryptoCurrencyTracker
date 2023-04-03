// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {details} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = details

  return (
    <li className="list-item">
      <div className="logo-currency-name">
        <img src={currencyLogo} alt={currencyName} className="logo-style" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="usd-euro">
        <p className="usd">{usdValue}</p>
        <p className="euro">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
