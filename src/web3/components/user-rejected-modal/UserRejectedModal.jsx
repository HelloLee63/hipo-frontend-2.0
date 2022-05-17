// import Modal from '../../../components/antd/modal';
import Modal from '../../../components/antd/modal/Modal';
// import Icon from '../../../components/custom/icon';
// Modal
// Icon


const UserRejectedModal = props => {
  const { ...modalProps } = props;

  return (
    <Modal width={315} {...modalProps}>    
      <div className="flex flow-row">
        <div className="flex flow-row align-center mb-32">
          <img alt='' name="warning-outlined" width={40} height={40} color="red" className="mb-16" />
          <span type="h3" weight="semibold" color="primary" className="mb-8">
            Error
          </span>
          <span type="p2" weight="semibold" color="secondary">
            Transaction rejected
          </span>
        </div>
        <button className="button-primary" onClick={modalProps.onCancel}>
          Dismiss
        </button>
      </div>
    </Modal>
  );
};

export default UserRejectedModal;