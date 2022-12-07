import React from "react";

function Middle() {
  return (
    <div className="middle">
      <div className="middle-container">
        <h2>Start Your Journey</h2>
        <div className="middle-buttons">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-sm-6  col-md-4 col-lg-3 my-2 text-center text-center">
              <button>Register</button>
            </div>
            <div className="col-12 col-sm-6  col-md-4 col-lg-3 my-2 text-center">
              <button>Explore Recipes</button>
            </div>
            <div className="col-12 col-sm-6  col-md-4 col-lg-3 my-2 text-center">
              <button>View Products</button>
            </div>
            <div className="col-12 col-sm-6  col-md-4 col-lg-3 my-2 text-center">
              <button>Share</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Middle;
