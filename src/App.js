import MaxButton from "./components/custom/max-button/MaxButton";
import TokenAmountLable from "./components/custom/token-amount-lable/TokenAmountLable";
import TokenIcon from "./components/custom/token-icon/TokenIcon";
import TransactionFormCard from "./components/custom/transaction-form-card/TransactionFormCard";
import TransactionInfo from "./components/custom/transaction-info/TransactionInfo";
import { Header } from "./layout/components/header/Header";
import { HeaderWrapper } from "./layout/components/header/HeaderWrapper";
import AppRouters from "./routing/AppRouters";


function App() {
  return (
    <>
      <AppRouters />
    </>
    // <div>
    //   Hipo: Decentralized Fixed Interest Protocol
    //   <TokenIcon   
    //     tokenIcon = '/media/tokens/DAI.svg'
    //     tokenSymbol = 'DAI'
    //     tokenName = 'Dai Stablecoin'
    //     iconSize = '2'/>
    //   <TransactionFormCard />
    //   <MaxButton />
    //   <TransactionInfo />
    //   <TokenAmountLable amount='300' valueInUsDollar='2000' />
    //   <AppRouters />
    //   <TransactionInfo text1='How much' text2='please click the button' />
    //   <HeaderWrapper />
    // </div>
  );
}

export default App;
