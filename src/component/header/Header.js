import React from "react";
import './header-style.css';

export const Header = ({changeView}) => {
    return (
        <header className="header">
            <code className="change-visible-button" onClick={changeView}>Change the view</code>
        </header>
    );
}
