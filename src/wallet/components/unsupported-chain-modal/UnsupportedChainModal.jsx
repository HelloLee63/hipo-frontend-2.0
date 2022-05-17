import { useState } from "react"
import Modal from "../../../components/antd/modal/Modal"
import { useNetwork } from "../../../network/networkProvider"
import { useWallet } from "../../walletProvider"

const UnsupportedChainModal = props => {
  const { ...modalProps } = props

  const { activeNetwork } = useNetwork()
  const wallet = useWallet()

  const [error, setError] = useState()

  const handleNetworkSwitch = async () => {
    setError()
    props.onCancel?.()
    await wallet.changeNetwork(setError);
  };

  return (
    <Modal { ...modalProps }>
      <div className="d-flex flex-column unsupported-chain-modal">        
        <div className="modal-title">
          Wrong Network
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <i className="bi bi-exclamation-circle warning-icon pt-8 pb-8"></i>
        </div>
        <div className="align-items-center justify-content-center warning-text p-7">
          Please switch your wallet network to {' '} 
          <span>
            {activeNetwork.meta.name}
          </span>{' '}
          to use the app
        </div>
        <div className="d-flex align-items-center justify-content-center modal-button pt-10 pb-10">
          <a type="button" className='btn unsupported-wallet-modal-button' onClick={() => handleNetworkSwitch()}>
            Switch Network
          </a>
        </div>
      </div>
    </Modal>
  )
}

export default UnsupportedChainModal