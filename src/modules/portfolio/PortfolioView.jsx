import { Suspense } from "react";
import Avatar from "../../components/custom/portfolio/avatar/Avatar";
import CollateralsList from "./components/collaterals-list/CollateralsList";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import TransactionsGraph from "./components/transactions-graph/TransactionsGraph";
import OverviewData from "./components/overview-data/OverviewData";

const PortfolioView = () => {

  const spinner = (
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  )

  return (
    <Suspense fallback={spinner}> 
      <div className='card form-card'>
        <div className='card-body'>
          <Suspense fallback={spinner}> 
            <Avatar />
          </Suspense>        
        </div>

        <div className='card-body'>
          <Suspense fallback={spinner}> 
            <div className='row gy-5 g-xl-8 ps-2 pe-2'>        
              <div className='col-6 col-lg-3'>   
                <OverviewData icon='./media/icons/overview-icon-borrow.svg' title='You borrowed' valueInDallar='$30480'/>
              </div>
              <div className='col-6 col-lg-3'>   
                <OverviewData icon='./media/icons/overview-icon-lend.svg' title='You lend' valueInDallar='$30480'/>
              </div>
              <div className='col-6 col-lg-3'>   
                <OverviewData icon='./media/icons/overview-icon-lend.svg' title='You lend' valueInDallar='$30480'/>
              </div>
              <div className='col-6 col-lg-3'>   
                <OverviewData icon='./media/icons/overview-icon-lend.svg' title='You lend' valueInDallar='$30480'/>
              </div>                        
            </div>
          </Suspense>        
        </div>

        <div className='card-body'>
          <Suspense fallback={spinner}> 
            <TransactionsGraph />
          </Suspense>          
        </div>

        <div className='card-body pb-15'>         
          <Tabs defaultIndex={0} selectedTabClassName='portfolio-tab-active'>
            <TabList className='d-flex portfolio-tablist'>              
              <Tab className='portfolio-tab'>
                Borrow
              </Tab>
              <Tab className='portfolio-tab'>
                Lend
              </Tab>
              <Tab className='portfolio-tab'>
                Pools
              </Tab>
              <Tab className='portfolio-tab'>
                Collaterals
              </Tab>
            </TabList>
            <TabPanel>
              test0
            </TabPanel>
            <TabPanel>
              test1
            </TabPanel>
            <TabPanel>
              test2
            </TabPanel>
            <TabPanel>
              <Suspense fallback={spinner}> 
                <CollateralsList />
              </Suspense>
            </TabPanel>
          </Tabs>
        </div>
      </div>          
    </Suspense>  
  )
}

export default PortfolioView