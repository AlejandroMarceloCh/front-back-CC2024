import React, { useState } from 'react';
import '../styles/LibraryOption.css';

const LibraryOption = ({ imageSrc, children, isFixed, onFixChange }) => {
    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
        if (!isFixed) {
            setFlipped(!flipped);
        }
    };

    return (
        <div className={`library-option ${flipped ? 'flipped' : ''}`} onClick={handleClick}>
            <div className="library-option-inner">
                <div className="library-option-front">
                    <img src={imageSrc} alt="Library Option" />
                </div>
                <div className="library-option-back" onClick={(e) => e.stopPropagation()}>
                    {children}
                    {isFixed && (
                        <button className="flip-back-button" onClick={() => onFixChange(false)}>
                            Voltear
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LibraryOption;
