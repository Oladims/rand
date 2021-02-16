import Heading from './Heading'
import gtbank from '../icons/gtbank.svg'
import interswitch from '../icons/interswitch.svg'
import airtel from '../icons/airtel.svg'
import paystack from '../icons/paystack.svg'
import ecobank from '../icons/ecobank.svg'
import opera from '../icons/opera.svg'

const Company = () => {
  return (
    <div className="company">
      <Heading text="Companies that trust us" />
      <div className="companyLogos">
        <img src={opera} className="image" alt="image of people laughing" />
        <img src={ecobank} className="image" alt="image of people laughing" />
        <img src={paystack} className="image" alt="image of people laughing" />
        <img src={airtel} className="image" alt="image of people laughing" />
        <img src={interswitch} className="image" alt="image of people laughing" />
        <img src={gtbank} className="image" alt="image of people laughing" />
      </div>
    </div>
  );
}

export default Company
