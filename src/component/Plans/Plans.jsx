import React from 'react'
import { plansData } from '../../data/plansData'

import './plans.css'

import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
    return (
        <div className="plans-container">
            <div className="programs-header" style={{ gap: '2rem' }}>
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>NOW WITHUS</span>
            </div>

            {/* Plans Card */}
            <div className="plans">
                {plansData.map((plan, i) => (
                <div className='plan' key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>$ {plan.price}</span>

                    <div className="features">
                        {plan.features.map((feature, j) => {
                            <div className="feature" key={j}>
                                <img src={whiteTick} alt="" />
                                <span>{feature}</span>
                            </div>
                        })}
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Plans;