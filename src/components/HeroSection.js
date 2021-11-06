import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <h1>ADVANTURE AWAITS</h1>
            <p>Whate are you waiting for ??</p>
            <div className='hero-btns'>
                <Button 
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--larg'>
                    GET STARTED

                </Button>
                <Button 
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--larg'>
                   watch trailer<i className='far fa-play-circle' />

                </Button>

            </div>
        
        </div>
    )
}

export default HeroSection
