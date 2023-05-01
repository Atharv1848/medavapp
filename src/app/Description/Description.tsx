import React from 'react'
import "./style.scss"
import { App_Text } from '../language/English'

const Description = () => {
  return (
    <div className='Description mb-4'>
      <h5 className='pb-2'>Description</h5>
      <p>{App_Text["Description"][0]}</p>
      <p>{App_Text["Description"][1]}</p>
      <p>{App_Text["Description"][2]}</p>
    </div>
  )
}

export default Description
