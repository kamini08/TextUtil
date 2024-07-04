
import './App.css';

function Navbar(props) {
  
  return (
<nav className={`navbar navbar-expand-lg  d-flex`} data-bs-theme={props.mode} style={{backgroundColor: props.mode==='dark'?'black':'white'}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.about}</a>
        </li>
      </ul>

  </div>
  <div className="ml-auto p-2">
          <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`} >
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={props.toggleMode}></input>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          </div>
  </div>
</div>
</nav>
  );
}

export default Navbar;
