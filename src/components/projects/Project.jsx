import React from 'react'
import './project.css'

import androidLogo from '../../assets/android.png'
import { Link } from 'react-router-dom'
function Project() {
  return (
    <div className='projects'>
        <div class="container">
            <div class="title">
                <h1>Our Projects</h1>
            </div>

            <div class="our_android_projects">
                <h1>Our Android Projects</h1>
                <img src={androidLogo} alt=""/>
                <Link to="/appgallery">Let's Check Out</Link>
            </div>
        </div>
    </div>
  )
}

export default Project