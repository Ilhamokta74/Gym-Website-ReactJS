import React from 'react'
import { programsData } from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

import './Programs.css'

const Programs = () => {
    return (
        <div className="Programs" id="programs">
            {/* Header */}
            <div className="programs-header">
                <span className='stroke-text'>Explore Our</span>
                <span>Programs</span>
                <span className='stroke-text'>To Shape you</span>
            </div>

            <div className="program-categories">
                {programsData.map((program) => (
                    <div className="category">
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="join-now">
                            <span>Join Now</span>
                            <img src={RightArrow} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Programs;