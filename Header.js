import React from 'react';

const Header = ({ title, content, className }) => {
    return (
        <div className={className}>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
};

export default Header;
