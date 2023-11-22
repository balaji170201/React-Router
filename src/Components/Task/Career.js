import React from 'react'
import { career } from '../../Utils/career'
import Render from './Render'

const Career = ({img,title,link}) => {
  return (
    <>
      <div className='section'>
        {
          career.map((element) => (
            <Render {...element} />
          ))
        }
      </div>
    </>
  )
}

export default Career