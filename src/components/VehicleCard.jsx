function VehicleCard({ car }) {
  return (
    <div className="col-lg-3 col-md-4 g-2">
      <div
        className="card h-100"
        style={{ "background-color": "#2a2a2a", "border-color": "#555" }}
      >
        <img className="card-img-top" src={car.imagePath} alt={car.make} />
        <div className="card-body">
          <h4 style={{ color: "#c00000" }}>{car.make}</h4>
          <h6 className="card-subtitle mb-2 text-light">{car.modelYear}</h6>
          <p className="card-text text-light">{car.description}</p>
        </div>
      </div>
    </div>
  );
}

export default VehicleCard;
