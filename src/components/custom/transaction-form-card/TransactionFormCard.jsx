import BigNumber from "bignumber.js"
import clsx from "clsx"
import { formatBigValue, getHumanValue, scaleBy } from "../../../helpers/web3/utils"
import AmountInput from "../amount-input/AmountInput"

import ApyRange from "../apy-range/ApyRange"
import TokenRadioButton from "../token-radio-button/TokenRadioButton"
import TransactionButton from "../transaction-button/TransactionButton"
import TransactionInfo from "../transaction-info/TransactionInfo"
import WalletBalance from "../wallet-balance/WalletBalance"

const TransactionFormCard = props => {

  const {cardTitle, pool, tokenItems, durationItem, content, transactionButton, amount, setAmount, transaction, isWorking, balanceIcon, ...transactionFormProps} = props

  const decimals = pool.collateralAsset.decimals

  let value = new BigNumber(scaleBy(amount, decimals)) 
  const balance = new BigNumber(getHumanValue(transactionFormProps.walletBalance, decimals))

  return (  
    <div className={clsx('card', transactionFormProps.customClassName)}>
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
          <div className='d-flex justify-content-between transaction-item-title pb-3'>
            <span>Input Amount</span>
            <WalletBalance balance={formatBigValue(balance.toString())} balanceIcon={balanceIcon}/>
          </div>
          <AmountInput walletBalance={transactionFormProps.walletBalance} decimals={decimals} setAmount={setAmount}/>      
        </div>
        <div className='card-body pt-4 '>
          <div className='transaction-item-title pb-3'>
            LTV
          </div>
          <ApyRange />      
        </div>
        {content.isDisplay && 
          (<div className='card-body pt-0'>
            <TransactionInfo content={content}/>
          </div>)}
        <div className="card-body pt-3">
          <TransactionButton pool={pool} walletBalance={transactionFormProps.walletBalance} value={value} title={transactionButton.title} transaction={transaction} isWorking={isWorking}/>
        </div>      
    </div>   
  )
}

export default TransactionFormCard