import { Durations } from "../../provider/poolsProvider"

const DurationLable = props => {

  const {setDuration} = props

  return (
    <div id="form-wrapper">
      <form>
        <div id='debt-amount-slider'>
          <input type='radio' 
            name='duration' 
            id='1' 
            value={Durations.FiveDays}
            defaultChecked
            required 
            onChange={(e) => {setDuration(e.target.value)}}
            />
          <label htmlFor='1' data-debt-amount='5d'></label>
          <input type='radio' 
            name='duration' 
            id='2' 
            value={Durations.TenDays}
            required 
            onChange={(e) => {setDuration(e.target.value)}}
            />
          <label htmlFor='2' data-debt-amount='10d'></label>
          <input 
            type="radio" 
            name="duration" 
            id="3" 
            value={Durations.FifteenDays}
            required 
            onChange={(e) => {setDuration(e.target.value)}}
            />
          <label htmlFor="3" data-debt-amount="15d"></label>
          <input type="radio" 
            name="duration" 
            id="4" 
            value={Durations.ThirtyDays}
            required 
            onChange={(e) => {setDuration(e.target.value)}}
            />
          <label htmlFor="4" data-debt-amount="30d"></label>
          <input type="radio" 
            name="duration" 
            id="5" 
            value={Durations.FortyFiveDays}
            required 
            onChange={(e) => {setDuration(e.target.value)}}
            />
          <label htmlFor="5" data-debt-amount="45d"></label>
          <input type="radio" 
            name="duration" 
            id="6" 
            value={Durations.SixtyDays}
            required 
            onChange={(e) => {setDuration(e.target.value)}}
          />
          <label htmlFor="6" data-debt-amount="60d"></label>
          <div id="debt-amount-pos"></div>
        </div>
      </form>
    </div>
  )
}

export default DurationLable