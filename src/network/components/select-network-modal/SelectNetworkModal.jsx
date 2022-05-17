import Modal from "../../../components/antd/modal/Modal"
import { useWeb3 } from "../../../web3/web3Provider"
import { useNetwork } from "../../networkProvider"

const SelectNetworkModal = props => {

  const { ...modalProps } = props
  const {networks, activeNetwork} = useNetwork()
  const {switchNetwork} = useWeb3()

  return (
    <Modal {...modalProps}>
      <div className="d-flex flex-column connect-network-modal">        
        <div className="modal-title pb-10">
          Select network
        </div>        

        {networks.map(network => (
          <div className="d-flex flex-column align-items-center justify-content-center wallet-icon"
            key={network.id}
            type="select"
            onClick={() => switchNetwork(network.id)}>
            <img 
              src={network.meta.logo}
              alt={network.meta.name}
              style={{height:"40px", width:"40px"}}
              className="mr-12"
            />
            <span className="d-flex align-items-center justify-cotent-center pt-5 wallet-name">Rinkeby</span>
            {network === activeNetwork && (
                <span type="small" weight="semibold" color="secondary">
                  Connected
                </span>
              )}
          </div>
        ))}
      </div>    
      {/* <span type="h3" weight="bold" color="primary">
        Select network
      </span>    
      <div className="flex flow-row row-gap-16">
        {networks.map(network => (
          <button
            key={network.id}
            className="button-ghost-monochrome p-16"
            style={{ height: 'inherit' }}
            onClick={() => switchNetwork(network.id)}>
            <img name={network.meta.logo} size={40} className="mr-12" />
            <div className="flex flow-row align-start">
              <span type="p1" weight="semibold" color="primary">
                {network.meta.name}
              </span>
              {network === activeNetwork && (
                <span type="small" weight="semibold" color="secondary">
                  Connected
                </span>
              )}
            </div>
          </button>
        ))}
      </div> */}
    </Modal>
  )
}

export default SelectNetworkModal