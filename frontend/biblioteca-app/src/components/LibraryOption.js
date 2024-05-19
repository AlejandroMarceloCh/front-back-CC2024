import React, { useState } from 'react';
import '../styles/LibraryOption.css';

const LibraryOption = ({ imageSrc, children }) => {
    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
        setFlipped(!flipped);
    };

    return (
        <div className={`library-option ${flipped ? 'flipped' : ''}`} onClick={handleClick}>
            <div className="library-option-inner">
                <div className="library-option-front">
                    <img src={imageSrc} alt="Library Option" />
                </div>
                <div className="library-option-back">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default LibraryOption;
