import { createContext, useContext } from "react";
import { InvariantContext } from "../../../helpers/context";
import { useConfig } from "../../../network/configProvider";
import { useContract } from "../../contractManagerProvider";
import FinancingPoolContract from "../../contracts/FinancingPoolContract";

function useFinancingPoolContract(address) {
    return useContract(address, () => {
        return new FinancingPoolContract(address)
    })
}

const Context = createContext(InvariantContext('FinancingPoolProvider'))

export function useFinancingPool() {
    return useContext(Context)
}

const FinancingPoolProvider = props => {

    const { children } = props
    const config = useConfig()

    const financingPoolContract = useFinancingPoolContract(config.contracts.financingPool.financingPool)

    const value = {
        financingPoolContract
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider> 
    )
}

export default FinancingPoolProvider