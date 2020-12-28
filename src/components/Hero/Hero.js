import gsap, { Power1 } from 'gsap';
import { Power4 } from 'gsap/gsap-core';
import React, { useEffect } from 'react'
import Profile from '../../utilities/images/Profile.png';
import './Hero.sass'

function Hero() {

    useEffect(() => {
        const t1 = gsap.timeline()
        t1.from(".Hero", { 
            y: "-30%", 
            opacity: 0, 
            duration: 2, 
            ease: Power4.easeOut 
        })
        t1.from(".Hero__container > div", { 
            y: "-50%", 
            opacity: 0, 
            duration: 2, 
            stagger: 0.3, 
            ease: Power4.easeOut 
        }, "-=1.2")
        t1.from(".Hero__container > img", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: Power4.easeOut
        }, "-=2")
        gsap.to(".Hero__scroll > div", {
            y: 33,
            ease: Power1.easeInOut,
            repeat: -1,
            duration: 0.8,
            yoyo: true
        })
    }, [])

    const scrollHire = () => {
        const hire = document.getElementsByClassName("Hire")[0]
        window.scrollTo(hire.offsetLeft, hire.offsetTop - hire.clientHeight * 0.2)
    }

    return (
        <div className="Hero">
            <div className="Hero__container">
                <div className="Hero__title">Hey! I'm Prince</div>
                <div className="Hero__about">
                    I’m a web developer with almost 4 years of experience.
                    I try to build quality through skill and design
                </div>
                <div className="Hero__buttons">
                    <a href="https://drive.google.com/open?id=1xLHIvxIGpB37G-Ks49nTtC5wVOMxJ4AE" target="_blank" rel="noopener noreferrer">
                        <button className="Hero__button">Click For CV</button>
                    </a>
                    <button className="Hero__button" onClick={() => scrollHire()}>Hire Me</button>
                </div>
                <div className="Hero__scroll">
                    <div></div>
                </div>
                <img className="Hero__profile" src={Profile} alt="Profile"/>
            </div>
            {/* <div className="Hero__scroll"></div> */}
        </div>
    )
}

export default Hero