import { useNetwork } from '../../../network/networkProvider'
import { useWallet } from '../../walletProvider'
import { shortenAddr } from '../../../helpers/web3/utils'
import Identicon from '../../../components/custom/identicon/Identicon'
import { toAbsoluteUrl } from '../../../helpers/AssetHelpers'
import { ExplorerAddressLink } from '../../../components/button'
import { Popover } from 'antd'
import PortfolioButton from '../../../components/custom/portfolio/portfolio-button/PortfolioButton'
// import Popover from '../../../components/antd/popover/Popover'


const ConnectWalletButton = () => {

  const wallet = useWallet()
  const { activeNetwork } = useNetwork()
  const walletConnPop = (
    <div className='d-flex flex-column antd-popover'>
      <div className='pt-3'>
        <Identicon circle={ true } address={ wallet.account } width={30} height={30} className="mr-16" />
        <ExplorerAddressLink address={wallet.account}>                
          <span className='popover-address align-items-center m-5 fs-5'>
            {wallet.ens.name || shortenAddr(wallet.account, 8, 8)}
          </span>                                          
        </ExplorerAddressLink>
      </div>
      
      <div className='pt-5'>
        <hr className='popover-divider pt-5'></hr>
      </div>

      <div className='w-100 d-flex align-items-center justify-content-between'>
        <div className='d-flex align-items-center'>
          <img src='./media/wallets/wallet-button/status.svg'/>
          <span className='ps-2 popver-title'>Status</span>
        </div>
        <div className='d-flex justify-content-end popver-title'>Connected</div>
      </div>

      <div className='w-100 d-flex align-items-center justify-content-between pt-7'>
        <div className='d-flex align-items-center'>
          <img src='./media/wallets/wallet-button/walletIcon.svg' />
          <span className='ps-2 popver-title'>Wallet</span>
        </div>
        <div className='d-flex justify-content-end popver-title'>{wallet.meta?.name}</div>
      </div>

      <div className='w-100 d-flex align-items-center justify-content-between pt-7'>
        <div className='d-flex align-items-center'>
          <img src='./media/wallets/wallet-button/network.svg'/>
          <span className='ps-2 popver-title'>Network</span>
        </div>
        <div className='d-flex justify-content-end popver-title'>{activeNetwork.meta?.name}</div>
      </div>

      <div className='pt-5'>
        <hr className='popover-divider pt-5'></hr>
      </div>
 
      <div className='pb-3'>
        <PortfolioButton title='Sign Out' handleClick={() => wallet.disconnect()} />
      </div>
     
    </div>
  )

  if (wallet.connecting) {
    return (
      <Popover 
        content={walletConnPop}
      >
        <a
          type="button"
          className='btn btn-sm btn-light-primary align-items-center'
          data-bs-toggle="modal"
          data-bs-target='#hipo_connect_wallet'
          id='hipo_wallet_connect_button'
          width='300px'
          style={{
            backgroundImage: `url('/media/background/background-connectwallet.png')`,
            backgroundRepeat: 'no-repeat',
            color: "white"
          }}
        >
          Connecting...
        </a>
      </Popover>
    )
  }

  if (!wallet.isActive) {

    return (       
      <div
        type="button"
        className='d-flex justify-content-center align-items-center wallet-button flex-shrink-0'
        onClick={() => wallet.showWalletsModal()}>        
        <span>Connect Wallet</span>
      </div>       
    )
  }

  return (
    <Popover
      overlayClassName='antd-popover'
      content={walletConnPop}
      >
      <button type="button" className="btn d-flex align-items-center pe-8 wallet-connected"
        data-kt-menu-trigger='click'
        data-kt-menu-placement='bottom'
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
            <img className='h-20px' src='./media/icons/metamaskIcon.svg' alt='' />
          )}
        <span className="ps-3 fs-6 fw-bolder">{ wallet.ens.name || shortenAddr(wallet.account, 4, 3) }</span>    
      </button>
    </Popover>  
  ) 
}

export default ConnectWalletButton