import BigNumber from "bignumber.js"
import { format } from "date-fns"
import TransactionItem from "../../../../components/custom/transaction-item/TransactionItem"
import { usePools } from "../../../../components/provider/poolsProvider"
import { formatBigValue, getHumanValue } from "../../../../helpers/web3/utils"

const TransactionsList = ({transactionsRecords}) => {

  const txsLength = transactionsRecords.count
  const { getCollateralPoolByAddress } = usePools()

  const txDescription = ({event:event, tx: tx}) => {

    switch(event) {
      
      case 'Pledge':
        const pledgeAsset = tx?.returnValues.collateralAsset
        const pledgePool = getCollateralPoolByAddress(pledgeAsset)
        const pledgeDecimals = pledgePool.collateralAsset.decimals
        const pledgeOriginalAmount = new BigNumber(tx?.returnValues.collateralAssetAmount)
        const pledgeAmount = formatBigValue(getHumanValue(pledgeOriginalAmount, pledgeDecimals))
        return {
          title: "Pledge",
          description: `You have pledged ${pledgeAmount} ${pledgePool.collateralAsset.symbol}.`
        }
        
      case 'Redeem':
        const asset = tx?.returnValues.collateralAsset
        const pool = getCollateralPoolByAddress(asset)
        const decimals = pool.collateralAsset.decimals
        const originalAmount = new BigNumber(tx?.returnValues.collateralAssetAmount)
        const amount = formatBigValue(getHumanValue(originalAmount, decimals))
        return {
          title: "Redeem",
          description: `You have pledged ${amount} ${pool.collateralAsset.symbol}.`
        }
      default:
        return {
          title: event,
          description: 'You have borrowed 800 USDC on Hipo. Your principle will be due in 10 days on Jun 25 2022 08:35:28.'
        }
    } 
  }

  return (
    <>
      <div className="graph-title pt-7">Transactions</div>
      <div className="graph-date pt-7" >{format(transactionsRecords.date, 'PP')}</div>
      {txsLength > 0 ? 
        (
          <div>          
            {transactionsRecords.txs.map((item, index) => (
              <TransactionItem key={index}
                transactionIcon={`./media/icons/transaction-item-${item.event}.svg`}
                transactionDate={format(item.date, 'pp')}
                transactionTitle={item.event}
                transactionDescription={
                  txDescription(
                    {
                      event:item.event, 
                      tx:item.txOriginal.userAllTransactions.transaction
                      // tx: {
                      //   returnValues: {
                      //     collateralAsset:"0x81b94766463E059a4196081f88DBBF7e7c945726",
                      //     collateralAssetAmount:"1000000000000000000"
                      //   }
                      // }
                    }
                  ).description
                } />
              
              ))}
          </div>
        ) : (
          <div className="d-flex align-items-center justify-content-center">
            <div className="w-50 d-flex align-items-center justify-content-center transaction-list-empty m-5">
              No transactions
            </div>
          </div>
        )
      }
    </>

  )
}

export default TransactionsList