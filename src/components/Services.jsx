import {ImBriefcase} from "react-icons/im";
import {BiPaintRoll} from "react-icons/bi";
import {FcMultipleDevices} from "react-icons/fc";

const Services = () => {
  return (
    <section className='services'>
      <div>
        <ImBriefcase/>
        <h3>Digital Strategy</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus enim odit assumenda, quaerat, blanditiis nisi error illum possimus culpa facere repellendus officia, soluta vel veritatis minus accusantium quod eum consectetur.
        </p>
        <button>More</button>
      </div>
      <div>
          <BiPaintRoll/>
        <h3>Creative Marketing</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus enim odit assumenda, quaerat, blanditiis nisi error illum possimus culpa facere repellendus officia, soluta vel veritatis minus accusantium quod eum consectetur.
        </p>
        <button>More</button>
      </div>
      <div>
          <FcMultipleDevices/>
        <h3>Web Development</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus enim odit assumenda, quaerat, blanditiis nisi error illum possimus culpa facere repellendus officia, soluta vel veritatis minus accusantium quod eum consectetur.
        </p>
        <button>More</button>
      </div>
    </section>
  )
}

export default Services