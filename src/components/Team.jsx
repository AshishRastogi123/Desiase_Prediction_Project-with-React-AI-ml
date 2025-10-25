import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Teams() {
  return (
    <>
      <div className="bg-white text-center p-3 rounded">
        <p className="h1 text-primary fw-bold">Meet our Team Members</p>
        <p>
          Empowering lives through innovation, our dedicated team built a
          responsive website that predicts diseases—bringing healthcare one step
          closer, faster, and smarter. Keep going!
        </p>

        <div className="container text-center mt-4">
          {/* Head Member / Team Leader */}
          <div className="row justify-content-center">
            <div className="col-md-3 mb-4">
              <div className="border border-warning p-3 h-100 d-flex flex-column justify-content-center align-items-center">
                <img
                  src="https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg"
                  alt="Team Leader"
                  className="img-fluid mb-2"
                  style={{ height: "220px" }}
                />
                <a
                  className="link-opacity-100 text-decoration-none mt-2"
                  href="#"
                >
                  Head Member
                  <br />
                  Team Leader
                </a>
              </div>
            </div>
          </div>

          {/* Other Team Members */}
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="border border-warning p-3 h-100 d-flex flex-column justify-content-center align-items-center">
                <img
                  src="https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg"
                  alt="Member 1"
                  className="img-fluid mb-2"
                  style={{ height: "200px" }}
                />
                <a
                  className="link-opacity-100 text-decoration-none mt-2"
                  href="#"
                >
                  Member1
                  <br />
                  Expert1
                </a>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="border border-warning p-3 h-100 d-flex flex-column justify-content-center align-items-center">
                <img
                  src="https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg"
                  alt="Member 2"
                  className="img-fluid mb-2"
                  style={{ height: "200px" }}
                />
                <a
                  className="link-opacity-100 text-decoration-none mt-2"
                  href="#"
                >
                  Member2
                  <br />
                  Expert2
                </a>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="border border-warning p-3 h-100 d-flex flex-column justify-content-center align-items-center">
                <img
                  src="https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg"
                  alt="Member 3"
                  className="img-fluid mb-2"
                  style={{ height: "200px" }}
                />
                <a
                  className="link-opacity-100 text-decoration-none mt-2"
                  href="#"
                >
                  Member3
                  <br />
                  Expert3
                </a>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="border border-warning p-3 h-100 d-flex flex-column justify-content-center align-items-center">
                <img
                  src="https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg"
                  alt="Member 4"
                  className="img-fluid mb-2"
                  style={{ height: "200px" }}
                />
                <a
                  className="link-opacity-100 text-decoration-none mt-2"
                  href="#"
                >
                  Member4
                  <br />
                  Expert4
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Teams;
