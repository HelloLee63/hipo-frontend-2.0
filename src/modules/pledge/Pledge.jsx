import { useState } from "react"
import PromptInfoCard from "../../components/custom/prompt-info-card/PromptInfoCard"
import RatesTable from "../../components/custom/rates-table/RatesTable"
import PledgeForm from "./components/PledgeForm"

const Pledge = () => {
  const promptInfo = {
    title: "Pledge",
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
          <PledgeForm />
        </div>                        
      </div>
    </>
  )
}

export default Pledge