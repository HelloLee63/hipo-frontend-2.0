import BigNumber from "bignumber.js"
import { scaleBy } from "../../../helpers/web3/utils"
import { useWallet } from "../../../wallet/walletProvider"
import AmountInput from "../amount-input/AmountInput"

import ApyRange from "../apy-range/ApyRange"
import TokenRadioButton from "../token-radio-button/TokenRadioButton"
import TransactionButton from "../transaction-button/TransactionButton"
import TransactionInfo from "../transaction-info/TransactionInfo"

const TransactionFormCard = props => {

  const {cardTitle, pool, tokenItems, durationItem, content, transactionButton, amount, setAmount} = props

  const wallet = useWallet()
  const walletBalance = pool.collateralAsset.contract.balances?.get(wallet.account)
  const decimals = pool.collateralAsset.decimals

  let value = new BigNumber(scaleBy(amount, decimals)) 

  return (  
    <div className='card form-card'>
      <div id="cover">
        <div className="w-100 d-flex justify-content-center align-items-center">
          <div className="spinner"></div>
        </div>
      </div>
      <div className="transaction-form-title">{cardTitle}</div>
      
      {tokenItems.map(item => (
        <div key={item.title} className='card-body'>
          <div className='transaction-item-title pt-5 pb-2'>
            {item.title}
          </div>
          
          <TokenRadioButton
            isCollateral={item.isCollateral}
            tokens={item.assets}
            assetSymbol={item.assetSymbol}
            setAssetSymbol={item.setAssetSymbol}
            setAmount={setAmount}            
            />
              
        </div>
      ))}
        
        {durationItem.isDispaly && (
          <div className='card-body'>
            <div className='card-title transaction-form-title'>
              {durationItem.title}
            </div>
            <div className='d-flex justify-content-evenly '>
              {/* {items3} */}
            </div>        
          </div>)}
        <div className='card-body pt-1'>
          <div className='transaction-item-title pb-3'>
            Input Amount
          </div>
          <AmountInput walletBalance={walletBalance} decimals={decimals} setAmount={setAmount}/>      
        </div>
        <div className='card-body pt-4 '>
          <div className='transaction-item-title pb-3'>
            LTV
          </div>
          <ApyRange />      
        </div>
        {content.isDisplay && (<div className='card-body pt-0'>
          <TransactionInfo content={content}/>
        </div>)}
        <div className="card-body pt-3">
          <TransactionButton pool={pool} walletBalance={walletBalance} value={value} title={transactionButton.title}/>
        </div>      
    </div>   
  )
}

export default TransactionFormCard