import React from 'react';
import './card-style.css';
import {firstLetterUpper} from "../../utils/utils";
import {useDispatch} from "react-redux";
import {deleteCard} from "../../store/actions";

export const Card = ({img, fileSize, category, UNIXTime}) => {
    const dispatch = useDispatch();

    const style = {
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center center',
    };
    const day = new Date(UNIXTime);
    return (
        <div className="card" style={style}>
            <div className="gradient">
                <div className="deleted"><p onClick={() => dispatch(deleteCard({category, img}))}>X</p></div>
                <div className="description">
                    <li><code>{firstLetterUpper(category)}</code></li>
                    <li><code>{Math.round(fileSize/1024) + ' KB'}</code></li>
                    <li><code>{day.toLocaleDateString('en-US')}</code></li>
                </div>
            </div>
        </div>
    );
}
