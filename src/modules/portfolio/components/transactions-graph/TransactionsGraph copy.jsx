import { useEffect, useRef } from "react";
import TransactionsList from "../transactions-list/TransactionsList";

const TransactionsGraph = () => {

  const squaresRef = useRef(null);
  const transactionsRecords = [{index:'a'}, {index:'b'}]
  const txCounts = 17
  const txYear = 2022

  const graphMonth= 'May'
  const graphDay = '26'
  const graphYear = '2022'
  
  useEffect(() => {
    for (var i = 1; i < 365; i++) {
      const level = Math.floor(Math.random() * 3);  
      squaresRef.current.insertAdjacentHTML('beforeend', `<li data-level="${level}"></li>`);
    }
  }, [squaresRef])
  
  return (
    <div className="d-flex flex-column transaction-graph">
      <div className="graph-title pt-8">{`${txCounts} transactions in ${txYear}`}</div>
        <div className="graph mt-8">
          <ul className="months">
            <li>Jan</li>
            <li>Feb</li>
            <li>Mar</li>
            <li>Apr</li>
            <li>May</li>
            <li>Jun</li>
            <li>Jul</li>
            <li>Aug</li>
            <li>Sep</li>
            <li>Oct</li>
            <li>Nov</li>
            <li>Dec</li>
          </ul>
          <ul className="days">
            <li>Sun</li>
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
            <li>Sat</li>
          </ul>
          <ul ref={squaresRef} className="squares">          
          </ul>
        </div>
      <div className="graph-title pt-7">Transactions</div>
      <div className="graph-date pt-7" >{`${graphMonth}  ${graphDay}/${graphYear}`}</div>
      <div className="pt-3 pb-10">
        <TransactionsList transactionsRecords={transactionsRecords}/>
      </div>
    </div>
  )
}

export default TransactionsGraph