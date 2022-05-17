import { createContext, useCallback, useContext, useMemo } from 'react';
import { InvariantContext } from '../../helpers/context';
import { useConfig } from '../../network/configProvider';
import { useBondTokenContract, useDebtTokenContract, useErc20Contract } from '../../web3/contractManagerProvider';

export const KnownTokens = {
  ETH: 'ETH',
  WETH: 'WETH',
  USDC: 'USDC',
  DAI: 'DAI',
  USDT: 'USDT',
}

export const UniLpTokens = {
  usdcwethLpToken: 'USDC/WETH',
  wethusdtLpToken: 'WETH/USDT',
  daiwethLpToken: 'DAI/WETH'
}

export const ColTokens = {
  cuUSDCWETH: 'cuUSDCWETH',
  cuWETHUSDT: 'cuWETHUSDT',
  cuDAIWETH: 'cuDAIWETH'
}

export const LpTokens = {
  lpWETH5: 'lpWETH5',
  lpWETH10: 'lpWETH10',
  lpWETH15: 'lpWETH15',
  lpWETH30: 'lpWETH30',
  lpWETH45: 'lpWETH45',
  lpWETH60: 'lpWETH60',
  lpUSDC5: 'lpUSDC5',
  lpUSDC10: 'lpUSDC10',
  lpUSDC15: 'lpUSDC15',
  lpUSDC30: 'lpUSDC30',
  lpUSDC45: 'lpUSDC45',
  lpUSDC60: 'lpUSDC60',
  lpDAI5: 'lpDAI5',
  lpDAI10: 'lpDAI10',
  lpDAI15: 'lpDAI15',
  lpDAI30: 'lpDAI30',
  lpDAI45: 'lpDAI45',
  lpDAI60: 'lpDAI60',
  lpUSDT5: 'lpUSDT5',
  lpUSDT10: 'lpUSDT10',
  lpUSDT15: 'lpUSDT15',
  lpUSDT30: 'lpUSDT30',
  lpUSDT45: 'lpUSDT45',
  lpUSDT60: 'lpUSDT60',
}

export const BondTokens = {
  bWETH5: 'bWETH5',
  bWETH10: 'bWETH10',
  bWETH15: 'bWETH15',
  bWETH30: 'bWETH30',
  bWETH45: 'bWETH45',
  bWETH60: 'bWETH60',
  bUSDC5: 'bUSDC5',
  bUSDC10: 'bUSDC10',
  bUSDC15: 'bUSDC15',
  bUSDC30: 'bUSDC30',
  bUSDC45: 'bUSDC45',
  bUSDC60: 'bUSDC60',
  bDAI5: 'bDAI5',
  bDAI10: 'bDAI10',
  bDAI15: 'bDAI15',
  bDAI30: 'bDAI30',
  bDAI45: 'bDAI45',
  bDAI60: 'bDAI60',
  bUSDT5: 'bUSDT5',
  bUSDT10: 'bUSDT10',
  bUSDT15: 'bUSDT15',
  bUSDT30: 'bUSDT30',
  bUSDT45: 'bUSDT45',
  bUSDT60: 'bUSDT60',
}

export const DebtTokens = {
  dWETH5: 'dWETH5',
  dWETH10: 'dWETH10',
  dWETH15: 'dWETH15',
  dWETH30: 'dWETH30',
  dWETH45: 'dWETH45',
  dWETH60: 'dWETH60',
  dUSDC5: 'dUSDC5',
  dUSDC10: 'dUSDC10',
  dUSDC15: 'dUSDC15',
  dUSDC30: 'dUSDC30',
  dUSDC45: 'dUSDC45',
  dUSDC60: 'dUSDC60',
  dUSDT5: 'dUSDT5',
  dUSDT10: 'dUSDT10',
  dUSDT15: 'dUSDT15',
  dUSDT30: 'dUSDT30',
  dUSDT45: 'dUSDT45',
  dUSDT60: 'dUSDT60',
  dDAI5: 'dDAI5',
  dDAI10: 'dDAI10',
  dDAI15: 'dDAI15',
  dDAI30: 'dDAI30',
  dDAI45: 'dDAI45',
  dDAI60: 'dDAI60',
}

const Context = createContext(InvariantContext('KnownTokensProvider'));

export function useKnownTokens() {
  return useContext(Context);
}

