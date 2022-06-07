import GeneralProvider from "./components/provider/generalProvider";
import KnownTokensProvider from "./components/provider/knownTokensProvider";
import PoolsProvider from "./components/provider/poolsProvider";
import { LayoutProvider } from "./layout/core";
import { MasterInit } from "./layout/MasterInit";
import ConfigProvider from "./network/configProvider";
import NetworkProvider from "./network/networkProvider";
import AppRouters from "./routing/AppRouters";
import WalletProvider from "./wallet/walletProvider";
import FinancingPoolProvider from "./web3/components/providers/FinancingPoolProvider";
import ProtocolDataProvider from "./web3/components/providers/ProtocolDataProvider";
import WalletDataProvider from "./web3/components/providers/WalletDataProvider";
import ContractManagerProvider from "./web3/contractManagerProvider";
import Web3Provider from "./web3/web3Provider";

function App() {
  
  return (
    <>
      <GeneralProvider>
        <LayoutProvider>
          <NetworkProvider>
            <ConfigProvider>
              <WalletProvider>
                <Web3Provider>
                  <ContractManagerProvider>
                    <KnownTokensProvider>
                      <PoolsProvider>
                        <ProtocolDataProvider>
                          <WalletDataProvider>
                            <FinancingPoolProvider>
                              <AppRouters />
                            </FinancingPoolProvider>
                          </WalletDataProvider>
                        </ProtocolDataProvider>
                      </PoolsProvider>
                    </KnownTokensProvider>
                  </ContractManagerProvider>
                  <MasterInit />
                </Web3Provider>
              </WalletProvider>
            </ConfigProvider>
          </NetworkProvider>
        </LayoutProvider>
      </GeneralProvider>  
    </>    
  );
}

export default App;
