import React from 'react';
import styles from '../../modules/CarDetailDialog.module.css';

function CarDetailDialog({ isOpen, onClose, selectedCar }) {

  return (

    <div className="modal-overlay-base">
      
      <div className="modal-content">
        
        <div className={styles.carCard}>
          
          <button 
            className={`close-button ${styles.closeButtonPos}`} 
            onClick={onClose} 
          >
            &times;
          </button>

          <img
            className={styles.carImage}
            src={selectedCar.imagePath}
            alt={selectedCar.make}
          />

          <div className="modal-body m-2">
            
            <h5 className={styles.title}>
              {selectedCar.make} - {selectedCar.modelYear}
            </h5>
            
            <p className={styles.detailsText}>
              {selectedCar.details}
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetailDialog;