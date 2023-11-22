import React from 'react'

function Render({img,title,link}) {
  return (
    <>
        <div className='boxes'>

            <div>
              <img src={img} alt={title} className='img'/>
            </div>

            <div className='title'>
              <a href={link} target='_blank' rel="noreferrer" className='linkStyle'>{title}</a>
            </div>

        </div>
    </>
  )
}

export default Render