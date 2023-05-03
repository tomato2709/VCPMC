import React from "react";
import './menu.css';
import logo from '../../logo.svg';

const Menu: React.FC = () => {
    return (
        <div className="menu">
            <div className="menu__logo">
                <img src={logo}></img>
            </div>
            <div className="menu__item">
                <ul>Test</ul>
                <ul>Test</ul>
                <ul>Test</ul>
                <ul>Test</ul>
                <ul>Test</ul>
                <ul>Test</ul>
            </div>
        </div>
    );
}

export default Menu;