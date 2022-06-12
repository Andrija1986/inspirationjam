import {ImBook} from "react-icons/im";
import {MdOutlineHealthAndSafety} from "react-icons/md";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {SiYourtraveldottv} from "react-icons/si";
import {BsMusicNote} from "react-icons/bs";
import {GiElectric} from "react-icons/gi";

const Industries = () => {
  return (
    <div className="biggest" id='industries'>
        <div className="main cards-wrapper">
            <div className="cards-heading">
                <p className="words2">We outshine at delivering the best web development and marketing services as per the customers’
                    requirements, be it small-size companies in their beginning phase or mid-size businesses looking for
                    growth, or large organizations actively making efforts to expand.</p>
            </div>
            <div className="cards-container-industry">
                <div className="card-industry">
                    <ImBook/>
                    <h4>Education</h4>
                </div>
                <div className="card-industry">
                    <MdOutlineHealthAndSafety/>
                    <h4>Healthcare</h4>
                </div>
                <div className="card-industry">
                    <AiOutlineShoppingCart/>
                    <h4>Retail and Commerce</h4>
                </div>
                <div className="card-industry">
                    <SiYourtraveldottv/>
                    <h4>Travel and Hospitality</h4>
                </div>
                <div className="card-industry">
                    <BsMusicNote/>
                    <h4>Media and Entertainment</h4>
                </div>
                <div className="card-industry">
                    <GiElectric/>
                    <h4>Energy and Utilities</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Industries

/* <section id='industries' className='industries'>
      <div>Education</div>
      <div>Health Care</div>
      <div>Media and Entertainment</div>
      <div>Retail and Commerce</div>
      <div>Travel and Hospitality</div>
      <div>Logistics and Distribution</div>
    </section> */