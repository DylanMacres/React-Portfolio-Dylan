import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"

const Projects = () => {
    const navigate = useNavigate()
        navigate("/projects")
    
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12 col-lg-6'>
            <ul>
                <p>List Of Code Topics I'm Proficient At! </p>
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
       
       
       
       
        <button onClick={()=>navigate("/home")}>Click Me to go Back Home!</button>
    </div>
  )
}

export default Projects