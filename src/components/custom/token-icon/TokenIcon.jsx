const TokenIcon = props => {
  const { tokenIcon, tokenSymbol } = props;

  return (
    <div className='d-flex align-items-center justify-content-center token-icon d-inline mx-1 my-2'>
      <div className='d-flex align-items-center'>
        <div>          
          <img alt='' src={ tokenIcon } className='h-20px'/>
        </div>
        <div className='d-flex flex-column justify-content-start ps-1'>
          <div className='token-icon-symbol'>
            { tokenSymbol }
          </div>
          {/* <span className='fs-8' style={{fontFamily: 'PingFangSC-Semibold', color: '#666666'}}>
            { tokenName }
            Dai Stablecoin
          </span> */}
        </div>
      </div>
    </div>
  );
}

export default TokenIcon