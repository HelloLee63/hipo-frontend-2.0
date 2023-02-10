/* eslint-disable react-hooks/exhaustive-deps */
import RatesTable from "../../components/custom/rates-table/RatesTable"
import { usePools } from "../../components/provider/poolsProvider"
import SupportedAssetsCard from "./components/supported-assets-card/SupportedAssetsCard"
import TransactionLink from "./components/transaction-link/TransactionLink"

const PortfolioViewNoWallet = () => {

  const { assets, collateralPools} = usePools()

  const links = {
    borrow: {
      icon: './media/menu/menu-borrow.svg',
      text: 'Borrow at a fixed rate',
      to: '/borrow'
    },
    lend: {
      icon: './media/menu/menu-lend.svg',
      text: 'Lend & earn fixed returns',
      to: '/lending'
    },
    pools: {
      icon: './media/menu/menu-pool.svg',
      text: 'Provide liquidity & earn Hipo rewards',
      to: '/pools'
    },
    pledge: {
      icon: './media/menu/menu-pledge.svg',
      text: 'Pledge collateral to be able to borrow',
      to: '/pledge'
    },
  }

  const pageTexts = {
    content1: {
      title: 'What would you like to use Hipo for?',
      description: ''
    },
    content2: {
      title: 'Explore Lending & Borrowing Markets',
      description: 'Our fCash markets offer fixed rate loans to specific maturity dates so you know exactly how much interest you will earn or owe, and when.'
    },
    content3: {
      title: 'Explore liquidity provider opportunities',
      description: 'Our fCash markets offer fixed rate loans to specific maturity dates so you know exactly how much interest you will earn or owe, and when.'
    }
  }

  const portfolioAssets = {
    collaterals: collateralPools.map(pool => pool.collateralAsset),
    assets: assets.map(asset => asset)
  }

  console.log(portfolioAssets);

  return (
    <div className="portfolio-view-no-wallet">
      <div className="portfolio-view-no-wallet-title">
        {pageTexts.content1.title}
      </div>
      <div className="pt-10 d-flex flex-column">
        <TransactionLink icon={links.borrow.icon} linkContent={links.borrow.text} to={links.borrow.to}/>
      </div>
      <div className="pt-5 d-flex flex-column">
        <TransactionLink icon={links.lend.icon} linkContent={links.lend.text} to={links.lend.to}/>
      </div>
      <div className="pt-5 d-flex flex-column">
        <TransactionLink icon={links.pools.icon} linkContent={links.pools.text} to={links.pools.to}/>
      </div>
      <div className="pt-5 d-flex flex-column">
        <TransactionLink icon={links.pledge.icon} linkContent={links.pledge.text} to={links.pledge.to}/>
      </div>
      {/* <div className='row align-items-start gy-5 g-xl-8 pt-5 justify-content-center'>        
        <div className='col-md-7'>          
          <SupportedAssetsCard title='Supported Collaterals' assets={portfolioAssets.collaterals} />                    
        </div>
        <div className='col-md-5 align-self-center'>
          <SupportedAssetsCard title='Supported Assets' assets={portfolioAssets.assets} />
        </div>                        
      </div> */}

      <div className="pt-15 portfolio-view-no-wallet-title">
        {pageTexts.content2.title}
      </div>
      <div className="pt-5 portfolio-view-no-wallet-description">
        {pageTexts.content2.description}
      </div>
      <div className="pt-10">
        <RatesTable />
      </div>
      <div className="pt-15 portfolio-view-no-wallet-title">
        {pageTexts.content3.title}
      </div>
      <div className="pt-5 portfolio-view-no-wallet-description">
        {pageTexts.content3.description}
      </div>
      <div className="pt-10">
        <RatesTable />
      </div>
    </div>
  )
}

export default PortfolioViewNoWallet