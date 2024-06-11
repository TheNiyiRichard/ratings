import React from 'react';
import '../css/style.css';

const Dialog = ({ onClose }) => (
  <div className="dialog-overlay">
    <div className="dialog">
      <h2 className="dialog-title">Hi there, welcome to the dialog</h2>
      <div className="dialog-content">
        <p>Nothig to see here, lol.</p>
      </div>
      <div className="dialog-actions">
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  </div>
);

export default Dialog;
