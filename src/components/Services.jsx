import React from 'react'

function Services() {
  return (
    <>
 <section id="services" className="portfolio-section pt-5">
      <div className="container">
      <h2 className="text-center fw-bolder">Our <span className="text-danger">Services</span></h2>
        <h3 className="text-center">Specializing In</h3>
        <p className="text-center"><strong>Stop wasting time and money </strong><br />designing and managing a website that does not get results. Happiness guaranteed!</p>
        <div className="row">
          <div className="col-md-4 text-center py-5">
            <div className="card">
              <span className="py-4 rounded-circle"><i class="bi bi-terminal-dash fs-1 p-3 bg-primary text-white rounded-pill"></i></span>
              <div className="card-body">
                <h5 className="card-title">Covert HTML Templates to Reactjs + Vite </h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center py-5">
            <div className="card">
              <span className="py-4 rounded-circle"><i class="bi bi-terminal-dash fs-1 p-3 bg-primary text-white rounded-pill"></i></span>
              <div className="card-body">
                <h5 className="card-title">Business Website Development </h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center py-5">
            <div className="card">
              <span className="py-4 rounded-circle"><i class="bi bi-terminal-dash fs-1 p-3 bg-primary text-white rounded-pill"></i></span>
              <div className="card-body">
                <h5 className="card-title">eCommerce Store Development</h5>
              </div>
            </div>
          </div>
        </div>
        </div>

    </section>

</>
  );
};

export default Services