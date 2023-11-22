import React from 'react'
import { fsd } from '../../Utils/fsd'
import Render from './Render'

const Fsd = () => {
  return (
    <>
      <div className='section'>
      {
        fsd.map((element) => (
            <Render {...element}/>
        ))
      }
      </div>
    </>
  )
}

export default Fsd