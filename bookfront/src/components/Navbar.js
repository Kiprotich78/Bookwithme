import React from 'react'

function Navbar() {
  //const user= JSON.parse(localStorage.getItem('currentuser'));
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="./Name">Book With Me</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="/">Register </a>
            <a class="nav-item nav-link" href="/Login">Login</a>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar