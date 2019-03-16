import React from 'react'
import styled from 'styled-components'

export default function FilterRow (props){
 return (
   <FilterRowWrapper>
     <div className="d-flex row-border flex-row justify-content-between align-items-baseline">
       <label className="label-filter row-text text-capitalize" htmlFor={props.id}>{props.text}</label>
       <button id={props.id} className="btn-filter" type="button" data-toggle="collapse" data-target={props.target}
        name={props.name}  onClick={props.buttonHandler}>
         { props.btnValue ?  "-"  :  "+" }
       </button>
     </div>
   </FilterRowWrapper>
  )
}

const FilterRowWrapper = styled.div`
  .row-text {
    color: var(--mainDark) !important;
    font-size: 18px !important;
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    font-weight: 600;
  }

  .row-border {
    border-bottom: 1px solid #dad9d7;
  }
`
