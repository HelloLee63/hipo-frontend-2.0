import { useWeb3 } from '../../../web3/web3Provider'
import { useNetwork } from '../../networkProvider'

const ConnectNetworkButton = () => {
  
const { activeNetwork } = useNetwork()
  const { showNetworkSelect } = useWeb3()

  return (
    <div         
      type="button" 
      onClick={() => showNetworkSelect()} 
      className="btn btn-network d-flex align-items-center flex-shrink-0">  
      <img alt='' src={activeNetwork.meta.logo} className='h-25px pe-3' />
      <span>{activeNetwork.meta.name}</span>
    </div>
  )
}

export default ConnectNetworkButton