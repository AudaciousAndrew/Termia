import React , {Component} from 'react'
import styled from 'styled-components'

// TODO: fix carets function

export default class Delivery extends Component {
  state = {
    btnScheme: true ,
    btnSchedule: false ,
    btnArea: false ,
    btnPrice: false ,
    btnPhone: false ,
    btnTime: false ,
    prevID : "btnScheme"
  }

  handleButtonStates = (event) => {
    const { id } = event.target
    if(this.state.prevID === id)
      this.setState(prevState => ({
          [id] : !prevState[id]
      }))
    else {
      this.setState(prevState => ({
          [id] : !prevState[id] ,
          prevID : id ,
          [this.state.prevID] : !prevState[this.state.prevID]
      }))
    }


  }

  render(){
   return (
     <DeliveryWrapper>
      <div className="container-fluid my-4 container-padding">
        <div className="delivery-title">
          how to order from us?
        </div>
        <div id="accordion" className="">
          <div className="card mx-auto">
            <div className="card-header d-flex justify-content-between align-items-baseline px-5" id="headingOne">
              <label htmlFor="btnScheme" className="delivery-btn">how it works</label>
              <button
                id="btnScheme" className="btn" data-toggle="collapse"
                data-target="#collapseScheme" aria-expanded="true" aria-controls="collapseScheme"
                onClick={this.handleButtonStates}
                >
                {this.state.btnScheme?<i className="fas fa-angle-up" />:<i className="fas fa-angle-down" />}
              </button>
            </div>
            <div id="collapseScheme" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
              <div className="card-body">
                <div className="img-scheme d-flex justify-content-center">
                  <div>
                    <img src="img/delivery1.jpg" className="delivery-img" alt="delivery1"/>
                    <p className="img-text">order item</p>
                  </div>
                    <img src="img/delivery2.jpg" className="delivery-img" alt="delivery-arrow"/>
                  <div>
                    <img src="img/delivery3.jpg" className="delivery-img" alt="delivery2"/>
                    <p className="img-text">confirm order</p>
                  </div>
                  <img src="img/delivery2.jpg" className="delivery-img" alt="delivery-arrow"/>
                  <div>
                    <img src="img/delivery4.jpg" className="delivery-img" alt="delivery3"/>
                    <p className="img-text">wait for delivery</p>
                  </div>
                  <img src="img/delivery2.jpg" className="delivery-img" alt="delivery-arrow"/>
                  <div>
                    <img src="img/delivery5.jpg" className="delivery-img" alt="delivery4"/>
                    <p className="img-text">pay for the order</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card mx-auto">
            <div className="card-header d-flex justify-content-between align-items-baseline px-5" id="headingTwo">
              <label htmlFor="btnSchedule" className="delivery-btn">our working schedule</label>
              <button
                id="btnSchedule" className="btn collapsed" data-toggle="collapse"
                data-target="#collapseSchedule" aria-expanded="false" aria-controls="collapseSchedule"
                onClick={this.handleButtonStates}
                >
                {this.state.btnSchedule? <i className="fas fa-angle-up" /> : <i className="fas fa-angle-down" />}
              </button>
            </div>
            <div id="collapseSchedule" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
              <div className="card-body px-5">
                <p><span className="schedule-day">monday:</span> 9:00 - 19:00</p>
                <p><span className="schedule-day">tuesday:</span> 9:00 - 19:00</p>
                <p><span className="schedule-day">wednesday:</span> 9:00 - 19:00</p>
                <p><span className="schedule-day">thursday:</span> 9:00 - 19:00</p>
                <p><span className="schedule-day">friday:</span> 9:00 - 19:00</p>
                <p><span className="schedule-day">saturday:</span> 10:00 - 16:00</p>
                <p><span className="schedule-day">sunday:</span> 10:00 - 16:00</p>
              </div>
            </div>
          </div>
          <div className="card mx-auto">
            <div className="card-header d-flex justify-content-between align-items-baseline px-5" id="headingThree">
              <label htmlFor="btnArea" className="delivery-btn">where we can deliver</label>
              <button
                id="btnArea" className="btn collapsed" data-toggle="collapse"
                data-target="#collapseArea" aria-expanded="false" aria-controls="collapseArea"
                onClick={this.handleButtonStates}
                >
                {this.state.btnArea? <i className="fas fa-angle-up" /> : <i className="fas fa-angle-down" />}
              </button>
            </div>
            <div id="collapseArea" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
              <div className="card-body px-5">
                Our company delivers all over the country by courier.
              </div>
            </div>
          </div>
          <div className="card mx-auto">
            <div className="card-header d-flex justify-content-between align-items-baseline px-5" id="headingFour">
              <label htmlFor="btnPrice" className="delivery-btn">delivery price</label>
              <button
                id="btnPrice" className="btn collapsed" data-toggle="collapse"
                data-target="#collapsePrice" aria-expanded="false" aria-controls="collapsePrice"
                onClick={this.handleButtonStates}
                >
                {this.state.btnPrice? <i className="fas fa-angle-up" /> : <i className="fas fa-angle-down" />}
              </button>
            </div>
            <div id="collapsePrice" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
              <div className="card-body px-5">
                The cost of delivery depends on how far you are from our office.
                Operator will announce the cost of delivery upon order confirmation.
                Minimum shipping cost $3.
              </div>
            </div>
          </div>
          <div className="card mx-auto">
            <div className="card-header d-flex justify-content-between align-items-baseline px-5" id="headingFive">
              <label htmlFor="btnPhone" className="delivery-btn">our phone number</label>
              <button
                id="btnPhone" className="btn collapsed" data-toggle="collapse"
                data-target="#collapsePhone" aria-expanded="false" aria-controls="collapsePhone"
                onClick={this.handleButtonStates}
                >
                {this.state.btnPhone? <i className="fas fa-angle-up" /> : <i className="fas fa-angle-down" />}
              </button>
            </div>
            <div id="collapsePhone" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
              <div className="card-body px-5">
                8-800-555-3-555
              </div>
            </div>
          </div>
          <div className="card mx-auto">
            <div className="card-header d-flex justify-content-between align-items-baseline px-5" id="headingSix">
              <label htmlFor="btnTime" className="delivery-btn">how much time delivery will take</label>
              <button
                id="btnTime" className="btn collapsed" data-toggle="collapse"
                data-target="#collapseTime" aria-expanded="false" aria-controls="collapseTime"
                onClick={this.handleButtonStates}
                >
                {this.state.btnTime? <i className="fas fa-angle-up" /> : <i className="fas fa-angle-down" />}
              </button>
            </div>
            <div id="collapseTime" className="collapse" aria-labelledby="headingSix" data-parent="#accordion">
              <div className="card-body px-5">
                Depending on the distance from 3 to 8 hours.
              </div>
            </div>
          </div>
        </div>
      </div>
    </DeliveryWrapper>
  )}
}

const DeliveryWrapper = styled.div`

.schedule-day{
  text-transform:capitalize;
  text-align:center;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 14px;
  line-height: 1.2;
  color: #000;
  font-weight: 600;
}

.img-text{
  text-transform:capitalize;
  text-align:center;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 14px;
  line-height: 1.2;
  color: #000;
  font-weight: 600;
}

i {
  zoom: 1.15;
}

.btn:focus {
  outline:none;
  box-shadow:none;
}

.card{
  width:75%;
  border:0 !important;
}

.card-body{
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 14px;
  line-height: 1.2;
  color: #000;
  font-weight: 300;
}

.card-header{
  background-color:#fff !important;
  border-top:1px solid #ccc !important;
  border-bottom: 0;
}

.delivery-btn{
  text-transform:capitalize;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 14px;
  line-height: 1.2;
  color: #000;
  font-weight: 600;
  cursor:pointer;
}

.delivery-title{
  text-transform:capitalize;
  text-align:center;
  font-family: Gotham,Arial,sans-serif;
  font-size: 42px;
  line-height: 1.4;
  color: #000;
  font-weight: 600;
}

.delivery-img{
  height:140px;
  width:120px;
}

.container-padding{
    padding:0 5rem !important;
}

`
