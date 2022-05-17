import clsx from 'clsx'
import ConnectNetworkButton from '../../../network/components/connect-network-button/ConnectNetworkButton'
import ConnectWalletButton from '../../../wallet/components/connect-wallet-button/ConnectWalletButton'

const toolbarButtonMarginClass = 'ms-1 ms-lg-3'

const Topbar = () => {
  return (
    <div className='d-flex align-items-stretch flex-shrink-0'>
      <div className='topbar d-flex align-items-stretch flex-shrink-0'>
        <div className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}>         
          <ConnectNetworkButton />
        </div>
        
        <div className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}>
          <ConnectWalletButton />
        </div>        
      </div>
    </div>
  )
}

export {Topbar}

