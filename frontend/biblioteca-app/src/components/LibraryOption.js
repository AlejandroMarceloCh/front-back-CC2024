import React, { useState } from 'react';
import '../styles/LibraryOption.css';

const LibraryOption = ({ imageSrc, children, isFixed, onFixChange }) => {
    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
        if (!isFixed) {
            setFlipped(!flipped);
            onFixChange(!flipped); // Cambiar el estado de "fijo"
        }
    };

    return (
        <div className={`library-option ${flipped ? 'flipped' : ''}`} onClick={handleClick}>
            <div className="library-option-inner">
                <div className="library-option-front">
                    <img src={imageSrc} alt="Library Option" />
                </div>
                <div className="library-option-back" onClick={(e) => e.stopPropagation()}>
                    <div className="back-content">
                        {children}
                        <button className="flip-back-button" onClick={handleClick}>
                            <img src="images/flechita.png"alt="Voltear" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LibraryOption;
