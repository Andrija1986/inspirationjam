

const Services = () => {
  return (
    <div className="biggest" id="services">
        <div className="main services">
            <div className="services-headings">
                <h1 className="services-h2">SERVICES</h1>
                <h4>We are able to offer you the support you are looking for lorem ipsum</h4>
            </div>
            <div className="flex-container-services">
                <div className="cards-services">
                    <img src="./assets/services-digital.jpg" alt="" className="card-img-services"/>
                    <div className="card-content-services">
                        <h1 className="card-header-services">Digital Strategy</h1>
                        <p className="card-text-services">Every Outstanding work is at first impossible. With the
                            perfect Strategy and Planning, we weave every thread cautiously to make your business
                            stand out in the Market.</p>
                    </div>
                    <button className="card-btn-services">
                        More <span>&rarr;</span>
                    </button>
                </div>
                <div className="cards-services">
                    <img src="./assets/services-creative.jpg" alt="" className="card-img-services"/>
                    <div className="card-content-services">
                        <h1 className="card-header-services">Creative Marketing</h1>
                        <p className="card-text-services">Innovation distinguishes between the best. Our Creative
                            Experts with profound imagination which is the true sign of intelligence brings you a
                            variety of options to reality.</p>
                    </div>
                    <button className="card-btn-services">
                        More <span>&rarr;</span>
                    </button>
                </div>
                <div className="cards-services">
                    <img src="./assets/services-web.jpg" alt="" className="card-img-services"/>
                    <div className="card-content-services">
                        <h1 className="card-header-services">Web Development</h1>
                        <p className="card-text-services">Development paves the way for opportunities. Through
                            pioneering techniques and Ideas, our team makes sure that they deliver the
                            premier weaved sustainable designs.</p>
                    </div>
                    <button className="card-btn-services">
                        More <span>&rarr;</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services
