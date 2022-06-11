import {ImBriefcase} from "react-icons/im";
import {BiPaintRoll} from "react-icons/bi";
import {FcMultipleDevices} from "react-icons/fc";

const Services = () => {
  return (
    <section className='services'>
      <div>
        <ImBriefcase/>
        <h3>Digital Strategy</h3>
        <p>Digital Strategy: Every Outstanding work is at first impossible. With the perfect Strategy and Planning, we weave every thread cautiously to make your business stand out in the Market.
        </p>
        <button>More</button>
      </div>
      <div>
          <BiPaintRoll/>
        <h3>Creative Marketing</h3>
        <p>Creative Marketing: Innovation distinguishes between the best. Our Creative Expert with profound imagination which is the true sign of intelligence brings you a variety of options to reality.
        </p>
        <button>More</button>
      </div>
      <div>
          <FcMultipleDevices/>
        <h3>Web Development</h3>
        <p>Web Development: Development paves the way for opportunities. Through pioneering techniques and Ideas, our development Teamm makes sure that they deliver the premier weaved sustainable designs.
        </p>
        <button>More</button>
      </div>
    </section>
  )
}

export default Services