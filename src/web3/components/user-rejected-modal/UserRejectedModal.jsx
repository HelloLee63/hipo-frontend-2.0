import Modal from '../../../components/antd/modal/Modal';

const UserRejectedModal = props => {
  const { ...modalProps } = props;

  return (
    <Modal width={420} {...modalProps}>
      <div className="d-flex flex-column user-rejected-modal">        
        <div className="modal-title pb-10">
          Error
        </div>        
        <div className="d-flex align-items-center justify-content-center">
          <i className="bi bi-exclamation-circle warning-icon pt-8 pb-8"></i>
        </div>
        
        <div className="d-flex align-items-center justify-content-center warning-text p-7">
          {props.errorText}
        </div>

        <div className="d-flex align-items-center justify-content-center modal-button pt-10 pb-10">
          <a type="button" className='btn install-wallet-modal-button' onClick={props.onCancel}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default UserRejectedModal;