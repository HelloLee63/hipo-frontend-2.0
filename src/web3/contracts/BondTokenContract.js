import Erc20Contract from "../erc20Contract"
import Web3Contract, { createAbiItem } from "../web3Contract"

const BondTokenContractABI = [
  createAbiItem('getInvestorBond', ['address', 'uint256'], ['uint256', 'uint256', 'uint256', 'uint256']),
  createAbiItem('getInvestorBondsList', ['address'], ['uint256[]']),
  createAbiItem('getInvestorBondsCount', ['address'], ['uint256']),
]

class BondTokenContract extends Erc20Contract {

  counts
  lists
  bondDatas

  constructor(address) {
    super(BondTokenContractABI, address, '')

    this.counts = new Map()
    this.lists = new Map()
    this.bondDatas = new Map()

    this.bondData = new Array()

    this.on(Web3Contract.UPDATE_ACCOUNT, () => {
      this.counts.clear()
      this.lists.clear()
      this.emit(Web3Contract.UPDATE_DATA)
    })
  }

  get count() {
    return this.getCountOf(this.account);
  }

  get list() {
    return this.getListOf(this.account)
  }

  getCountOf(address = this.account) {
    return address ? this.counts.get(address) : undefined;
  }

  getListOf(address = this.account) {
    return address ? this.lists.get(address) : undefined
  }

  async loadInvestorBondsCount(investor = this.account) {

    if(!investor) {
      return Promise.reject(new Error('Invalid owner address!'));
    }
    const investorBondsCount = await this.call('getInvestorBondsCount', [investor])
    this.counts.set(investor, investorBondsCount)
    this.emit(Web3Contract.UPDATE_DATA)
  }
  
  async loadInvestorBondsList(investor = this.account) {
    if (!investor) {
      return Promise.reject(new Error('Invalid owner address!'))
    }

    const ids = await this.call('getInvestorBondsList', [investor])

    if(ids.length > 0) {
      this.lists.set(investor, ids)
      this.emit(Web3Contract.UPDATE_DATA)
    }
  }

  async loadBondData(investor = this.account, id) {

    if (!investor) {
      return Promise.reject(new Error('Invalid owner address!'))
    }
    
    const data = await this.call('getInvestorBond', [investor, id])
    const bondData = Object.values(data)

    if (bondData) {
      this.bondDatas.set(investor, bondData);
      this.emit(Web3Contract.UPDATE_DATA);
    } 
  }
}

export default BondTokenContract