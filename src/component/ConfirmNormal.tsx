import React, { useState } from 'react';

interface ConfirmationProps {
  message: string;
  isOpen: boolean;
  handleConfirm: () => void;
  setIsOpen: (state: boolean) => void
}

const Confirmation: React.FC<ConfirmationProps> = ({ message, handleConfirm, isOpen, setIsOpen}) => {
  const closeConfirmation = () => {
    setIsOpen(false);
  };
  return (
    <>
      {isOpen && (
        <div style={{backgroundColor: "green", color: "white", position: "relative", top: "40%", left: "40%", width: "400px", height: "200px", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", borderRadius: "1rem"}}>
          <div className="modal-content">
            <p style={{fontSize: "1.5rem"}}>{message}</p>
            <button style={{borderRadius: ".5rem", padding: ".5rem 1rem", fontSize: "1rem"}} onClick={handleConfirm}>Yes</button>
            <button style={{borderRadius: ".5rem", padding: ".5rem 1rem", fontSize: "1rem"}} onClick={closeConfirmation}>No</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Confirmation;