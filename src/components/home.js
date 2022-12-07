import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import selfie from '../assests/selfie.jpg'
const Home = () => {
    const navigate = useNavigate()
   
  return (
    <div className='card'>
            <img src={selfie} className= 'card-img-top' alt="Dylan Macres"  width="200" 
     height="200"/>

      <div className='card-body'>
        <h1 className='card-title'>About Me!</h1>


        <p className='card-text'>
            My name is Dylan Macres, and I'm currently enrolled in the University of Denver Coding Bootcamp! 
        </p>

        <p className='card-text'>
            After graduation in December 2022, I plan on bursting onto the tech scene and use my coding skills to become a software developer!
        </p>


      
       
       
       
       
        <button  onClick={()=>navigate("/resume")} className="button1" >Click Me to See My Code Proficiencies!</button>
    </div>
    </div>
    
  )
}

export default Home