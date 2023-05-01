import React from 'react'
import "./style.scss"
import { App_Text } from '../language/English'


const KeyFeatures = () => {
  return (
    <div className='KeyContainer mb-4'>
      <h5 className='pb-2'>Key Features</h5>     
      <ul className='ps-3'>
        <li>{App_Text["Key_Features"][0]}</li>
        <li>{App_Text["Key_Features"][1]}</li>
        <li>{App_Text["Key_Features"][2]}</li>
        <li>{App_Text["Key_Features"][3]}</li>
      </ul> 
    </div>
  )
}

export default KeyFeatures
