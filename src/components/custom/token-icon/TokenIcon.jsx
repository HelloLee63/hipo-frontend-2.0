import React from 'react'

const TokenIcon = props => {
  const { tokenIcon, tokenSymbol, tokenName, iconSize } = props;

  return (
    <div className='d-flex align-items-center justify-content-between'>
      <div className='d-flex align-items-center'>
        <div>
          {/* <img alt='' src='/media/tokens/DAI.svg' /> */}
          <img alt='' src={ tokenIcon } />
        </div>
        <div className='d-flex flex-column justify-content-start ps-2'>
          <div className='' style={{fontFamily: 'PingFangSC-Semibold', color: '#333333'}}>
            { tokenSymbol }
          </div>
          <span className='d-block' style={{fontFamily: 'PingFangSC-Semibold', color: '#666666'}}>
            { tokenName }
          </span>
        </div>
      </div>
    </div>
  );
}

export default TokenIcon