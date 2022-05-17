import { useNetwork } from '../../../network/networkProvider'
import { useWallet } from '../../walletProvider'
import { shortenAddr } from '../../../helpers/web3/utils'
import Identicon from '../../../components/custom/identicon/Identicon'
import { toAbsoluteUrl } from '../../../helpers/AssetHelpers'
import { ExplorerAddressLink } from '../../../components/button'

const ConnectWalletButton = () => {

  const wallet = useWallet()
  const { activeNetwork } = useNetwork()
  const walletConnPop = (
    <div
      className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px'
      data-kt-menu='true'
    >
      <div className='menu-item px-3'>
        <div className='menu-content d-flex align-items-center px-3'>
          <div className='symbol symbol-50px me-5'>
            {wallet.ens.avatar ? (
              <img
                width={40}
                height={40}
                className="mr-16"
                style={{ borderRadius: '3px' }}
                src={ wallet.ens.avatar }
                alt={ wallet.ens.avatar }
              />
            ) : (
              <Identicon address={ wallet.account } width={30} height={30} className="mr-16" />
            )}
            <ExplorerAddressLink address={wallet.account}>                
              <span className='fw-bolder align-items-center m-5 fs-5'>
                {wallet.ens.name || shortenAddr(wallet.account, 8, 8)}
              </span>                                          
            </ExplorerAddressLink>
          </div>
        </div>
      </div>

      <div className='separator my-2'></div>

      <div className='menu-item px-5'>
        <a className='menu-link px-5'>
          <img alt='' src={toAbsoluteUrl('/media/icons/walletconnection/status.svg')} className='svg-icon svg-icon-2x me-5' />
          Status
          <span className='badge badge-light-success fw-bolder fs-7 px-2 py-1 ms-2'>Connected</span>
        </a>  
      </div>

      <div className='menu-item px-5'>
        <a href='#' className='menu-link px-5'>
          <img alt='' src={toAbsoluteUrl('/media/icons/walletconnection/wallet.svg')} className='svg-icon svg-icon-2x me-5' />
          Wallet          
          <span className='badge badge-light-success fw-bolder fs-7 px-2 py-1 ms-2'>{wallet.meta?.name}</span>
        </a>
      </div>

      <div className='menu-item px-5'>
        <a href='#' className='menu-link px-5'>
          <img alt='' src={toAbsoluteUrl('/media/icons/walletconnection/network.svg')} className='svg-icon svg-icon-2x me-5' />
          Network         
          <span className='badge badge-light-success fw-bolder fs-7 px-2 py-1 ms-2'>{activeNetwork.meta?.name}</span>
        </a>
      </div>

      <div className='separator my-2'></div>

      <div className='menu-item px-5'>
        <button onClick={() => wallet.disconnect()} className='btn btn-outline-primary px-5'>
          Sign Out
        </button>
      </div>
    </div>
  )

  if (!wallet.isActive) {

    return (       
      <div
        type="button"
        className='d-flex justify-content-center align-items-center wallet-button flex-shrink-0'
        onClick={() => wallet.showWalletsModal()}>        
        <span>Connect Wallet</span>
        {/* <i className="bi bi-arrow-right wallet-connect-button-icon ps-3"></i> */}
      </div>       
    )
  }

  return (
    <>
      <button type="button" className="btn d-flex align-items-center pe-8 wallet-connected"
        data-kt-menu-trigger='click'
        data-kt-menu-placement='bottom-end'
      >
        { wallet.ens.avatar ? (
          <img
            width={25}
            height={25}
            className="mr-8"
            style={{ borderRadius: '3px' }}
            src={ wallet.ens.avatar }
            alt={ wallet.ens.avatar }
          />
          ) : (
            <Identicon address={wallet.account} width={25} height={25} className="mr-8" />
          )}
        <span className="ps-3 fs-6 fw-bolder">{ wallet.ens.name || shortenAddr(wallet.account, 4, 3) }</span>    
      </button>
      {walletConnPop}      
    </>  
  ) 
}

export default ConnectWalletButton