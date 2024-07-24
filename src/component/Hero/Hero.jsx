import React from 'react'
import Header from '../Header/Header'

import './Hero.css'

import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import heart from '../../assets/heart.png';
import calories from '../../assets/calories.png';

import { motion } from 'framer-motion'

const Hero = () => {

    const transition = { type: 'spring', duration: 3 }
    const mobile = window.innerWidth <= 768 ? true : false;

    return (
        <div className="hero">

            <div className='blur hero-blur'></div>
            <div className="left-h">
                <Header />
                {/* The Best Ad */}
                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: mobile ? '178px' : '238px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}
                    ></motion.div>
                    <span>the best fitness club in the town</span>
                </div>

                {/* Hero Heading */}
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis velit eos possimus veniam ea autem!</span>
                    </div>
                </div>

                {/* Figures */}
                <div className="figures">
                    <div>
                        <span>+140</span>
                        <span>Expert Coachs</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>Members Joined</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>Fitness Programs</span>
                    </div>
                </div>

                {/* Hero Button */}
                <div className="hero-button">
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn More</button>
                </div>
            </div>

            <div className="right-h">
                <button className='btn'>Join Now</button>

                <motion.div
                    initial={{ right: '-1rem' }}
                    whileInView={{ right: '4rem' }}
                    transition={{ transition }}
                    className="heart-rate">
                    <img src={heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

                {/* Hero Images */}
                <img src={hero_image} alt="" className='hero-image' />
                <motion.img
                    initial={{ right: '11rem' }}
                    whileInView={{ right: '20rem' }}
                    transition={{ transition }}
                    src={hero_image_back} alt="" className='hero-image-back' />

                {/* Calories */}
                <motion.div
                    initial={{ right: '37rem' }}
                    whileInView={{ right: '28rem' }}
                    transition={{ transition }}
                    className="calories">
                    <img src={calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>

        </div>
    )
}

export default Hero;