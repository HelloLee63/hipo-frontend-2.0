const ApyRange = () => {

  // const rangeInputs = document.querySelectorAll('input[type="range"]')
  // const numberInput = document.querySelector('input[type="number"]')

  // function handleInputChange(e) {
  //   let target = e.target
  //   if (e.target.type !== 'range') {
  //     target = document.getElementById('range')
  //   } 
  //   const min = target.min
  //   const max = target.max
  //   const val = target.value
    
  //   target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
  // }

  // rangeInputs.forEach(input => {
  //   input.addEventListener('input', handleInputChange)
  // })

  // numberInput.addEventListener('input', handleInputChange)
  return (
    <div>
      {/* <input type="range" value="70" min="0" max="100" onInput="rangevalue.value=value" />
      <output id="rangevalue">70</output> */}

      <input type="range" min="0" max="100" />
      <output id="rangevalue">70</output>

      {/* <br />
      <br />
      <br />
      
      <input type="range" value="70" min="0" max="100" id="range" onInput="rangenumber.value=value"/>
      <input type="number" id="rangenumber" min="0" max="100" value="70" onInput="range.value=value" /> */}
    </div>
  )
}

export default ApyRange