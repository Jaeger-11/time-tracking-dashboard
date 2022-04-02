import React from "react";
import Data from "./data";
import { useState } from "react";
import dots from './images/icon-ellipsis.svg';


const Box = ({ind, active}) => {

    return(<>
        {Data.map((activity, index)=>{
            const {title, timeframes, bg, img} = activity;
            const {daily, weekly, monthly} = timeframes;
            const present = timeframes[active]
            
            return (
                <div className="box" style={{backgroundColor: bg, backgroundImage: `url(${img})`}} key={index}>
                    <main className="mini">
                        <section>
                            <h4 className="title">{title}</h4>
                            <img src={dots} alt="dot-icon" className="dots"/>
                        </section>
                        <article>
                            <h2 className="current"> {present.current}hrs</h2>
                            <p className="previous"> last Week - {present.previous}hrs</p>
                        </article>
                    </main>
                </div>
            )
        })}
    </>
    )
    
}

export default Box;