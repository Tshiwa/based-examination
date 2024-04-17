import React from 'react'
import './Notif.css'
import bandoki from '../Assets/bandoki.jpg'
import paradise from '../Assets/Paradise.jpg'
import desertion from '../Assets/Desertion.jpg'
import Kintu from '../Assets/Kintu.jpg'
import La_Vie_et_Demie from '../Assets/La_Vie_et_Demie.jpg'
import le_crame_de_maman from '../Assets/le_crame_de_maman.jpg'
import Manchester_Happened from '../Assets/Manchester_Happened.jpg'

export const Notif = () => {
  return (
    <div className='notif'>
        <div className="block">
            <img src={bandoki} alt="" />
            <div className="cont">
                <h4>Bandoki</h4>
                <p>The most op</p>
            </div>
            <div className="ico"></div>
        </div>
        <div className="block">
            <img src={paradise} alt="" />
            <div className="cont">
                <h4>Bandoki</h4>
                <p>The most op</p>
            </div>
            <div className="ico"></div>
        </div>
        <div className="block">
            <img src={desertion} alt="" />
            <div className="cont">
                <h4>Bandoki</h4>
                <p>The most op</p>
            </div>
            <div className="ico"></div>
        </div>
        <div className="block">
            <img src={Kintu} alt="" />
            <div className="cont">
                <h4>Bandoki</h4>
                <p>The most op</p>
            </div>
            <div className="ico"></div>
        </div>
        <div className="block">
            <img src={La_Vie_et_Demie} alt="" />
            <div className="cont">
                <h4>Bandoki</h4>
                <p>The most op</p>
            </div>
            <div className="ico"></div>
        </div>
        <div className="block">
            <img src={le_crame_de_maman} alt="" />
            <div className="cont">
                <h4>Bandoki</h4>
                <p>The most op</p>
            </div>
            <div className="ico"></div>
        </div>
        <div className="block">
            <img src={Manchester_Happened} alt="" />
            <div className="cont">
                <h4>Bandoki</h4>
                <p>The most op</p>
            </div>
            <div className="ico"></div>
        </div>
    </div>
  )
}
