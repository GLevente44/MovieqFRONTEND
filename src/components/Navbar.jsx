import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-black">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/img/logo.png" alt="Movieq" id="logo" style={{ backgroundColor: 'black' }} />
        </Link>

        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
            <li className="nav-item dropdown ms-3">
              <a className="nav-link dropdown-toggle text-white fs-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">☰ Menü</a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><Link className="dropdown-item" to="/">Főoldal</Link></li>
                <li><a className="dropdown-item" href="#">Filmek</a></li>
                <li><a className="dropdown-item" href="#">Sorozatok</a></li>
                <li><a className="dropdown-item" href="#">Halloweeni ajánlások</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Kedvenceim</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <form className="d-flex ms-3" role="search">
                <input className="form-control me-2 fs-5" type="search" placeholder="Keresés..." aria-label="Search" />
                <button className="btn btn-outline-light" type="submit">&#128270;</button>
              </form>
            </li>
          </ul>
        </div>

        <div className="liHover">
          <i className="bi bi-person-fill fs-4" style={{ color: 'white', display: 'inline' }}></i>
          <Link className="nav-link fw-bold fs-5" style={{ color: 'white', display: 'inline' }} to="/signin">Regisztráció</Link>
        </div>
      </div>
    </nav>
  )
}