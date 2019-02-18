import React , {Component} from 'react'

export default class FilterBar extends Component {
  render(){
    return(
      <div className="col-lg-2 col-md-3 col-sm-4 p-3 filter-bar">
        <button className="btn btn-dark w-100" type="button" data-toggle="collapse" data-target="#collapseFilter" aria-expanded="true" aria-controls="collapseFilter">
          Filter
        </button>
        <div className="show" id="collapseFilter">
          <div className="d-flex flex-column">
            <div className="d-flex flex-row justify-content-between align-items-baseline">
              <label className="label-filter" htmlFor="sort-btn">Sort by</label>
              <button id="sort-btn" className="btn-filter" type="button" data-toggle="collapse" data-target="#collapsePrice" aria-expanded="true" aria-controls="collapsePrice">
                +
              </button>
            </div>
            <div className="show" id="collapsePrice">
              <div className="card card-body">
                <input type="slider" />
              </div>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-baseline">
              <label className="label-filter" htmlFor="type-btn">Type</label>
              <button id="type-btn" className="btn-filter" type="button" data-toggle="collapse" data-target="#collapseType" aria-expanded="false" aria-controls="collapseType">
                +
              </button>
            </div>
            <div className="collapse" id="collapseType">
              <div className="card card-body">
                <input type="slider" />
              </div>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-baseline">
              <label className="label-filter" htmlFor="price-btn">Price</label>
              <button id="price-btn" className="btn-filter" type="button" data-toggle="collapse" data-target="#collapseSort" aria-expanded="false" aria-controls="collapseSort">
                +
              </button>
            </div>
            <div className="collapse" id="collapseSort">
              <div className="card card-body">
                <input type="slider" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
