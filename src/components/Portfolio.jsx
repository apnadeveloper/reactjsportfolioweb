import React from 'react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section py-5">
      <div className="container">
      <h2 className="text-center fw-bolder mb-3">Our <span className="text-danger">Portfolio</span></h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://picsum.photos/id/2/367/267" className="card-img-top" alt="Project 1" />
              <div className="card-body">
                <h5 className="card-title">Instagram Clone Project </h5>
                <p className="card-text">I clone This project using Reactjs + Vite + Bootstrap.</p>
               
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://picsum.photos/id/20/367/267" className="card-img-top" alt="Project 2" />
              <div className="card-body">
                <h5 className="card-title">YouTube Clone Project</h5>
                <p className="card-text">I clone This project using Reactjs + Vite + Bootstrap.</p>
              
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://picsum.photos/id/7/367/267" className="card-img-top" alt="Project 3" />
              <div className="card-body">
                <h5 className="card-title">Linkedin Clone Project</h5>
                <p className="card-text">I clone This project using Reactjs + Vite + Bootstrap.</p>
               
              </div>
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-md-4">
            <div className="card">
              <img src="https://picsum.photos/id/9/367/267" className="card-img-top" alt="Project 1" />
              <div className="card-body">
                <h5 className="card-title">Amazon Clone Project </h5>
                <p className="card-text">I clone This project using Reactjs + Vite + Bootstrap.</p>
                
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://picsum.photos/id/26/367/267" className="card-img-top" alt="Project 2" />
              <div className="card-body">
                <h5 className="card-title">Linkedin Clone Project</h5>
                <p className="card-text">I clone This project using Reactjs + Vite + Bootstrap.</p>
               
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://picsum.photos/id/42/367/267" className="card-img-top" alt="Project 3" />
              <div className="card-body">
                <h5 className="card-title">Gmail Clone Project</h5>
                <p className="card-text">I clone This project using Reactjs + Vite + Bootstrap.</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
