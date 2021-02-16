import image from "../image.svg";

const Image = () => {
  return (
    <div className="imageSection">
      <div className="searchDiv">
        <div className="input-group">
          {/* <div class="input-group-icon">Income:</div> */}
          <div className="w-auto search">
            <div className="input-container">
              <span>
                <i className="fa fa-search icon"></i>
              </span>
              <input
                type="text"
                placeholder="Search jobs by title or keyword"
              />
            </div>
          </div>
          <div className="w-20 city">
            <div className="input-container">
              <span>
                <i className="fa fa-map-marker icon"></i>
              </span>
              <input type="text" placeholder="City or area" />
            </div>
          </div>
          <div className="w-15">
            <div className="">
              <input type="text" defaultValue="Nigeria" />
            </div>
          </div>
          <div className="input-group-icon">
            <button className="searchButton">Search</button>
          </div>
        </div>
      </div>
      {/* <img src={image} className="image" alt="image of people laughing" /> */}
    </div>
  );
};

export default Image;
