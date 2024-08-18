import React from 'react'
import './hero.css'
import { useTypewriter } from 'react-simple-typewriter'
const hero = () => {
    const [text]= useTypewriter({
        words:['Front-end Devloper','Fulstack Devloper','Software Engineer'],
        loop:{},
        typeSpeed:120,
        delaySpeed:50
    })
    return (
        <div className='container'>
            <div className="right">
                <div className="txt">
                    <h1>Hey,im</h1>
                    <h1>Pramish Sahu</h1>
                    <h2>And i'm a <span>{text}</span></h2>
                    <p>i am a motivated and versatile individual, always eger to take on new challenges.with a passion for learning i am dedicated to delivering high-quality results.with a positive attitude and a growth mindset,i am ready to make a meaningful contribution and achieve great things. </p>
                    <div className="btn">
                        <button>Check resume</button>
                    </div>
                </div>
            </div>
            <div className="left">
                <img src="../public/image/dp.jpg" alt="" />
            </div>
        </div>
    )
}

export default hero
