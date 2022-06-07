
const OverviewData = props => {

  const {icon, title, valueInDallar} = props
  return (
    <div className="d-flex overview-data">
      <div className="d-flex align-items-center justify-content-center overview-data-icon">
        <img className="m-5 h-30px" src={icon} alt="" />
      </div>
      <div className="d-flex flex-column justify-content-center">
        <span className="overview-data-title ps-3">{title}</span>
        <span className="overview-data-value ps-3 pt-1">{valueInDallar}</span>
      </div>      
    </div>
  )
}

export default OverviewData