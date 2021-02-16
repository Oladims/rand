const Card = ({role, location, type, name, logo, time}) => {
  return (
    <div className="card">
      <div className="">
        <p className="title">{role}</p>
        <div className="">
          <span className="text">{location}</span>
          <span className="text" style={{ fontSize: 20 + 'px', margin: 0}}> . </span>
          <span className="text">{type}</span>
        </div>
      </div>
      <div className="">
        <div className="logoSection">
          <img src={logo} height="21"  className="" alt="image of people laughing" />
          <p className="companyName">{name}</p>
        </div>
        <p className="time">{time}</p>
      </div>
    </div>
  );
};

export default Card;
