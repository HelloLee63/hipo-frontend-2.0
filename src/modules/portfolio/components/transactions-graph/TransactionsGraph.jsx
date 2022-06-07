import TransactionsList from "../transactions-list/TransactionsList";
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from "react-tooltip";
import { usePortfolioProvider } from "../../provider/PortfolioProvider";
import { useEffect, useState } from "react";
import { useWallet } from "../../../../wallet/walletProvider";
import { format } from "date-fns";

const TransactionsGraph = () => {

  const { fetchUserTransactionsRecord } = usePortfolioProvider()
  const wallet = useWallet()

  const [rawTransactions, setRawTransactions] = useState()

  const [txsList, setTxsList] = useState({
    date: new Date(),
    txs: {length: 0}
  })

  const startDay = new Date('2021-12-31T09:00:00')
  // const endDay = new Date('2022-12-31T09:00:00')
  const endDay = new Date()

  const txYear = 2022

  const txs = rawTransactions?.read().map(tx => tx.read())

  const [tooltip, showTooltip] = useState(true);

  const userTxsOriginalDatas = txs?.map(tx => {
    const result = {
      event: tx.userAllTransactions.transaction.event,
      date: new Date(tx.userAllTransactions.block.timestamp * 1000),
      txOriginal: tx 
    }
    return result
  })

  console.log(txsList);

  const randomValues = getRange(400).map(index => {
    return {
      date: shiftDate(startDay, index),
      count: userTxsOriginalDatas?.filter(tx => format(tx.date, 'PP') === format(shiftDate(startDay, index), 'PP')).length
    };
  });

  useEffect(() => {
    setRawTransactions(() => fetchUserTransactionsRecord())
  }, [wallet.account])

  useEffect(() => {
    getTransactionsOfDay(new Date())
  }, [])

  function shiftDate(date, numDays) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numDays);
    return newDate;
  }
  
  function getRange(count) {
    return Array.from({ length: count }, (_, i) => i);
  }
  
  function getTransactionsOfDay(date) {
    setTxsList((preState) => ({
      ...preState,
      date: date,
      txs: userTxsOriginalDatas?.filter(tx => format(tx.date, 'PP') === format(date, 'PP')) ?? [],
      count: (userTxsOriginalDatas?.filter(tx => format(tx.date, 'PP') === format(date, 'PP')) ?? []).length
    }))    
  }
  
  return (
    <div className="d-flex flex-column transaction-graph">
      <div className="graph-title pt-8">{`${txs?.length} transactions in ${txYear}`}</div>
      <div className="graph mt-8">
        <div 
          className="ps-5 pe-5 pt-5"
          onMouseEnter={() => showTooltip(true)}
          onMouseLeave={() => showTooltip(false)}
        >
          <CalendarHeatmap
            startDate={startDay}
            endDate={endDay}
            values={randomValues}
            showWeekdayLabels={true}
            classForValue={value => {
              if (!value) {
                return 'color-empty';
              }
              if (value.count > 4) {
                return `color-github-4`
              }
              return `color-github-${value.count}`;
            }}
            tooltipDataAttrs={value => {
              return {
                'data-tip': `${format(value.date, 'PPPP')} has transactions: ${
                  value.count
                }`,
              };
            }}
            
            onClick={value => getTransactionsOfDay(value.date)}
          />

          { tooltip && <ReactTooltip 
            className='transaction-tool-tips'
            effect='solid'/> }
        </div>

        <div className="d-flex justify-content-end pe-5">
          <span>Less</span>
          <div className="ps-2">
            <span className="d-flex ps-1 transaction-graph-legend-1"></span>
          </div>
          <div className="ps-1">
            <span className="d-flex ps-1 transaction-graph-legend-2"></span>
          </div>
          <div className="ps-1">
            <span className="d-flex ps-1 transaction-graph-legend-3"></span>
          </div>
          <div className="ps-1 pe-2">
            <span className="d-flex ps-1 transaction-graph-legend-4"></span>
          </div>
          <span>More</span>
        </div>
      </div>
      <div className="pt-3 pb-10">
        <TransactionsList transactionsRecords={txsList}/>
      </div>
    </div>
  )
}

export default TransactionsGraph