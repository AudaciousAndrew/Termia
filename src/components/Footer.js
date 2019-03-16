import React from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Footer (){
 return (
   <FooterWrapper>
    <div className="container-fluid footer">
      <div className="pt-3">
        <ul className="text-capitalize footer-list pr-5 pl-0">
          <li className="footer-item p-0"><Link className="footer-link" to="/">main</Link></li>
          <li className="footer-item"><Link className="footer-link" to="/products">products</Link></li>
        </ul>
        <ul className="text-capitalize footer-list px-0">
          <li className="footer-item"><Link className="footer-link" to="/about">about us</Link></li>
          <li className="footer-item"><Link className="footer-link" to="/delivery">delivery</Link></li>
        </ul>
        <div className="footer-support mr-5 pt-2">
          <h3 className="footer-number">8-800-555-3-555</h3>
          <h4 className="footer-number-message">call to reception</h4>
        </div>
      </div>
      <div className="footer-line">
      </div>
      <div className="footer-copyright px-2 pt-3 pb-5">
        <p>© 2019 Termia.com</p>
      </div>
    </div>
  </FooterWrapper>
  )
}

const FooterWrapper = styled.div`

.footer-support{
  float:right;
  line-height: 1.2;
}

.footer-number-message{
  font-size: 12px;
  font-weight: 300;
  font-style: normal;
  color: #a7a7a7;
}

.footer-number{
  font-size: 18px;
  font-weight: 600;
  color: #ebebeb;
  margin-bottom: 5px;
}

.footer-copyright{
  font-size: 12px;
  font-weight: 300;
  color: #ccc;
}

.footer-line{
  border-top: 1px solid #6a6a6a;
}

.footer{
  background-color: var(--mainDark);
  padding: 0 5rem !important;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
}

.footer-link{
  color:#ebebeb;
  font-size: 14px;
}

.footer-item{
  padding: 3px;
}

.footer-list{
  list-style-type:none;
  display:inline-block;
}

`
