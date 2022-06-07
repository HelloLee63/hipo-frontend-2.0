import Web3Contract, { createAbiItem } from "../web3Contract"

const WalletDataProviderABI = [createAbiItem('getIssuerLtv', ['address', 'address'], ['uint256']),
                               createAbiItem('getIssuerTotalDebts', ['address', 'address'], ['address', 'uint256', 'address', 'uint256']),
]

class WalletDataContract extends Web3Contract {

    issuerLtvArray

    issuerTotalDebtsObject
    issuerTotalDebtsArray

    constructor(address) {
      super(WalletDataProviderABI, address, '')

      this.issuerLtvArray = new Array()

      this.issuerTotalDebtsObject = new Object()
      this.issuerTotalDebtsArray = new Array()

      this.on(Web3Contract.UPDATE_ACCOUNT, () => {
          this.issuerLtvArray = []
          this.emit(Web3Contract.UPDATE_DATA)
      })
    }

    issuerTotalDebts

    getIssuerLtv(issuer = this.account, collateralAssetAddress) {
      const ltv = issuer ? this.issuerLtvArray.find(
          obj => obj.issuerAddress === issuer &&
              obj.userCollateralAssetAddress === collateralAssetAddress
      ) : undefined

      return ltv
    }

    async loadIssuerLtv(issuer, collateralAssetAddress) {

      if (!issuer) {      
        return Promise.reject(new Error('Invalid owner address!'));
      }

      const issuerLtv = await this.call('getIssuerLtv', [issuer, collateralAssetAddress])
      
      if (issuerLtv) {

        const result = {
          issuerAddress: issuer,
          userCollateralAssetAddress: collateralAssetAddress,
          issuerLtvValue: issuerLtv
        }

        if(this.issuerLtvArray.length === 0) {
          this.issuerLtvArray.push(result)
        } else {
          const value = this.issuerLtvArray.find(arr => (arr.issuerAddress === issuer && arr.userCollateralAssetAddress === collateralAssetAddress))

          if (!value) {
            this.issuerLtvArray.push(result)
          } else {
            for (let i = 0; i < this.issuerLtvArray.length; i++) {
              if (this.issuerLtvArray[i].issuerAddress === issuer && this.issuerLtvArray[i].userCollateralAssetAddress === collateralAssetAddress) {
                this.issuerLtvArray[i].issuerLtvValue = issuerLtv
              }
            }
          }
        }

        this.emit(Web3Contract.UPDATE_DATA)
      }               
    }

    async loadIssuerTotalDebts(issuer, collateralAssetAddress) {
        const issuerTotalDebts = await this.call('getIssuerTotalDebts', [issuer, collateralAssetAddress])
        this.issuerTotalDebts = issuerTotalDebts
        this.issuerTotalDebtsObject = {}

        const data = Object.values(this.issuerTotalDebts)

        if(issuerTotalDebts) {
            this.issuerTotalDebtsObject.debtAAddress = data[0]
            this.issuerTotalDebtsObject.debtAAmount = data[1]
            this.issuerTotalDebtsObject.debtBAddress = data[2]
            this.issuerTotalDebtsObject.debtBAmount = data[3]
            this.issuerTotalDebtsObject.issuer = issuer
            this.issuerTotalDebtsObject.collateralAssetAddress = collateralAssetAddress

            if (this.issuerTotalDebtsArray.length === 0) {
                this.issuerTotalDebtsArray.push(this.issuerTotalDebtsObject)
            }

            this.issuerTotalDebtsArray.forEach((obj) => {

                if(obj.issuer !== issuer || obj.collateralAssetAddress !== collateralAssetAddress) {
                  this.issuerTotalDebtsArray.push(this.issuerTotalDebtsObject)
                }
    
                if(obj.issuer === issuer && obj.collateralAssetAddress === collateralAssetAddress) {
                  obj.debtAAddress = data[0]
                  obj.debtAAmount = data[1]
                  obj.debtBAddress = data[2]
                  obj.debtBAmount = data[3]
                  obj.issuer = issuer
                  obj.collateralAssetAddress = collateralAssetAddress
                }              
            })
        }

        // console.log(this.issuerTotalDebtsObject);

        this.emit(Web3Contract.UPDATE_DATA)      
    }    
}

export default WalletDataContract