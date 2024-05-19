import React, { useState } from 'react';
import LibraryOption from '../components/LibraryOption';
import LoanList from '../components/LoanList';
import RegisterLoan from '../components/RegisterLoan';
import '../styles/Prestamos.css';

const Prestamos = () => {
    const [fixedOption, setFixedOption] = useState(null);

    const handleFlip = (option) => {
        setFixedOption(fixedOption === option ? null : option);
    };

    return (
        <div className="prestamos-container">
            <h1>Gestión de Préstamos</h1>
            <div className="prestamos-options">
                <LibraryOption
                    imageSrc="/images/RegisterLoan.jpg"
                    flipped={fixedOption === 'registerLoan'}
                    onFlip={() => handleFlip('registerLoan')}
                >
                    <RegisterLoan onFixChange={(fix) => setFixedOption(fix ? 'registerLoan' : null)} />
                </LibraryOption>
                <LibraryOption
                    imageSrc="/images/DisplayLoans.jpeg"
                    flipped={fixedOption === 'listLoans'}
                    onFlip={() => handleFlip('listLoans')}
                >
                    <LoanList />
                </LibraryOption>
            </div>
        </div>
    );
};

export default Prestamos;
