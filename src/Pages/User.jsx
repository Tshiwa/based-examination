import React from 'react'
import joseph from '../Componets/Asset/joseph.jpg'
import './MyPageCss/User.css'

export const User = () => {
  return (
    <div className='user'>
      <div className="box">
        <div className="image">
          <img src={joseph} alt="" />
        </div>
        <div className="detail">
          <div className="ico--modif"></div>
          <br /><br />
          <h3><strong>Name:</strong> Josph</h3>
          <h3><strong>Email:</strong> josephtrexts@gmail.com</h3>
          <br /><br /><br />
        </div>
      </div>
    </div>
  )
}
