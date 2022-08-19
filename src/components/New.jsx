import React from 'react'

const New = ({newHere}) => {
  return (
    <div className='new'>
        <img src={newHere.imageUrl}/>
        <h3>Author : {newHere.author}</h3>
        <p>{newHere.content}</p>
        <h4>Released On : {newHere.date}</h4>
        <a href={newHere.readMoreUrl}>Read More</a>
    </div>
  )
}

export default New