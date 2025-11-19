function VehicleCard({ car, onClick }) {
  return (
    <div className="col-lg-3 col-md-4 g-2">
      <div onClick={onClick} className="vehicle-card h-100">
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
