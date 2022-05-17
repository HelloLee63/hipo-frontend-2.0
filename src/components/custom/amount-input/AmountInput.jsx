import { getHumanValue } from "../../../helpers/web3/utils"

const AmountInput = ({ walletBalance, decimals, setAmount }) => {

  const numberInputOnWheelPreventChange = (e) => {
    // Prevent the input value change
    e.target.blur()
  
    // Prevent the page/container scrolling
    e.stopPropagation()
  
    // Refocus immediately, on the next tick (after the current function is done)
    setTimeout(() => {
      e.target.focus()
    }, 0)
  }

  function handleInput(amount) {
    setAmount(() => amount)
  }

  function handleMax() {
    let value = getHumanValue(walletBalance, decimals)
    document.getElementById("input-amount").value = value
    setAmount(() => value)
  }
  
  return (
    <div className="d-flex justify-content-center amount-input">
      <div className="c-formContainer">
        <form className="c-form" action="">
          <input id='input-amount' className="c-form__input" 
            onWheel={numberInputOnWheelPreventChange} 
            placeholder="0.00" 
            type="number"
            onChange={(e) => handleInput(e.target.value)}
          />
          <button onClick={handleMax} className="c-form__button" type="button">Max</button>
        </form>
      </div>
    </div>
  )
}

export default AmountInput