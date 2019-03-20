import React from 'react'
import styled from 'styled-components'

export default function Default (props){
 return (
   <DefaultWrapper>
      <div className="container-fluid container-padding">
        <div className="default-title text-capitalize">page not found</div>
        <div className="default-subtitle">We couldn't find what you were looking for.</div>
        <div className="default-maintext">Please contact the owner of the site that linked you to the original URL and let them know their link is broken.</div>
      </div>
    </DefaultWrapper>
  )
}

const DefaultWrapper = styled.div`

.default-maintext{
  margin-top: 30px;
  font-size: 17px;
  line-height: 1.7;
  max-width: 42em;
}

.default-subtitle{
  font-weight: 300;
  color: #6d6d6d;
  font-size:24px;
  line-height: 1.7;
  max-width: 42em;
}

.container-padding{
  min-height: 95vh;
  padding:0 5rem !important;
}

.default-title{
  font-size: 60px;
  line-height: 65px;
  font-weight: 700;
  color: #282c34;
  margin: .67em 0;
}


`
