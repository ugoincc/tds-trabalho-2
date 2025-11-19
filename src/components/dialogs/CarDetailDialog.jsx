function CarDetailDialog({ isOpen, onClose, selectedCar }) {
  return (
    <div
      className={`modal-overlay-base ${isOpen ? "modal-overlay-active" : ""}`}
      onClick={onClose}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>

        <h2 style={{ color: "#c00000" }}>{selectedCar.make}</h2>
        <h4>{selectedCar.modelYear}</h4>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            border: "solid",
            "border-color": "#333",
            padding: "4px",
            borderRadius: "8px",
          }}
        >
          <img
            style={{
              maxHeight: "300px",
            }}
            src={selectedCar.imagePath}
            alt={selectedCar.make}
          />

          <div className="modal-body">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
              mollitia optio nisi molestias fugit id sunt aspernatur alias ullam
              doloremque! Ullam, iure suscipit, amet iste atque error magnam
              provident impedit eaque ipsum odio asperiores dicta consequatur
              veritatis voluptatibus nihil sapiente praesentium delectus autem
              hic non quis velit! Saepe, ab accusantium.
            </p>

            <p>
              Interpolação aqui: Detalhes do objeto carro, array de opcionais do
              carro, e alguma variavel comum{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetailDialog;
