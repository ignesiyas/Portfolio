import * as React from 'react';
import { MouseEvent } from 'react';
function Navbar(){
    // for handling event //
    const handleEvent = (event : MouseEvent) => alert(event.detail);
    // for handling event //
    return <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid customnavheader">
      <a className="navbar-brand" href="#">Home</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#" onClick={handleEvent}>About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
}

export default Navbar;