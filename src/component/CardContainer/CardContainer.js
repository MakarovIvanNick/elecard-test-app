import React from 'react';
import './card-container-style.css';
import {firstLetterUpper} from "../../utils/utils";
import {Card} from "../Card/Card";
import {Carousel} from "../Carousel/Carousel";

export const CardContainer = ({data, name}) => {
    if (data.length === 0) {
        return null;
    }
    return (
        <div className="cardContainer">
            <div className="sliderContainer">
                <code className="title">{firstLetterUpper(name)+`(${data.length})`}</code>
                <Carousel>
                    {
                        data.map(item =>
                            <Card img={item.image} key={item.image} UNIXTime={item.timestamp} fileSize={item.filesize} category={item.category}/>
                        )
                    }
                </Carousel>
            </div>
        </div>
    );
}
