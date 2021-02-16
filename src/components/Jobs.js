import Heading from "./Heading";
import Card from "./Card";
import sc from "../icons/sc.svg";
import interswitch from "../icons/interswitch.svg";
import airtel from "../icons/airtel.svg";
import paystack from "../icons/paystack.svg";
import ecobank from "../icons/ecobank.svg";
import opera from "../icons/opera.svg";
const items = [
  {
    role: "VR Experience Designer",
    location: "Lagos",
    type: "Full time",
    logo: opera,
    name: "Opera",
    time: "36 minutes ago",
  },
  {
    role: "Senior Product Designer",
    location: "Nairobi",
    type: "Full time",
    logo: ecobank,
    name: "Ecobank",
    time: "44 minutes ago",
  },
  {
    role: "Graphics Designer",
    location: "Lagos",
    type: "Full time",
    logo: interswitch,
    name: "Interswitch",
    time: "1 day ago",
  },
  {
    role: "Head of CX Design",
    location: "Lagos",
    type: "Full time",
    logo: paystack,
    name: "Paystack",
    time: "2 days ago",
  },
  {
    role: "Visual Experience Designer",
    location: "Cotonou",
    type: "Full time",
    logo: airtel,
    name: "Standard Chartered",
    time: "3 days ago",
  },
  {
    role: "Senior Product Designer",
    location: "Nairobi",
    type: "Full time",
    logo: ecobank,
    name: "Ecobank",
    time: "44 minutes ago",
  },
  {
    role: "Graphics Designer",
    location: "Lagos",
    type: "Full time",
    logo: interswitch,
    name: "Interswitch",
    time: "1 day ago",
  },
  {
    role: "UI Designer",
    location: "Lagos",
    type: "Full time",
    logo: airtel,
    name: "Airtel",
    time: "2 days ago",
  },
];
const Jobs = () => {
  return (
    <div className="jobs">
      <Heading text="Recent jobs" />
      <div className="container">
        <div className="card">
          <div className="">
            <p className="title">
              VR Experience <br /> Designer
            </p>
            <div className="">
              <span className="text">Lagos</span>
              <span className="text" style={{ fontSize: 20 + "px", margin: 0 }}>
                {" "}
                .{" "}
              </span>
              <span className="text">{items[0].type}</span>
            </div>
          </div>
          <div className="">
            <div className="logoSection">
              <img
                src={items[0].logo}
                height="21"
                className=""
                alt="image of people laughing"
              />
              <p className="companyName">{items[0].name}</p>
            </div>
            <p className="time">{items[0].time}</p>
          </div>
        </div>
        {/* {items.map((item) => (
          <Card
            role={item.role}
            location={item.location}
            type={item.type}
            logo={item.logo}
            name={item.name}
            time={item.time}
          />
        ))} */}
        <div className="card">
          <div className="">
            <p className="title">
              Senior Product <br /> Designer{" "}
            </p>
            <div className="">
              <span className="text">Lagos</span>
              <span className="text" style={{ fontSize: 20 + "px", margin: 0 }}>
                {" "}
                .{" "}
              </span>
              <span className="text">{items[1].type}</span>
            </div>
          </div>
          <div className="">
            <div className="logoSection">
              <img
                src={items[1].logo}
                height="21"
                className=""
                alt="image of people laughing"
              />
              <p className="companyName">{items[1].name}</p>
            </div>
            <p className="time">{items[1].time}</p>
          </div>
        </div>

        <div className="card">
          <div className="">
            <p className="title">{items[2].role}</p>
            <div className="">
              <span className="text">Lagos</span>
              <span className="text" style={{ fontSize: 20 + "px", margin: 0 }}>
                {" "}
                .{" "}
              </span>
              <span className="text">{items[2].type}</span>
            </div>
          </div>
          <div className="">
            <div className="logoSection">
              <img src={items[2].logo} height="21" className="" alt="" />
              <p className="companyName">{items[2].name}</p>
            </div>
            <p className="time">{items[2].time}</p>
          </div>
        </div>

        <div className="card">
          <div className="">
            <p className="title">{items[3].role}</p>
            <div className="">
              <span className="text">Lagos</span>
              <span className="text" style={{ fontSize: 20 + "px", margin: 0 }}>
                {" "}
                .{" "}
              </span>
              <span className="text">{items[3].type}</span>
            </div>
          </div>
          <div className="">
            <div className="logoSection">
              <img src={items[3].logo} height="21" className="" alt="" />
              <p className="companyName">{items[3].name}</p>
            </div>
            <p className="time">{items[3].time}</p>
          </div>
        </div>

        <div className="card">
          <div className="">
            <p className="title">
              Visual Experience <br /> Designer
            </p>
            <div className="">
              <span className="text">Lagos</span>
              <span className="text" style={{ fontSize: 20 + "px", margin: 0 }}>
                {" "}
                .{" "}
              </span>
              <span className="text">{items[4].type}</span>
            </div>
          </div>
          <div className="">
            <div className="logoSection">
              <img
                src={items[4].logo}
                height="21"
                className=""
                alt="image of people laughing"
              />
              <p className="companyName">{items[4].name}</p>
            </div>
            <p className="time">{items[4].time}</p>
          </div>
        </div>
        <div className="card">
          <div className="">
            <p className="title">
              Senior Product <br /> Designer{" "}
            </p>
            <div className="">
              <span className="text">Lagos</span>
              <span className="text" style={{ fontSize: 20 + "px", margin: 0 }}>
                {" "}
                .{" "}
              </span>
              <span className="text">{items[5].type}</span>
            </div>
          </div>
          <div className="">
            <div className="logoSection">
              <img
                src={items[5].logo}
                height="21"
                className=""
                alt="image of people laughing"
              />
              <p className="companyName">{items[5].name}</p>
            </div>
            <p className="time">{items[5].time}</p>
          </div>
        </div>

        <div className="card">
          <div className="">
            <p className="title">{items[6].role} </p>
            <div className="">
              <span className="text">Lagos</span>
              <span className="text" style={{ fontSize: 20 + "px", margin: 0 }}>
                {" "}
                .{" "}
              </span>
              <span className="text">{items[6].type}</span>
            </div>
          </div>
          <div className="">
            <div className="logoSection">
              <img
                src={items[6].logo}
                height="21"
                className=""
                alt="image of people laughing"
              />
              <p className="companyName">{items[6].name}</p>
            </div>
            <p className="time">{items[6].time}</p>
          </div>
        </div>

        <div className="card">
          <div className="">
            <p className="title">{items[7].role} </p>
            <div className="">
              <span className="text">Lagos</span>
              <span className="text" style={{ fontSize: 20 + "px", margin: 0 }}>
                {" "}
                .{" "}
              </span>
              <span className="text">{items[7].type}</span>
            </div>
          </div>
          <div className="">
            <div className="logoSection">
              <img
                src={items[7].logo}
                height="21"
                className=""
                alt="image of people laughing"
              />
              <p className="companyName">{items[7].name}</p>
            </div>
            <p className="time">{items[7].time}</p>
          </div>
        </div>
      </div>
      <div className="centralize">
        <button className="allJobsBtn">Show All Jobs</button>
      </div>
    </div>
  );
};

export default Jobs;
