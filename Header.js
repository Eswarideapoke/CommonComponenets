import React from 'react';

const Header = ({ title, content, className }) => {

    const clickHandler = () => {
        alert("Clicked on button")
    }

    return (
        <div className={className}>
            <h2>{title}</h2>
            <p>{content}</p>
            <button onClick={clickHandler}></button>
        </div>
    );
};

export default Header;
