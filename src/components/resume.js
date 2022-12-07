import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"

const Resume = () => {
    const navigate = useNavigate()
   
  return (
    <div className='listcss'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-12 col-lg-6'>
            <ul>
                <h1>List Of Code Topics I'm Proficient At! </h1>
                <li className='list-group-item'>HTML</li>
                <li className='list-group-item'>CSS</li>
                <li className='list-group-item'>JavaScript</li>
                <li className='list-group-item'>JQuerey</li>
                <li className='list-group-item'>React</li>
                <li className='list-group-item'>BootStrap</li>
                <li className='list-group-item'>Node/Express/MongoDB/MERN</li>
                <li className='list-group-item'>SQL</li>
                <li className='list-group-item'>PWAs</li>
                <li className='list-group-item'>ORM</li>
                <li className='list-group-item'>APIs</li>


            </ul>

                
            </div>


        </div>
       
       
       
       
        <button onClick={()=>navigate("/projects")} className="button1">Click Me To See Projects!</button>
        </div>
        </div>
  )
}

export default Resume