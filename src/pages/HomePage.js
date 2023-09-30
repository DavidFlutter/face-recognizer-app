import React from 'react'
import Tilt from 'react-parallax-tilt';
import {GiBrain} from "react-icons/gi";


const HomePage = () => {
  return (
    <div className='HomePage'>
        <Tilt className='tilt'>
            <div >
                <GiBrain></GiBrain>
            </div>
        </Tilt>

        <div className="nav-btn">
            Sign out
        </div>

        <div className="center-div">
            <p>
                This Magic Brain will dectect faces in your pictures. Give it a try
            </p>
            <form>
                <input type="text" />
                <button>
                    Detect
                </button>
            </form>
        </div>
    </div>
  )
}

export default HomePage