const KnownTokensProvider = props => {

  const { children } = props;
  const config = useConfig();

  const wethContract = useErc20Contract(config.tokens.weth);
  const usdcContract = useErc20Contract(config.tokens.usdc);
  const usdtContract = useErc20Contract(config.tokens.usdt);
  const daiContract = useErc20Contract(config.tokens.dai);

  //Uniswap V2 LP Tokens
 
  const usdcwethLpTokenContract = useErc20Contract(config.tokens.usdcwethLpToken);
  const wethusdtLpTokenContract = useErc20Contract(config.tokens.wethusdtLpToken);
  const daiwethLpTokenContract = useErc20Contract(config.tokens.daiwethLpToken);

  //Col tokens

  const cuUSDCWETHContract = useErc20Contract(config.tokens.cuUSDCWETH)
  const cuWETHUSDTContract = useErc20Contract(config.tokens.cuWETHUSDT)
  const cuDAIWETHContract = useErc20Contract(config.tokens.cuDAIWETH)

  //Lp Tokens

  const lpWETH5Contract = useErc20Contract(config.tokens.lpWETH5)
  const lpWETH10Contract = useErc20Contract(config.tokens.lpWETH10)
  const lpWETH15Contract = useErc20Contract(config.tokens.lpWETH15)
  const lpWETH30Contract = useErc20Contract(config.tokens.lpWETH30)
  const lpWETH45Contract = useErc20Contract(config.tokens.lpWETH45)
  const lpWETH60Contract = useErc20Contract(config.tokens.lpWETH60)
  const lpUSDC5Contract = useErc20Contract(config.tokens.lpUSDC5)
  const lpUSDC10Contract = useErc20Contract(config.tokens.lpUSDC10)
  const lpUSDC15Contract = useErc20Contract(config.tokens.lpUSDC15)
  const lpUSDC30Contract = useErc20Contract(config.tokens.lpUSDC30)
  const lpUSDC45Contract = useErc20Contract(config.tokens.lpUSDC45)
  const lpUSDC60Contract = useErc20Contract(config.tokens.lpUSDC60)
  const lpUSDT5Contract = useErc20Contract(config.tokens.lpUSDT5)
  const lpUSDT10Contract = useErc20Contract(config.tokens.lpUSDT10)
  const lpUSDT15Contract = useErc20Contract(config.tokens.lpUSDT15)
  const lpUSDT30Contract = useErc20Contract(config.tokens.lpUSDT30)
  const lpUSDT45Contract = useErc20Contract(config.tokens.lpUSDT45)
  const lpUSDT60Contract = useErc20Contract(config.tokens.lpUSDT60)  
  const lpDAI5Contract = useErc20Contract(config.tokens.lpDAI5)
  const lpDAI10Contract = useErc20Contract(config.tokens.lpDAI10)
  const lpDAI15Contract = useErc20Contract(config.tokens.lpDAI15)
  const lpDAI30Contract = useErc20Contract(config.tokens.lpDAI30)
  const lpDAI45Contract = useErc20Contract(config.tokens.lpDAI45)
  const lpDAI60Contract = useErc20Contract(config.tokens.lpDAI60)

  //Debt Tokens

  const dWETH5Contract = useDebtTokenContract(config.tokens.dWETH5)
  const dWETH10Contract = useDebtTokenContract(config.tokens.dWETH10)
  const dWETH15Contract = useDebtTokenContract(config.tokens.dWETH15)
  const dWETH30Contract = useDebtTokenContract(config.tokens.dWETH30)
  const dWETH45Contract = useDebtTokenContract(config.tokens.dWETH45)
  const dWETH60Contract = useDebtTokenContract(config.tokens.dWETH60)
  const dUSDC5Contract = useDebtTokenContract(config.tokens.dUSDC5)
  const dUSDC10Contract = useDebtTokenContract(config.tokens.dUSDC10)
  const dUSDC15Contract = useDebtTokenContract(config.tokens.dUSDC15)
  const dUSDC30Contract = useDebtTokenContract(config.tokens.dUSDC30)
  const dUSDC45Contract = useDebtTokenContract(config.tokens.dUSDC45)
  const dUSDC60Contract = useDebtTokenContract(config.tokens.dUSDC60)
  const dUSDT5Contract = useDebtTokenContract(config.tokens.dUSDT5)
  const dUSDT10Contract = useDebtTokenContract(config.tokens.dUSDT10)
  const dUSDT15Contract = useDebtTokenContract(config.tokens.dUSDT15)
  const dUSDT30Contract = useDebtTokenContract(config.tokens.dUSDT30)
  const dUSDT45Contract = useDebtTokenContract(config.tokens.dUSDT45)
  const dUSDT60Contract = useDebtTokenContract(config.tokens.dUSDT60)  
  const dDAI5Contract = useDebtTokenContract(config.tokens.dDAI5)
  const dDAI10Contract = useDebtTokenContract(config.tokens.dDAI10)
  const dDAI15Contract = useDebtTokenContract(config.tokens.dDAI15)
  const dDAI30Contract = useDebtTokenContract(config.tokens.dDAI30)
  const dDAI45Contract = useDebtTokenContract(config.tokens.dDAI45)
  const dDAI60Contract = useDebtTokenContract(config.tokens.dDAI60)

  //Bond Tokens

  const bWETH5Contract = useBondTokenContract(config.tokens.bWETH5)
  const bWETH10Contract = useBondTokenContract(config.tokens.bWETH10)
  const bWETH15Contract = useBondTokenContract(config.tokens.bWETH15)
  const bWETH30Contract = useBondTokenContract(config.tokens.bWETH30)
  const bWETH45Contract = useBondTokenContract(config.tokens.bWETH45)
  const bWETH60Contract = useBondTokenContract(config.tokens.bWETH60)
  const bUSDC5Contract = useBondTokenContract(config.tokens.bUSDC5)
  const bUSDC10Contract = useBondTokenContract(config.tokens.bUSDC10)
  const bUSDC15Contract = useBondTokenContract(config.tokens.bUSDC15)
  const bUSDC30Contract = useBondTokenContract(config.tokens.bUSDC30)
  const bUSDC45Contract = useBondTokenContract(config.tokens.bUSDC45)
  const bUSDC60Contract = useBondTokenContract(config.tokens.bUSDC60)
  const bUSDT5Contract = useBondTokenContract(config.tokens.bUSDT5)
  const bUSDT10Contract = useBondTokenContract(config.tokens.bUSDT10)
  const bUSDT15Contract = useBondTokenContract(config.tokens.bUSDT15)
  const bUSDT30Contract = useBondTokenContract(config.tokens.bUSDT30)
  const bUSDT45Contract = useBondTokenContract(config.tokens.bUSDT45)
  const bUSDT60Contract = useBondTokenContract(config.tokens.bUSDT60)  
  const bDAI5Contract = useBondTokenContract(config.tokens.bDAI5)
  const bDAI10Contract = useBondTokenContract(config.tokens.bDAI10)
  const bDAI15Contract = useBondTokenContract(config.tokens.bDAI15)
  const bDAI30Contract = useBondTokenContract(config.tokens.bDAI30)
  const bDAI45Contract = useBondTokenContract(config.tokens.bDAI45)
  const bDAI60Contract = useBondTokenContract(config.tokens.bDAI60)

  const debtTokens = useMemo(
    () => [
      {
        symbol: DebtTokens.dWETH5,
        address: config.tokens.dWETH5.toLowerCase(),
        decimals: 18,
        contract: dWETH5Contract
      },
      {
        symbol: DebtTokens.dWETH10,
        address: config.tokens.dWETH10.toLowerCase(),
        decimals: 18,
        contract: dWETH10Contract
      },
      {
        symbol: DebtTokens.dWETH15,
        address: config.tokens.dWETH15.toLowerCase(),
        decimals: 18,
        contract: dWETH15Contract
      },
      {
        symbol: DebtTokens.dWETH30,
        address: config.tokens.dWETH30.toLowerCase(),
        decimals: 18,
        contract: dWETH30Contract
      },
      {
        symbol: DebtTokens.dWETH45,
        address: config.tokens.dWETH45.toLowerCase(),
        decimals: 18,
        contract: dWETH45Contract
      },
      {
        symbol: DebtTokens.dWETH60,
        address: config.tokens.dWETH60.toLowerCase(),
        decimals: 18,
        contract: dWETH60Contract
      },
      {
        symbol: DebtTokens.dUSDC5,
        address: config.tokens.dUSDC5.toLowerCase(),
        decimals: 6,
        contract: dUSDC5Contract
      },
      {
        symbol: DebtTokens.dUSDC10,
        address: config.tokens.dUSDC10.toLowerCase(),
        decimals: 6,
        contract: dUSDC10Contract
      },
      {
        symbol: DebtTokens.dUSDC15,
        address: config.tokens.dUSDC15.toLowerCase(),
        decimals: 6,
        contract: dUSDC15Contract
      },
      {
        symbol: DebtTokens.dUSDC30,
        address: config.tokens.dUSDC30.toLowerCase(),
        decimals: 6,
        contract: dUSDC30Contract
      },
      {
        symbol: DebtTokens.dUSDC45,
        address: config.tokens.dUSDC45.toLowerCase(),
        decimals: 6,
        contract: dUSDC45Contract
      },
      {
        symbol: DebtTokens.dUSDC60,
        address: config.tokens.dUSDC60.toLowerCase(),
        decimals: 6,
        contract: dUSDC60Contract
      },
      {
        symbol: DebtTokens.dUSDT5,
        address: config.tokens.dUSDT5.toLowerCase(),
        decimals: 6,
        contract: dUSDT5Contract
      },
      {
        symbol: DebtTokens.dUSDT10,
        address: config.tokens.dUSDT10.toLowerCase(),
        decimals: 6,
        contract: dUSDT10Contract
      },
      {
        symbol: DebtTokens.dUSDT15,
        address: config.tokens.dUSDT15.toLowerCase(),
        decimals: 6,
        contract: dUSDT15Contract
      },
      {
        symbol: DebtTokens.dUSDT30,
        address: config.tokens.dUSDT30.toLowerCase(),
        decimals: 6,
        contract: dUSDT30Contract
      },
      {
        symbol: DebtTokens.dUSDT45,
        address: config.tokens.dUSDT45.toLowerCase(),
        decimals: 6,
        contract: dUSDT45Contract
      },
      {
        symbol: DebtTokens.dUSDT60,
        address: config.tokens.dUSDT60.toLowerCase(),
        decimals: 6,
        contract: dUSDT60Contract
      },
      {
        symbol: DebtTokens.dDAI5,
        address: config.tokens.dDAI5.toLowerCase(),
        decimals: 18,
        contract: dDAI5Contract
      },
      {
        symbol: DebtTokens.dDAI10,
        address: config.tokens.dDAI5.toLowerCase(),
        decimals: 18,
        contract: dDAI10Contract
      },
      {
        symbol: DebtTokens.dDAI15,
        address: config.tokens.dDAI15.toLowerCase(),
        decimals: 18,
        contract: dDAI15Contract
      },
      {
        symbol: DebtTokens.dDAI30,
        address: config.tokens.dDAI30.toLowerCase(),
        decimals: 18,
        contract: dDAI30Contract
      },
      {
        symbol: DebtTokens.dDAI45,
        address: config.tokens.dDAI45.toLowerCase(),
        decimals: 18,
        contract: dDAI45Contract
      },
      {
        symbol: DebtTokens.dDAI60,
        address: config.tokens.dDAI60.toLowerCase(),
        decimals: 18,
        contract: dDAI60Contract
      },
    ], []
  )

  const lpTokens = useMemo(
    () => [
      {
        symbol: LpTokens.lpWETH5,
        address: config.tokens.lpWETH5.toLowerCase(),
        decimals: 18,
        contract: lpWETH5Contract
      },
      {
        symbol: LpTokens.lpWETH10,
        address: config.tokens.lpWETH10.toLowerCase(),
        decimals: 18,
        contract: lpWETH10Contract
      },
      {
        symbol: LpTokens.lpWETH15,
        address: config.tokens.lpWETH15.toLowerCase(),
        decimals: 18,
        contract: lpWETH15Contract
      },
      {
        symbol: LpTokens.lpWETH30,
        address: config.tokens.lpWETH30.toLowerCase(),
        decimals: 18,
        contract: lpWETH30Contract
      },
      {
        symbol: LpTokens.lpWETH45,
        address: config.tokens.lpWETH45.toLowerCase(),
        decimals: 18,
        contract: lpWETH45Contract
      },
      {
        symbol: LpTokens.lpWETH60,
        address: config.tokens.lpWETH60.toLowerCase(),
        decimals: 18,
        contract: lpWETH60Contract
      },
      {
        symbol: LpTokens.lpUSDC5,
        address: config.tokens.lpUSDC5.toLowerCase(),
        decimals: 6,
        contract: lpUSDC5Contract
      },
      {
        symbol: LpTokens.lpUSDC10,
        address: config.tokens.lpUSDC10.toLowerCase(),
        decimals: 6,
        contract: lpUSDC10Contract
      },
      {
        symbol: LpTokens.lpUSDC15,
        address: config.tokens.lpUSDC15.toLowerCase(),
        decimals: 6,
        contract: lpUSDC15Contract
      },
      {
        symbol: LpTokens.lpUSDC30,
        address: config.tokens.lpUSDC30.toLowerCase(),
        decimals: 6,
        contract: lpUSDC30Contract
      },
      {
        symbol: LpTokens.lpUSDC45,
        address: config.tokens.lpUSDC45.toLowerCase(),
        decimals: 6,
        contract: lpUSDC45Contract
      },
      {
        symbol: LpTokens.lpUSDC60,
        address: config.tokens.lpUSDC60.toLowerCase(),
        decimals: 6,
        contract: lpUSDC60Contract
      },
      {
        symbol: LpTokens.lpUSDT5,
        address: config.tokens.lpUSDT5.toLowerCase(),
        decimals: 6,
        contract: lpUSDT5Contract
      },
      {
        symbol: LpTokens.lpUSDT10,
        address: config.tokens.lpUSDT10.toLowerCase(),
        decimals: 6,
        contract: lpUSDT10Contract
      },
      {
        symbol: LpTokens.lpUSDT15,
        address: config.tokens.lpUSDT15.toLowerCase(),
        decimals: 6,
        contract: lpUSDT15Contract
      },
      {
        symbol: LpTokens.lpUSDT30,
        address: config.tokens.lpUSDT30.toLowerCase(),
        decimals: 6,
        contract: lpUSDT30Contract
      },
      {
        symbol: LpTokens.lpUSDT45,
        address: config.tokens.lpUSDT45.toLowerCase(),
        decimals: 6,
        contract: lpUSDT45Contract
      },
      {
        symbol: LpTokens.lpUSDT60,
        address: config.tokens.lpUSDT60.toLowerCase(),
        decimals: 6,
        contract: lpUSDT60Contract
      },
      {
        symbol: LpTokens.lpDAI5,
        address: config.tokens.lpDAI5.toLowerCase(),
        decimals: 18,
        contract: lpDAI5Contract
      },
      {
        symbol: LpTokens.lpDAI10,
        address: config.tokens.lpDAI5.toLowerCase(),
        decimals: 18,
        contract: lpDAI10Contract
      },
      {
        symbol: LpTokens.lpDAI15,
        address: config.tokens.lpDAI15.toLowerCase(),
        decimals: 18,
        contract: lpDAI15Contract
      },
      {
        symbol: LpTokens.lpDAI30,
        address: config.tokens.lpDAI30.toLowerCase(),
        decimals: 18,
        contract: lpDAI30Contract
      },
      {
        symbol: LpTokens.lpDAI45,
        address: config.tokens.lpDAI45.toLowerCase(),
        decimals: 18,
        contract: lpDAI45Contract
      },
      {
        symbol: LpTokens.lpDAI60,
        address: config.tokens.lpDAI60.toLowerCase(),
        decimals: 18,
        contract: lpDAI60Contract
      },
    ], []
  )

  const bondTokens = useMemo(
    () => [
      {
        symbol: BondTokens.bWETH5,
        address: config.tokens.bWETH5.toLowerCase(),
        decimals: 18,
        contract: bWETH5Contract
      },
      {
        symbol: BondTokens.bWETH10,
        address: config.tokens.bWETH10.toLowerCase(),
        decimals: 18,
        contract: bWETH10Contract
      },
      {
        symbol: BondTokens.bWETH15,
        address: config.tokens.bWETH15.toLowerCase(),
        decimals: 18,
        contract: bWETH15Contract
      },
      {
        symbol: BondTokens.bWETH30,
        address: config.tokens.bWETH30.toLowerCase(),
        decimals: 18,
        contract: bWETH30Contract
      },
      {
        symbol: BondTokens.bWETH45,
        address: config.tokens.bWETH45.toLowerCase(),
        decimals: 18,
        contract: bWETH45Contract
      },
      {
        symbol: BondTokens.bWETH60,
        address: config.tokens.bWETH60.toLowerCase(),
        decimals: 18,
        contract: bWETH60Contract
      },
      {
        symbol: BondTokens.bUSDC5,
        address: config.tokens.bUSDC5.toLowerCase(),
        decimals: 6,
        contract: bUSDC5Contract
      },
      {
        symbol: BondTokens.bUSDC10,
        address: config.tokens.bUSDC10.toLowerCase(),
        decimals: 6,
        contract: bUSDC10Contract
      },
      {
        symbol: BondTokens.bUSDC15,
        address: config.tokens.bUSDC15.toLowerCase(),
        decimals: 6,
        contract: bUSDC15Contract
      },
      {
        symbol: BondTokens.bUSDC30,
        address: config.tokens.bUSDC30.toLowerCase(),
        decimals: 6,
        contract: bUSDC30Contract
      },
      {
        symbol: BondTokens.bUSDC45,
        address: config.tokens.bUSDC45.toLowerCase(),
        decimals: 6,
        contract: bUSDC45Contract
      },
      {
        symbol: BondTokens.bUSDC60,
        address: config.tokens.bUSDC60.toLowerCase(),
        decimals: 6,
        contract: bUSDC60Contract
      },
      {
        symbol: BondTokens.bUSDT5,
        address: config.tokens.bUSDT5.toLowerCase(),
        decimals: 6,
        contract: bUSDT5Contract
      },
      {
        symbol: BondTokens.bUSDT10,
        address: config.tokens.bUSDT10.toLowerCase(),
        decimals: 6,
        contract: bUSDT10Contract
      },
      {
        symbol: BondTokens.bUSDT15,
        address: config.tokens.bUSDT15.toLowerCase(),
        decimals: 6,
        contract: bUSDT15Contract
      },
      {
        symbol: BondTokens.bUSDT30,
        address: config.tokens.bUSDT30.toLowerCase(),
        decimals: 6,
        contract: bUSDT30Contract
      },
      {
        symbol: BondTokens.bUSDT45,
        address: config.tokens.bUSDT45.toLowerCase(),
        decimals: 6,
        contract: bUSDT45Contract
      },
      {
        symbol: BondTokens.bUSDT60,
        address: config.tokens.bUSDT60.toLowerCase(),
        decimals: 6,
        contract: bUSDT60Contract
      },
      {
        symbol: BondTokens.bDAI5,
        address: config.tokens.bDAI5.toLowerCase(),
        decimals: 18,
        contract: bDAI5Contract
      },
      {
        symbol: BondTokens.bDAI10,
        address: config.tokens.bDAI5.toLowerCase(),
        decimals: 18,
        contract: bDAI10Contract
      },
      {
        symbol: BondTokens.bDAI15,
        address: config.tokens.bDAI15.toLowerCase(),
        decimals: 18,
        contract: bDAI15Contract
      },
      {
        symbol: BondTokens.bDAI30,
        address: config.tokens.bDAI30.toLowerCase(),
        decimals: 18,
        contract: bDAI30Contract
      },
      {
        symbol: BondTokens.bDAI45,
        address: config.tokens.bDAI45.toLowerCase(),
        decimals: 18,
        contract: bDAI45Contract
      },
      {
        symbol: BondTokens.bDAI60,
        address: config.tokens.bDAI60.toLowerCase(),
        decimals: 18,
        contract: bDAI60Contract
      },
    ], []
  )

  const colTokens = useMemo(
    () => [
      {
        symbol: ColTokens.cuUSDCWETH,
        address: config.tokens.cuUSDCWETH.toLowerCase(),
        decimals: 18,
        contract: cuUSDCWETHContract,
        desc: 'Uniswap V2'
      },
      {
        symbol: ColTokens.cuWETHUSDT,
        address: config.tokens.cuWETHUSDT.toLowerCase(),
        decimals: 18,
        contract: cuWETHUSDTContract,
        desc: 'Uniswap V2'
      },
      {
        symbol: ColTokens.cuDAIWETH,
        address: config.tokens.cuDAIWETH.toLowerCase(),
        decimals: 18,
        contract: cuDAIWETHContract,
        desc: 'Uniswap V2'
      },
    ], []
  )

  const tokens = useMemo(
    () => [
      { 
        symbol: UniLpTokens.usdcwethLpToken,
        name: 'Uniswap V2',
        address: config.tokens.usdcwethLpToken.toLowerCase(),
        decimals: 18,
        icon: '/media/tokens/eth-usdc.svg',
        // pricePath: [KnownTokens.BTC],
        contract: usdcwethLpTokenContract,
      },      
      { 
        symbol: UniLpTokens.wethusdtLpToken,
        name: 'Uniswap V2',
        address: config.tokens.wethusdtLpToken.toLowerCase(),
        decimals: 18,
        icon: '/media/tokens/usdt-eth.svg',
        // pricePath: [KnownTokens.BTC],
        contract: wethusdtLpTokenContract,
      },
      { 
        symbol: UniLpTokens.daiwethLpToken,
        name: 'Uniswap V2',
        address: config.tokens.daiwethLpToken.toLowerCase(),
        decimals: 18,
        icon: '/media/tokens/eth-dai.svg',
        // pricePath: [KnownTokens.BTC],
        contract: daiwethLpTokenContract,
      },
      {
        symbol: KnownTokens.ETH,
        name: 'Ether',
        address: '0x',
        decimals: 18,
        icon: 'eth',
        priceFeed: config.feeds.eth, // ETH -> $
      },
      {
        symbol: KnownTokens.WETH,
        name: 'Wrapped Ether',
        address: config.tokens.weth.toLowerCase(),
        decimals: 18,
        icon: '/media/tokens/WETH.svg',
        pricePath: [KnownTokens.ETH],
        contract: wethContract,
      },
      {
        symbol: KnownTokens.USDC,
        name: 'USD Coin',
        address: config.tokens.usdc.toLowerCase(),
        decimals: 6,
        icon: '/media/tokens/USDC.svg',
        // color: '#4f6ae5',
        priceFeed: config.feeds.usdc, // USDC -> $
        contract: usdcContract,
      },
      {
        symbol: KnownTokens.USDT,
        name: 'Tether USD',
        address: config.tokens.usdt.toLowerCase(),
        decimals: 6,
        icon: '/media/tokens/USDT.svg',
        priceFeed: config.feeds.usdt, // USDT -> $
        contract: usdtContract,
      },
      {
        symbol: KnownTokens.DAI,
        name: 'Dai Stablecoin',
        address: config.tokens.dai.toLowerCase(),
        decimals: 18,
        icon: '/media/tokens/DAI.svg',
        // color: '#ffd160',
        priceFeed: config.feeds.dai, // DAI -> $
        contract: daiContract,
      },
    ],
    [],
  );

  const getTokenBySymbol = useCallback(
    (symbol) => {
      let fSymbol = symbol;
      return tokens.find(token => token.symbol === fSymbol);
    },
    [tokens],
  );

  const getDebtTokenBySymbol = useCallback(
    (symbol) => {
      let fSymbol = symbol
      return debtTokens.find(debtToken => debtToken.symbol === fSymbol)
    },
    [debtTokens],
  )

  const getBondTokenBySymbol = useCallback(
    (symbol) => {
      let fSymbol = symbol
      return bondTokens.find(bondToken => bondToken.symbol === fSymbol)
    },
    [bondTokens],
  )

  const getLpTokenBySymbol = useCallback(
    (symbol) => {
      let fSymbol = symbol
      return lpTokens.find(lpToken => lpToken.symbol === fSymbol)
    },[lpTokens]
  )

  const getColTokenBySymbol = useCallback(
    (symbol) => {
      let fSymbol = symbol
      return colTokens.find(colToken => colToken.symbol === fSymbol)
    }, [colTokens]
  )

  const getTokenByAddress = useCallback(
    (address) => {
      let fAddress = address
      return tokens.find(token => token.address === fAddress)
    }, [tokens]
  )

  const [
    usdcwethLpToken,
    wethusdtLpToken,
    daiwethLpToken,
    wethToken,
    daiToken,
    usdcToken,
    usdtToken,

    dWETH5,
    dWETH10,
    dWETH15,
    dWETH30,
    dWETH45,
    dWETH60,
    dUSDC5,
    dUSDC10,
    dUSDC15,
    dUSDC30,
    dUSDC45,
    dUSDC60,
    dUSDT5,
    dUSDT10,
    dUSDT15,
    dUSDT30,
    dUSDT45,
    dUSDT60,
    dDAI5,
    dDAI10,
    dDAI15,
    dDAI30,
    dDAI45,
    dDAI60,

    bWETH5,
    bWETH10,
    bWETH15,
    bWETH30,
    bWETH45,
    bWETH60,
    bUSDC5,
    bUSDC10,
    bUSDC15,
    bUSDC30,
    bUSDC45,
    bUSDC60,
    bUSDT5,
    bUSDT10,
    bUSDT15,
    bUSDT30,
    bUSDT45,
    bUSDT60,
    bDAI5,
    bDAI10,
    bDAI15,
    bDAI30,
    bDAI45,
    bDAI60,

    lpWETH5,
    lpWETH10,
    lpWETH15,
    lpWETH30,
    lpWETH45,
    lpWETH60,
    lpUSDC5,
    lpUSDC10,
    lpUSDC15,
    lpUSDC30,
    lpUSDC45,
    lpUSDC60,
    lpUSDT5,
    lpUSDT10,
    lpUSDT15,
    lpUSDT30,
    lpUSDT45,
    lpUSDT60,
    lpDAI5,
    lpDAI10,
    lpDAI15,
    lpDAI30,
    lpDAI45,
    lpDAI60,

    cuUSDCWETH,
    cuWETHUSDT,
    cuDAIWETH
  ] = useMemo(() => {
    return [
      getTokenBySymbol(UniLpTokens.usdcwethLpToken),
      getTokenBySymbol(UniLpTokens.wethusdtLpToken),
      getTokenBySymbol(UniLpTokens.daiwethLpToken),
      getTokenBySymbol(KnownTokens.WETH),
      getTokenBySymbol(KnownTokens.DAI),
      getTokenBySymbol(KnownTokens.USDC),
      getTokenBySymbol(KnownTokens.USDT),
      getDebtTokenBySymbol(DebtTokens.dWETH5),
      getDebtTokenBySymbol(DebtTokens.dWETH10),
      getDebtTokenBySymbol(DebtTokens.dWETH15),
      getDebtTokenBySymbol(DebtTokens.dWETH30),
      getDebtTokenBySymbol(DebtTokens.dWETH45),
      getDebtTokenBySymbol(DebtTokens.dWETH60),
      getDebtTokenBySymbol(DebtTokens.dUSDC5),
      getDebtTokenBySymbol(DebtTokens.dUSDC10),
      getDebtTokenBySymbol(DebtTokens.dUSDC15),
      getDebtTokenBySymbol(DebtTokens.dUSDC30),
      getDebtTokenBySymbol(DebtTokens.dUSDC45),
      getDebtTokenBySymbol(DebtTokens.dUSDC60),
      getDebtTokenBySymbol(DebtTokens.dUSDT5),
      getDebtTokenBySymbol(DebtTokens.dUSDT10),
      getDebtTokenBySymbol(DebtTokens.dUSDT15),
      getDebtTokenBySymbol(DebtTokens.dUSDT30),
      getDebtTokenBySymbol(DebtTokens.dUSDT45),
      getDebtTokenBySymbol(DebtTokens.dUSDT60),
      getDebtTokenBySymbol(DebtTokens.dDAI5),
      getDebtTokenBySymbol(DebtTokens.dDAI10),
      getDebtTokenBySymbol(DebtTokens.dDAI15),
      getDebtTokenBySymbol(DebtTokens.dDAI30),
      getDebtTokenBySymbol(DebtTokens.dDAI45),
      getDebtTokenBySymbol(DebtTokens.dDAI60),
      
      getBondTokenBySymbol(BondTokens.bWETH5),
      getBondTokenBySymbol(BondTokens.bWETH10),
      getBondTokenBySymbol(BondTokens.bWETH15),
      getBondTokenBySymbol(BondTokens.bWETH30),
      getBondTokenBySymbol(BondTokens.bWETH45),
      getBondTokenBySymbol(BondTokens.bWETH60),
      getBondTokenBySymbol(BondTokens.bUSDC5),
      getBondTokenBySymbol(BondTokens.bUSDC10),
      getBondTokenBySymbol(BondTokens.bUSDC15),
      getBondTokenBySymbol(BondTokens.bUSDC30),
      getBondTokenBySymbol(BondTokens.bUSDC45),
      getBondTokenBySymbol(BondTokens.bUSDC60),
      getBondTokenBySymbol(BondTokens.bUSDT5),
      getBondTokenBySymbol(BondTokens.bUSDT10),
      getBondTokenBySymbol(BondTokens.bUSDT15),
      getBondTokenBySymbol(BondTokens.bUSDT30),
      getBondTokenBySymbol(BondTokens.bUSDT45),
      getBondTokenBySymbol(BondTokens.bUSDT60),
      getBondTokenBySymbol(BondTokens.bDAI5),
      getBondTokenBySymbol(BondTokens.bDAI10),
      getBondTokenBySymbol(BondTokens.bDAI15),
      getBondTokenBySymbol(BondTokens.bDAI30),
      getBondTokenBySymbol(BondTokens.bDAI45),
      getBondTokenBySymbol(BondTokens.bDAI60),

      getLpTokenBySymbol(LpTokens.lpWETH5),
      getLpTokenBySymbol(LpTokens.lpWETH10),
      getLpTokenBySymbol(LpTokens.lpWETH15),
      getLpTokenBySymbol(LpTokens.lpWETH30),
      getLpTokenBySymbol(LpTokens.lpWETH45),
      getLpTokenBySymbol(LpTokens.lpWETH60),
      getLpTokenBySymbol(LpTokens.lpUSDC5),
      getLpTokenBySymbol(LpTokens.lpUSDC10),
      getLpTokenBySymbol(LpTokens.lpUSDC15),
      getLpTokenBySymbol(LpTokens.lpUSDC30),
      getLpTokenBySymbol(LpTokens.lpUSDC45),
      getLpTokenBySymbol(LpTokens.lpUSDC60),
      getLpTokenBySymbol(LpTokens.lpUSDT5),
      getLpTokenBySymbol(LpTokens.lpUSDT10),
      getLpTokenBySymbol(LpTokens.lpUSDT15),
      getLpTokenBySymbol(LpTokens.lpUSDT30),
      getLpTokenBySymbol(LpTokens.lpUSDT45),
      getLpTokenBySymbol(LpTokens.lpUSDT60),
      getLpTokenBySymbol(LpTokens.lpDAI5),
      getLpTokenBySymbol(LpTokens.lpDAI10),
      getLpTokenBySymbol(LpTokens.lpDAI15),
      getLpTokenBySymbol(LpTokens.lpDAI30),
      getLpTokenBySymbol(LpTokens.lpDAI45),
      getLpTokenBySymbol(LpTokens.lpDAI60),
      getColTokenBySymbol(ColTokens.cuUSDCWETH),
      getColTokenBySymbol(ColTokens.cuWETHUSDT),
      getColTokenBySymbol(ColTokens.cuDAIWETH)
    ];
  }, [getTokenBySymbol, getDebtTokenBySymbol, getBondTokenBySymbol, getLpTokenBySymbol, getColTokenBySymbol]);

  const value = {
    tokens,
    debtTokens,
    bondTokens,
    wethToken,
    usdcToken,
    daiToken,
    usdtToken,
    usdcwethLpToken,
    wethusdtLpToken,
    daiwethLpToken,
    dWETH5,
    dWETH10,
    dWETH15,
    dWETH30,
    dWETH45,
    dWETH60,
    dUSDC5,
    dUSDC10,
    dUSDC15,
    dUSDC30,
    dUSDC45,
    dUSDC60,
    dUSDT5,
    dUSDT10,
    dUSDT15,
    dUSDT30,
    dUSDT45,
    dUSDT60,
    dDAI5,
    dDAI10,
    dDAI15,
    dDAI30,
    dDAI45,
    dDAI60,

    bWETH5,
    bWETH10,
    bWETH15,
    bWETH30,
    bWETH45,
    bWETH60,
    bUSDC5,
    bUSDC10,
    bUSDC15,
    bUSDC30,
    bUSDC45,
    bUSDC60,
    bUSDT5,
    bUSDT10,
    bUSDT15,
    bUSDT30,
    bUSDT45,
    bUSDT60,
    bDAI5,
    bDAI10,
    bDAI15,
    bDAI30,
    bDAI45,
    bDAI60,

    lpWETH5,
    lpWETH10,
    lpWETH15,
    lpWETH30,
    lpWETH45,
    lpWETH60,
    lpUSDC5,
    lpUSDC10,
    lpUSDC15,
    lpUSDC30,
    lpUSDC45,
    lpUSDC60,
    lpUSDT5,
    lpUSDT10,
    lpUSDT15,
    lpUSDT30,
    lpUSDT45,
    lpUSDT60,
    lpDAI5,
    lpDAI10,
    lpDAI15,
    lpDAI30,
    lpDAI45,
    lpDAI60,
    cuUSDCWETH,
    cuWETHUSDT,
    cuDAIWETH,

    getTokenByAddress
  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

export default KnownTokensProvider;