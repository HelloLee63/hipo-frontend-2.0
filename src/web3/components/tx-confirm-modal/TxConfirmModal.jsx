import Modal from "../../../components/antd/modal/Modal";
import TransactionInfo from "../../../components/custom/transaction-info/TransactionInfo";
import { formatBigValue } from "../../utils";

const TxConfirmModal = props => {
  const {...modalProps} = props

  return (
    <Modal {...modalProps}>
      <div className="d-flex flex-column tx-confirm-modal">        
        <div className="modal-title">
          Confirm Transaction
        </div>
        <div className="d-flex align-items-center justify-content-center confirm-text pt-15">
          {props.transactionText}
        </div>
        <div className="d-flex align-items-center justify-content-center p-7">
          <img src={props.asset.icon} alt='' />
          <span className="ps-5 confirm-amount">{formatBigValue(props.transactionAmount.toString())}</span>
        </div>
        {props.content.isDisplay && (<div className='card-body pt-0'>
          <TransactionInfo content={props.content}/>
        </div>)}
        <div className="d-flex align-items-center justify-content-evenly modal-button pt-10 pb-10">
          <a type="button" className='btn unsupported-wallet-modal-button' onClick={() => {
            props.transact()
            props.onCancel?.()
          }} >
            Confim
          </a>
          <a type="button" className='btn unsupported-wallet-modal-button' onClick={() => {
            props.onCancel?.()
            }
          }>
            Cancel
          </a>
        </div>
      </div>
    </Modal>
    );
  };
  
  export default TxConfirmModal;