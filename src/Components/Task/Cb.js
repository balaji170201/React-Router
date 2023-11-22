import React from 'react'
import { cb } from '../../Utils/cb'
import Render from './Render'

const Cb = () => {
  return (
    <>
      <div className='section'>
      {
        cb.map((element) => (
            <Render {...element}/>
        ))
      }
      </div>
    </>
  )
}

export default Cb