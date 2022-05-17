const RatesTable = () => {
  return (
    <div className='card form-card rates-table'>
      <div className='card-body'>
        <div className="card-title title">Fixed APR</div>
        <table className="table">
          <thead className="table-header">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Duration</th>
              <th scope="col">WETH</th>
              <th scope="col">USDC</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-body">
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr className="table-body">
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr className="table-body">
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr className="table-body">
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr className="table-body">
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr className="table-body">
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RatesTable