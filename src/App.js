import React, { useState } from "react";
import Box from "./box";
import Data from "./data";
import profile from './images/image-jeremy.png'
const App = () => {
    const [active, setActive] = useState('daily');
    const handleClick = (event) => {
        const clicked = event.target.textContent;
        setActive(clicked);
    }

    return(
        <div className="mega">
            <div className="container">
                <main className="profile-main">
                    <section>
                        <img src={profile} alt="profile" className="profile"/>
                        <article>
                            <p>Report for</p>
                            <h1>Jeremy Robson</h1>
                        </article>
                    </section>
                    <article className="options">
                        <p className="option" onClick={handleClick}>daily</p>
                        <p className="option" onClick={handleClick}>weekly</p>
                        <p className="option" onClick={handleClick}>monthly</p>
                    </article>
                </main>
                <Box active = {active}/>
            </div>
            <footer className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="#">Falodun Oluwadamilola</a>.
            </footer>
        </div>
    )
}

export default App;