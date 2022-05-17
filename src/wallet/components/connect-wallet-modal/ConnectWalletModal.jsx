import { useGeneral } from "../../../components/provider/generalProvider";
import useMergeState from "../../../hooks/useMergeState";
import { useWallet, WalletConnectors } from "../../walletProvider";
import Modal from '../../../components/antd/modal/Modal'

const InitialState = {
  showLedgerModal: false,
};

const ConnectWalletModal = props => {
  const { ...modalProps } = props;
  const { theme } = useGeneral();

  const wallet = useWallet();
  const [state, setState] = useMergeState(InitialState);

  function handleConnectorSelect(connector) {
    if (wallet.isActive) {
      return;
    }
    if (connector.id === 'ledger') {
      setState({
        showLedgerModal: true,
      });
      return;
    }
    wallet.connect(connector).catch(Error);
  }

  return (
    <Modal {...modalProps}>
      <div className="d-flex flex-column connect-wallet-modal">        
        <div className="modal-title pb-10">
          Connect Wallet
        </div>        

        {WalletConnectors.map(connector => (
          <div className="d-flex flex-column align-items-center justify-content-center wallet-icon"
            key={connector.id}
            type="select"
            onClick={() => handleConnectorSelect(connector)}>
            <img 
              src={Array.isArray(connector.logo) ? connector.logo[theme === 'dark' ? 1 : 0] : connector.logo}
              alt={connector.name}
            />
            <span className="pt-5 wallet-name">Metamask</span>
          </div>
        ))}
      </div>

      {/* {state.showLedgerModal && (
        <LedgerDerivationPathModal
          onCancel={() => {
            setState({ showLedgerModal: false });
          }}
        />
      )} */}
    </Modal>
  );
};

export default ConnectWalletModal;