import React , {Component} from 'react'
import FilterRow from './FilterRow'
import styled from 'styled-components'

export default class FilterBar extends Component {
  state = {
    typeBtn:true,
    priceBtn:true,
    saleBtn:true,
    availBtn:true
  }

  handleButtonStates = (event) => {
    const { name  } = event.target
    this.setState(prevState => {
        return {[name] : !prevState[name]}
    })
  }

  render(){
    return(
      <FilterWrapper className="col-lg-3 col-md-4 col-sm-5 pl-0 filter-bar">
        <div className="filter-container">

          <div className="filter-rows" id="collapseFilter">
            <div className="d-flex flex-column">
              <div className="filter-row mb-2">
                <FilterRow  id="sale-btn" text="sale" btnValue={this.state.saleBtn}
                            buttonHandler={this.handleButtonStates} target="#collapseSale" name="saleBtn"/>
                <div className="show" id="collapseSale">
                  <div className="card card-body border-0 p-1 py-2">
                    <label className="text-capitalize"><input type="checkbox" />sale items</label>
                  </div>
                </div>
              </div>
              <div className="filter-row mb-2">
                <FilterRow  id="type-btn" text="type" btnValue={this.state.typeBtn}
                            buttonHandler={this.handleButtonStates} target="#collapseType" name="typeBtn"/>
                <div className="show" id="collapseType">
                  <div className="card card-body border-0 p-1 py-2">
                    <label className="text-capitalize"><input type="checkbox" />aer heating units</label>
                    <label className="text-capitalize"><input type="checkbox" />electric convectors</label>
                    <label className="text-capitalize"><input type="checkbox" />electric boilers</label>
                    <label className="text-capitalize"><input type="checkbox" />oil filled electric radiators</label>
                    <label className="text-capitalize"><input type="checkbox" />infrared heater</label>
                    <label className="text-capitalize"><input type="checkbox" />plinth convectors</label>
                    <label className="text-capitalize"><input type="checkbox" />heating radiators</label>
                    <label className="text-capitalize"><input type="checkbox" />electric tiles</label>
                  </div>
                </div>
              </div>
              <div className="filter-row mb-2">
                <FilterRow  id="avail-btn" text="availability" btnValue={this.state.availBtn}
                            buttonHandler={this.handleButtonStates} target="#collapseAvail" name="availBtn"/>
                <div className="show" id="collapseAvail">
                  <div className="card card-body border-0 p-1 py-2">
                    <label className="text-capitalize"><input type="checkbox" />in stock</label>
                  </div>
                </div>
              </div>
                <FilterRow  id="price-btn" text="price" btnValue={this.state.priceBtn}
                            buttonHandler={this.handleButtonStates} target="#collapsePrice" name="priceBtn"/>
                <div className="show" id="collapsePrice">
                  <div className="card card-body border-0 p-1 py-2">
                    <label className="text-capitalize"><input type="checkbox" />$50 - $100</label>
                    <label className="text-capitalize"><input type="checkbox" />More than $100</label>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </FilterWrapper>
    )
  }
}

const FilterWrapper = styled.div`

input[type=checkbox]{
  margin-right: 0.3rem;
  zoom: 1.2;
  vertical-align: -0.3rem;
}

.filter-rows{
  padding: 0 1rem;
  padding-bottom: 0.5rem;
}

.filter-header{
  background-color: #5C5F64 !important;
  color: var(--mainDark) !important;
  border-radius: 0 !important;
}

.filter-header:focus{
  outline: none !important;
}

.btn-filter{
  background-color: transparent;
  color: #dad9d7;
  border: none;
  outline: none;
  font-size: 1.3rem;
  font-weight: bold;
}

.btn-filter:focus{
  outline: none;
}

`
