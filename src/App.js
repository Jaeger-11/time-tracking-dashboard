import React, { useState } from "react";
import Box from "./box";
import profile from './images/image-jeremy.png';

const App = () => {
    const [active, setActive] = useState('weekly');
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
                            <h1 className="name">Jeremy Robson</h1>
                        </article>
                    </section>
                    <article className="options">
                        <p className={`option ${active === 'daily' && 'active'}`} onClick={handleClick}>daily</p>
                        <p className={`option ${active === 'weekly' && 'active'}`} onClick={handleClick}>weekly</p>
                        <p className={`option ${active === 'monthly' && 'active'}`} onClick={handleClick}>monthly</p>
                    </article>
                </main>
                <Box active = {active}/>
            </div>
            <footer className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="https://github.com/Jaeger-11">Falodun Oluwadamilola</a>.
            </footer>
        </div>
    )
}

export default App;