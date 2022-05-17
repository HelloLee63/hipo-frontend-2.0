import BigNumber from "bignumber.js"
import { useEffect, useState } from "react"
import { useConfig } from "../../../network/configProvider"
import ConnectWalletButton from "../../../wallet/components/connect-wallet-button/ConnectWalletButton"
import { useWallet } from "../../../wallet/walletProvider"

const TransactionButton = ({ pool, title, value, walletBalance }) => {

  const wallet = useWallet()
  const config = useConfig()
  const allowance = pool.collateralAsset.contract.allowances?.get(config.contracts.financingPool.financingPool)

  const [walletConnectVisible, setWalletConnectVisible] = useState(false)
  const [approveVisible, setApproveVisible] = useState(false)
  const [submitDisabledVisible, setSubmitDisabledVisible] = useState(false)
  const [isEnabling, setEnabling] = useState(false)

  useEffect(() => {
    if (!wallet.account) {
      setWalletConnectVisible(() => true)
      setApproveVisible(() => false)
      setSubmitDisabledVisible(() => false)
      return
    }

    if (wallet.account) {

      setWalletConnectVisible(() => false)

      if (value.eq(0) || value.isNaN()) {
        setSubmitDisabledVisible(() => true)
        setApproveVisible(() => false)
        return
      }

      if ((new BigNumber(allowance).lt(value))) {
        setApproveVisible(() => true)
        setSubmitDisabledVisible(() => false)
        return
      }

      if ((new BigNumber(allowance).gte(value))) {
        setApproveVisible(() => false)

        if (value.eq(0) || value.isNaN()) {
          setSubmitDisabledVisible(() => true)
          return
        }

        if (value.gt(0) && value.gt(new BigNumber(walletBalance))) {
          setSubmitDisabledVisible(() => true)
          return
        }

        if (value.gt(0) && value.lte(new BigNumber(walletBalance))) {
          setSubmitDisabledVisible(() => false)
          return
        }
      }
    }
  }, [wallet.account, value, walletBalance, allowance])

  useEffect(() => {
    if(isEnabling) {
      document.getElementById("cover").style.display = "flex";
    } else {
      document.getElementById("cover").style.display = "none";
    }
  }, [isEnabling])

  async function handleApprove() {

    if(wallet.account) {
      
      setEnabling(true)

      try {
        await pool.collateralAsset.contract.approve(config.contracts.financingPool.financingPool, true)
      } catch(e) {
        console.error(e)
      }

      setEnabling(false)      
    }     
  }

  if (approveVisible) {
    return (
      <div className="transaction-button">
        <div type='button'  onClick={handleApprove} className="btn btn-transaction btn-lg">
          {isEnabling ? (
            <div>
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            </div>)
          : 'Approve' }
        </div>
      </div>
    )
  }

  if (submitDisabledVisible) {
    return (
      <div className="transaction-button">
        <div type='button' disabled className="btn btn-transaction btn-lg">{title}</div>
      </div>
    )
  }

  if (walletConnectVisible) {
    return (
      <div className="transaction-button">
        <div type='button' disabled className="btn btn-transaction btn-lg">
          <ConnectWalletButton />
        </div>
        
      </div>
    )
  }

  return (
    <div className="transaction-button">
      <div type='button' onClick={handleClick} className="btn btn-transaction btn-lg">{title}</div>
    </div>    
  )
}

export default TransactionButton