import Modal from "../../../components/antd/modal/Modal";
import { ExplorerTxLink } from "../../../components/button";
import Icon from "../../../components/icon";
import { useNetwork } from "../../../network/networkProvider";

const TxStatusModal = props => {
  const { state, txHash, renderProgress, renderSuccess, ...modalProps } = props;

  const { activeNetwork } = useNetwork();

  return (
    <Modal width={560} title="Transaction status" {...modalProps}>
      <div className="grid flow-row pv-8 ph-8">
        {state === 'progress' && (
          <>
            <Icon name="tx-progress" width={180} height={160} className="mb-32 mh-auto" />
            <span type="h3" weight="semibold" color="primary" className="mb-16 text-center">
              Your transaction is being processed ...
            </span>
            <div className="mb-64">{renderProgress?.()}</div>
            <ExplorerTxLink address={txHash} variation="primary" className="full-width">
              View on {activeNetwork.explorer.name}
            </ExplorerTxLink>
          </>
        )}
        {state === 'success' && (
          <>
            <Icon name="tx-success" width={180} height={160} className="mb-32 mh-auto" />
            <span type="h3" weight="semibold" color="primary" className="mb-16 text-center">
              Congratulations!
            </span>
            <span type="small" weight="semibold" color="secondary" className="mb-16 text-center">
              Your transaction was successful.
            </span>
            {renderSuccess?.()}
          </>
        )}
        {state === 'fail' && (
          <>
            <Icon name="tx-failure" width={180} height={160} className="mb-32 mh-auto" />
            <span type="h3" weight="semibold" color="primary" className="mb-16 text-center">
              Failed!
            </span>
            <span type="small" weight="semibold" color="secondary" className="mb-64 text-center">
              Your transaction failed to execute.
              <br />
              Please try again.
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