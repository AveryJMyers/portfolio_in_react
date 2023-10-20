import React from 'react';
import '../App.css';

function LogoAnimation() {
    return (
        <div className="logo inline flex bold text-lg">
            <div className="char less-than">&lt;</div>
            <div className="char slash">/</div>
            <div className="char greater-than">&gt;</div>
            <div className="ave">AVE</div>
        </div>
    );
}

export default LogoAnimation;

