import React from 'react';
import './arrow-style.css';

export const ArrowLeft = ({handler, disabled}) => {
    return (
        <div className="arrow" onClick={() => disabled?null:handler()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                 className="" style={{opacity: disabled?0.5:null}} viewBox="0 0 16 16">
                <path
                    d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
            </svg>
        </div>
    )
}
