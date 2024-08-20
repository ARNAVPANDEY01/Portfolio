import React from 'react';
import Profile from '../../assets/Profile.png'
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import "./home.css" 

function Home() {
    return ( 
        <section className="home section grid">
            <img src={Profile} alt="" className="home__img" />

            <div className="home__content">
                <div className="home__data">
                    <h1 className="home__title"><span>I'm Arnav Pandey.</span> Frontend Developer</h1>

                    <p className="home__description">I'm a Frontend Developer with React JS. Intermediate knowledge of SQL and Java programming language . Proven ability to craft user-friendly experiences & build web applications. Eager to collaborate & contribute to innovative projects.</p>

                    <Link to='/about' className='button'>
                        More About Me <span className='button__icon'> <FaArrowRight /></span>
                    </Link>
                </div>
            </div>

            <div className="color__block"></div>
        </section>
    );
}

export default Home;