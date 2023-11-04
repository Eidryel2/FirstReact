import React from 'react';

const Team = () => {
  return (
    <section id="time" className="page-section bg-light pt-5" >
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Nossa Maravilhosa Equipe</h2>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="team-member">
              <img
                className="mx-auto rounded-circle text-warning"
                src="./imgs/ja2.jpg"
                alt="..."
              />
              <h4>Jay Park</h4>
              <p className="text-muted">Chef</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-member">
              <img
                className="mx-auto rounded-circle text-warning"
                src="./imgs/ja2.jpg"
                alt="..."
              />
              <h4>Jisoo Kim</h4>
              <p className="text-muted">Sub Chef</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-member">
              <img
                className="mx-auto rounded-circle text-warning"
                src="./imgs/ja2.jpg"
                alt="..."
              />
              <h4>Nayeon Yoo</h4>
              <p className="text-muted">Gerente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;