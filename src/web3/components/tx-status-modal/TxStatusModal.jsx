import Modal from "../../../components/antd/modal/Modal";
import { ExplorerTxLink } from "../../../components/button";
import Icon from "../../../components/icon";
import { useNetwork } from "../../../network/networkProvider";

const TxStatusModal = props => {
  const { state, txHash, renderProgress, renderSuccess, ...modalProps } = props;

  const { activeNetwork } = useNetwork();

  return (
    <Modal width={640} {...modalProps}>
      <div className="d-flex flex-column tx-status-modal">        
        <div className="modal-title">
          Transaction status
        </div>

        {state === 'progress' && (
          <>
            <div className="d-flex justify-content-center pt-15">
              <div className="spinner-border" style={{color: "#FF257B",width: "4rem", height: "4rem"}} role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
            <span className="d-flex justify-content-center modal-text pt-15">
              Your transaction is being processed ...
            </span>
            <div className="pt-10">{renderProgress?.()}</div>
            <div className="d-flex justify-content-center pt-5 pb-10">
              <ExplorerTxLink address={txHash} className="external-link full-width">
                View on {activeNetwork.explorer.name}
              </ExplorerTxLink>
            </div>
          </>
        )}

        {state === 'success' && (
          <>
            <div className="d-flex align-items-center justify-content-center">
              <i className="bi bi-check2-circle success-icon pt-8 pb-8"></i>
            </div>
            <span className="modal-text d-flex justify-content-center">
              Congratulations!
            </span>
            <span className="modal-text d-flex justify-content-center">
              Your transaction was successful.
            </span>
            {renderSuccess?.()}
            <div className="d-flex justify-content-center pt-15">
              <ExplorerTxLink address={txHash} className="external-link full-width">
                View on {activeNetwork.explorer.name}
              </ExplorerTxLink>
            </div>
            
            <div className="d-flex align-items-center justify-content-evenly modal-button pt-10 pb-10">
              <a type="button" className='btn install-wallet-modal-button' onClick={props.onCancel}>
                Confirm
              </a>
            </div>
          </>
        )}

        {state === 'fail' && (
          <>
            <div className="d-flex align-items-center justify-content-center">
              <i className="bi bi-x-circle fail-icon pt-8 pb-8"></i>
            </div>

            <span className="modal-text d-flex justify-content-center">
              Failed!
            </span>
            <span className="modal-text d-flex justify-content-center">
              Your transaction failed to execute.Please try again.
            </span>
            <button htmlType="submit" type="primary" onClick={props?.onCancel}>
              Dismiss
            </button>
          </>
        )}
      </div>
      
    </Modal>
  );
};

export default TxStatusModal;