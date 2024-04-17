import React from 'react'
import './Setting.css'

export const Setting = () => {
  return (
    <div className='setting'>
        <div className="general">
            <div className="title til">
                <h3>General</h3>
                <p>Notification, Data usage, block, allow, prioritise</p>
            </div>
            <div className="body"></div>
        </div>
        <div className="edit">
            <div className="title til">
                <h3>Edit</h3>
                <p>Themes, icons, Brightness, Clock style</p>
            </div>
            <div className="body"></div>
        </div>
        <div className="advenced">
            <div className="title til">
                <h3>Advanced Features</h3>
                <p>Motions and Gestures, one-handed mode</p>
            </div>
            <div className="body"></div>
        </div>
        <div className="accessibility">
            <div className="title til">
                <h3>Accessibility</h3>
                <p>Assistant menu, Language and input, Data and time, Reset</p>
            </div>
            <div className="body"></div>
        </div>
        <div className="about">
            <div className="title til">
                <h3>About Kikili</h3>
                <p>Status, Legal information</p>
            </div>
            <div className="body"></div>
        </div>
    </div>
  )
}
