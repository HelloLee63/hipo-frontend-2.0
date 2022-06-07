import PromptInfoCard from "../../components/custom/prompt-info-card/PromptInfoCard"
import RatesTable from "../../components/custom/rates-table/RatesTable"
import RedeemView from "./views/RedeemView"

const Redeem = () => {
  const promptInfo = {
    title: "Redeem",
    info: "Hipo V1 allows borrowers to pledge with LPs Tokens from Uniswap V2 and take a loan with corresponding currencies. "
  }

  return (
    <>
      <div className='row align-items-start gy-5 g-xl-8 pt-15 justify-content-center'>        
        <div className='col-md-4'>
          <div>
            <PromptInfoCard title={promptInfo.title} text={promptInfo.info}/>
          </div>
          <div className="pt-5">
            <RatesTable />
          </div>          
        </div>
        <div className='col-md-5 align-self-center'>
          <RedeemView />
        </div>                        
      </div>
    </>
  )
}

export default Redeem