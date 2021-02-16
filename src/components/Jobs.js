import Heading from "./Heading";
import Card from "./Card";
import gtbank from "../icons/gtbank.svg";
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
        {items.map((item) => (
          <Card
            role={item.role}
            location={item.location}
            type={item.type}
            logo={item.logo}
            name={item.name}
            time={item.time}
          />
        ))}
      </div>
      <div className="centralize"><button className="allJobsBtn">Show All Jobs</button></div>
    </div>
  );
};

export default Jobs;
