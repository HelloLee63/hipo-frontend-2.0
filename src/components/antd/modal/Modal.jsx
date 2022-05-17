import { useState } from 'react';
import AntdModal from 'antd/lib/modal';
import clsx from 'clsx';

const Modal = props => {
  const { className, children, confirmClose = false, confirmText, onCancel, ...modalProps } = props;

  const [confirmVisible, showConfirm] = useState(false);

  function handleCancel() {
    if (confirmClose) {
      showConfirm(true);
    } else {
      onCancel?.();
    }
  }

  return (
    <AntdModal
      zIndex={1000}
      className={clsx('antd-modal', className)}
      visible
      centered
      footer={null}
      closeIcon={<i style={{color:"#FFFFFF", width:"50px"}}className="bi bi-x-lg"></i>}
      onCancel={handleCancel}
      maskStyle={{'opacity':'0.80','background':'#000000','animation':'none'}}
      {...modalProps}>
      {children}

      {confirmVisible && (
        <AntdModal
          zIndex={1001}
          className='antd-modal'
          visible
          centered
          footer={null}
          closeIcon={<></>}
          onCancel={() => showConfirm(false)}>
          <div className='d-flex flex-column'>
            <span className='pb-5'>
              {confirmText}
              Are you sure?
            </span>
            <div className='d-flex justify-content-between'>
              <button type="button" className='btn btn-success' onClick={() => showConfirm(false)}>
                No
              </button>
              <button type="button" className='btn btn-success' onClick={onCancel}>
                Yes
              </button>
            </div>
          </div>
        </AntdModal>
      )}
    </AntdModal>
  );
};

export default Modal;