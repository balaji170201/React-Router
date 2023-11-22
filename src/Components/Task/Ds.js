import React from 'react'
import { ds } from '../../Utils/ds'
import Render from './Render'

const Ds = () => {
  return (
    <>
      <div className='section'>
      {
        ds.map((element) => (
            <Render {...element}/>
        ))
      }
      </div>
    </>
  )
}

export default Ds