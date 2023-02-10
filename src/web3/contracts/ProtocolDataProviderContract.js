/* eslint-disable react-hooks/exhaustive-deps */
import Web3Contract, { createAbiItem } from "../web3Contract"

const ProtocolDataABI = [
    createAbiItem('getCollateralConfigurationData', 
      ['address'], 
      ['uint256', 'uint256', 'uint256', 'uint256', 'bool', 'bool']),
    createAbiItem('getBondPrice', ['address', 'uint256', 'address'], ['uint256']),
]

class ProtocolDataContract extends Web3Contract {

  maxLtvMap
  thresholdMap
  bondPriceObject
  bondPriceArray

  constructor(address) {
      super(ProtocolDataABI, address, '')
      this.maxLtvMap = new Map()
      this.thresholdMap = new Map()
      this.bondPriceObject = new Object()
      this.bondPriceArray = new Array()

      this.on(Web3Contract.UPDATE_DATA, () => {

        this.emit(Web3Contract.UPDATE_DATA)
      })
  }

  collateralConfigurationData
  bondPrice

    async loadCollateralConfigurationData(collateralAssetAddress) {
      const collateralConfigurationData = await this.call('getCollateralConfigurationData', [collateralAssetAddress])
      this.collateralConfigurationData = collateralConfigurationData

      const configuration = Object.values(this.collateralConfigurationData)
      
      if(configuration) {
        this.maxLtvMap.set(collateralAssetAddress, configuration[1])
        
        this.thresholdMap.set(collateralAssetAddress, configuration[2])
        
        this.emit(Web3Contract.UPDATE_ACCOUNT)          
      }        
    }

    async loadBondPrice(assetAddress, duration, hipoV1AMMfactory) {
      const bondPrice = await this.call('getBondPrice', [assetAddress, duration, hipoV1AMMfactory])
      this.bondPriceObject = {}

      if (bondPrice) {
        this.bondPrice = bondPrice

        this.bondPriceObject.assetAddress = assetAddress
        this.bondPriceObject.duration = duration.toString()
        this.bondPriceObject.price = bondPrice

        if (this.bondPriceArray.length === 0) {
          this.bondPriceArray.push(this.bondPriceObject)
        } else {
          const data = this.bondPriceArray.find(obj => obj.assetAddress === assetAddress && obj.duration === duration)

          if(!data) {
            this.bondPriceArray.push(this.bondPriceObject)
          } else {
            for (let i = 0; i < this.bondPriceArray.length; i++) {
              if (this.bondPriceArray[i].assetAddress === assetAddress && this.bondPriceArray[i].duration === duration) {
                this.bondPriceArray[i].price = bondPrice
              }
            }
          }
        }
        // this.emit(Web3Contract.UPDATE_DATA)
      }
      return this.bondPrice        
    }
}

export default ProtocolDataContract