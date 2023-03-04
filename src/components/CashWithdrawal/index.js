import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

export class CashWithdrawal extends Component {
  state = {amount: 2000}

  clickDeduct = value => {
    const {amount} = this.state
    if (amount > 0 && amount >= value) {
      this.setState(prevState => ({amount: prevState.amount - value}))
    }
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="top-container">
            <div className="initial-container">
              <h1 className="initial-heading">S</h1>
            </div>
            <h1 className="full-name">Sarah Williams</h1>
          </div>
          <div className=" middle-container">
            <p className="balance-heading">Your Balance</p>
            <div className="balance-container">
              <p className="cash-value">{amount}</p>
              <p className="rupee-para">In Rupee</p>
            </div>
          </div>
          <div className="bottom-container">
            <p className="cash-value">Withdraw</p>
            <p className="balance-heading">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <div className="denomination-container">
            <ul>
              {denominationsList.map(eachItem => (
                <DenominationItem
                  key={eachItem.id}
                  denomination={eachItem}
                  clickDeduct={this.clickDeduct}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
