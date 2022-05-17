import IdenticonJs  from 'identicon.js'

import { useMemo } from 'react'
const EMPTY_ADDRESS = '000000000000000'

const Identicon = props => {
  const { address = EMPTY_ADDRESS, width = 24, height = 24, alt } = props

  const icon = useMemo(() => {
      return new IdenticonJs(address, {
          format: 'svg',
      }).toString();
  }, [address])

  return (
    <img
      src={`data:image/svg+xml;base64,${icon}`}
      alt={alt ?? address}
      width={width}
      height={height}
      style={{ borderRadius: '5px' }}
    />
  )
}

export default Identicon