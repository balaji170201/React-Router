import React from 'react'
import { all } from '../../Utils/all'
import Render from './Render'

const All = () => {
  return (
    <>
      <div className='section'>
      {
        all.map((element) => (
            <Render {...element}/>
        ))
      }
      </div>
    </>
  )
}

export default All