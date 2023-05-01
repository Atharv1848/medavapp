import React from 'react'
import "./style.scss"
import { App_Text } from '../language/English'

const Description = () => {
  return (
    <div className='Description'>
      <h5>Description</h5>
      <p>{App_Text["Description"][0]}</p>
      <p>{App_Text["Description"][1]}</p>
      <p>{App_Text["Description"][2]}</p>
    </div>
  )
}

export default Description
