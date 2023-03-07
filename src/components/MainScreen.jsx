import React from 'react';
import '../css/mainScreen.css';
import MathQuestionsCard from './MathQuestionsCard';
import {FaBars} from "react-icons/fa"

const nioClassLogo = require('../assets/nio-class.png');
const MainScreen = () => {
  return (
    <div className='container'>
      <nav className='nav-bar'>
      <input type = 'checkbox' id = 'check'/>
      <label for = 'check' className='checkbtn'>
        <FaBars/>
      </label>
      <div className='nio-class-symbol-div'>
        <img  src = {nioClassLogo} className = 'nio-class-logo'/>
        <span className='nio-class-logo-text'>NIOCLASS</span>
      </div>
        <ul className='nav-ul'>
            <li className="nav-li"><a href = "#" className='nav-links'>Home</a></li>
            <li className="nav-li"><a href = "#" className='nav-links'>About</a></li>
            <li className="nav-li"><a href = "#" className='nav-links'>Contact us</a></li>
        </ul>
      </nav>
            <MathQuestionsCard/>
            <section className='about-section'>
                <img src={nioClassLogo} className="about-logo"/>
                <div className='about-section-text-div'>
                    <h1 className='about-section-heading'>About Nioclass</h1>
                    <p className='about-section-text'>Nioclass marries the latest in education and psychology research with cutting-edge technology. It saves students valuable time while simultaneously improving problem-solving ability. The program is developed by Manav Kothari, a researcher in education, psychology, and computer science. He holds a bachelor's degree in Computer Science from Georgia Tech and a Masters's degree in Education from Harvard University.</p>
                </div>
            </section>
      <footer className='footer'>
        <h1 className='footer-text1'>Nioclass Pvt. Ltd</h1>
        <p className='footer-text2'>m@nioclass.com</p>
        <p className='footer-text2'>+91 8882628057</p>
        <p className='footer-text2'>Nioclass Pvt. Ltd</p>
        <p className='copyright-text'>©  Copyright 2021-2023<a href = "https://www.nioclass.com/" className='copyright-text-link'> nioclass.com</a>, All rights reserved.</p>
      </footer>
    </div>
  )
}

export default  MainScreen;
