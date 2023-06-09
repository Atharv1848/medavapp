import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function CourseRating() {
  const [rating, setRating] = useState(3)

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)

    // other logic
  }
  // Optinal callback functions
  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')
  const onPointerMove = (value, index) => console.log(value, index)

  return (
    <div className='App'>
      <Rating
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
        initialRate={rating}
        /* Available Props */
      />
    </div>
  )
}