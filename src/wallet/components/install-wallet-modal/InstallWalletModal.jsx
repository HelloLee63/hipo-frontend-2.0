import Modal from "../../../components/antd/modal/Modal";

const METAMASK_CHROME_EXT_URL = 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn';

const InstallMetaMaskModal = props => {
  const {...modalProps} = props

  return (
    <Modal {...modalProps}>
      <div className="d-flex flex-column install-wallet-modal">        
        <div className="modal-title">
          Install MetaMask
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <i className="bi bi-exclamation-circle warning-icon pt-8 pb-8"></i>
        </div>
        <div className="align-items-center justify-content-center warning-text p-7">
          You need to have{' '}
          <span>
            MetaMask
          </span>{' '}
          installed to continue.
        </div>
        <div className="d-flex align-items-center justify-content-center modal-button pt-10 pb-10">
          <a type="button" className='btn install-wallet-modal-button' onClick={props.onCancel} href={METAMASK_CHROME_EXT_URL} rel="noopener noreferrer" target="_blank">
            Install MetaMask
          </a>
        </div>
      </div>
    </Modal>
    );
  };
  
  export default InstallMetaMaskModal;