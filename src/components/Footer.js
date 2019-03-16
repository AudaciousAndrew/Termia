import React from 'react'
import { ProductConsumer } from '../context'
import styled from 'styled-components'

export default function Footer (){
 return (
   <FooterWrapper>
    <div className="container-fluid footer">
      <div className="row">
        Footer
      </div>
    </div>
  </FooterWrapper>
  )
}

const FooterWrapper = styled.div`

.footer{
  background-color: var(--mainDark);
  height: 100px;
}

`
