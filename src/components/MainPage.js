import React , {Component} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default class MainPage extends Component {
  render(){
    return(
      <MainPageWrapper>
        <div className="cointainer-fluid main-wrapper my-4">
          <div className="main-img mb-4">
            <Link to='/products'>
              <img src="img/main.jpg" alt="main"/>
            </Link>
          </div>
          <div className="row px-5">
            <div className="col-4">
              <div className="card h-100">
                <Link to="/products">
                  <img src="img/main1.jpg" alt="testalt" className="main-card-img card-img-top"/>
                </Link>
                <div className="card-body h-100">
                  <h5 className="card-title main-card-title">our products</h5>
                  <p className="card-text about-card-text">
                    Check out our newest collections of most fashion brands.
                    We offer only best of the best clothing.
                  </p>
                </div>
                <div className="card-footer">
                  <div className="d-flex justify-content-center">
                  <Link to="/products" className="btn main-card-btn">check out</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card h-100">
                <Link to="/about">
                  <img src="img/main2.jpg" alt="testalt" className="main-card-img card-img-top"/>
                </Link>
                <div className="card-body h-100">
                  <h5 className="card-title main-card-title">office location</h5>
                  <p className="card-text about-card-text">
                    Discover our office exact location at the map.
                  </p>
                </div>
                <div className="card-footer">
                  <div className="d-flex justify-content-center">
                  <Link to="/about" className="btn main-card-btn">check out</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card h-100">
                <Link to="/delivery">
                  <img src="img/main3.jpg" alt="testalt" className="main-card-img card-img-top"/>
                </Link>
                <div className="card-body h-100">
                  <h5 className="card-title main-card-title">delivery</h5>
                  <p className="card-text about-card-text">
                    Find out our working schedule and where we can deliver items.
                  </p>
                </div>
                <div className="card-footer">
                  <div className="d-flex justify-content-center">
                  <Link to="/delivery" className="btn main-card-btn">check out</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainPageWrapper>
    )
  }
}

const MainPageWrapper = styled.div`

.main-card-img{
  height: 25vh;
  object-fit: cover;
}

.main-card-btn:hover{
  background-color:#333;
}

.main-card-btn{
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 14px;
  line-height: 1.2;
  font-weight: 600;
  padding: 10px 15px;
  background-color:var(--mainDark);
  border-radius:0;
  color: #fff;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
}

.main-card-title{
  text-transform:capitalize;
  text-align: center;
  font-family: Arial,sans-serif;
  font-size: 22px;
  line-height: 1.2;
  font-weight: 600;
}

.main-wrapper{
  padding:0 5rem !important;
}

`
