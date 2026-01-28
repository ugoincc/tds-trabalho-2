function CarDetailDialog({ isOpen, onClose, selectedCar }) {
  if (!selectedCar) return null;

  return (
    <div className="modal-overlay-base">
      <div className="modal-content">
        
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            border: "solid",
            borderColor: "#333",
            padding: "15px", 
            borderRadius: "8px",
            marginTop: "20px", 
          }}
        >
          <button 
            className="close-button" 
            onClick={onClose} 
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              zIndex: 10,
            }}
          >
            &times;
          </button>

          <img
            style={{ 
              maxHeight: "300px", 
              borderRadius: "4px",
              objectFit: "cover"
            }}
            src={selectedCar.imagePath}
            alt={selectedCar.make}
          />

          <div className="modal-body m-2">
            <h5 style={{ color: "#c00000", marginBottom: "15px" }}>
              {selectedCar.make} - {selectedCar.modelYear}
            </h5>
            <p style={{ lineHeight: "1.6" }}>
              {selectedCar.details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetailDialog;