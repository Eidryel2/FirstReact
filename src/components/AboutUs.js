import React from 'react';

const AboutUs = () => {
  return (
    <section id="somos" className="py-5 bg-dark text-light">
      <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-6">
            <img
              className="card-img-top mb-5 mb-md-0"
              src="./imgs/ja8.jpg"
              alt="..."
            />
          </div>
          <div className="col-md-6">
            <h1 className="text display-5 fw-bolder text-warning">Quem Somos</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium at dolorem quidem modi. Nam sequi consequatur
              obcaecati excepturi alias magni, accusamus eius blanditiis
              delectus ipsam minima ea iste laborum vero?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;