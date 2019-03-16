import React from 'react'
import MapContainer from './MapContainer'
import styled from 'styled-components'

export default function About (){
 return (
    <AboutWrapper>
      <div className="about-wrapper mt-4 mb-4">
          <div className="map-container">
            <MapContainer />
          </div>
      </div>
    </AboutWrapper>
  )
}

const AboutWrapper = styled.div`

.about-wrapper{
  padding:0 5rem;
  height:900px;
}


`
