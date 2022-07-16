import React from "react";
import './modal-style.css';

export const Modal = ({active, setActive, img}) => {
    return (
        <div className={active ? "active modal" : "modal"} onClick={() => setTimeout(setActive(!active),5000)}>
            <img className={active ? "modal-img img-active" : "modal-img"} src={img}/>
        </div>
    );
}
