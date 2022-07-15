import React, {useEffect, useRef, useState} from 'react';
import './carousel-style.css';
import {ArrowLeft} from "../arrow/arrowLeft";
import {ArrowRight} from "../arrow/arrowRight";


export const Carousel = ({children}) => {
    const [position, setPosition] = useState(0);
    const [left, setLeft] = useState(true);
    const [right, setRight] = useState(false);
    const slider = useRef(null);
    const maxWidth = 380 * (children.length - 1);
    const leftHandler = () => {
        setPosition(position - slider.current.clientWidth);
    }
    const rightHandler = () => {
        setPosition(position + slider.current.clientWidth);
    }
    useEffect(() => {
        if(position === 0){setLeft(true)}
        else {setLeft(false)}
        if(position >= maxWidth){setRight(true)}
        else {setRight(false)}

        slider.current.style = `transform: translateX(${-position}px); transition: 0.5s;`;
    }, [position]);

    return (
        <div className="align-container">
            <ArrowLeft handler={leftHandler} disabled={left}/>
            <div className="main-container">
                <div className="window">
                    <div className="all-pages-container" ref={slider}>
                        {children}
                    </div>
                </div>
            </div>
            <ArrowRight handler={rightHandler} disabled={right}/>
        </div>
    );
}
