import React from 'react';
import '../styles/LibraryOption.css';

const LibraryOption = ({ imageSrc, children, flipped, onFlip }) => {
    return (
        <div className={`library-option ${flipped ? 'flipped' : ''}`} onClick={onFlip}>
            <div className="library-option-inner">
                <div className="library-option-front">
                    <img src={imageSrc} alt="Library Option" />
                </div>
                <div className="library-option-back" onClick={(e) => e.stopPropagation()}>
                    <div className="back-content">
                        {children}
                        {flipped && (
                            <button className="flip-back-button" onClick={onFlip}>
                                <img src="/images/arrow.png" alt="Voltear" />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LibraryOption;

