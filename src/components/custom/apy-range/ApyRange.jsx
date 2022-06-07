import { useEffect, useRef } from "react"

const ApyRange = () => {

  const widthRef = useRef()

  useEffect(() => {

    const rangeBullet = document.getElementById('range-bullet')
    const rangeSlider = document.getElementById("range-line");
    const lineWidth = widthRef.current.clientWidth

    rangeSlider.addEventListener("input", showSliderValue, false);

    function showSliderValue() {
      rangeBullet.innerHTML = rangeSlider.value;
      let bulletPosition = (rangeSlider.value /rangeSlider.max);
      rangeBullet.style.left = (bulletPosition * (lineWidth - 17)) + "px";
    }
  })

  return (
    <div>
      <div>
        <span id="range-bullet" className="range-label">0</span>            
        <input ref={widthRef} id="range-line" type="range" min="0" max="100" />
      </div>
      <div className="d-flex justify-content-between">
        <span className='range-number-zero'>0</span>
        <span className="range-number-one">100%</span>
      </div>
    </div>
  )
}

export default ApyRange