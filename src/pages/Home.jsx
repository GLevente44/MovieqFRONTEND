import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar.jsx'
import '../styles/fooldal.css'

const napiFilmek = [
  { title: 'Film 1', text: 'Az első felkapott film.', bg: '/img/fooldal-hatter.jpg' },
  { title: 'Film 2', text: 'A második felkapott film.', bg: '/img/fooldal-hatter.jpg' },
  { title: 'Film 3', text: 'A harmadik felkapott film.', bg: '/img/fooldal-hatter.jpg' },
  { title: 'Film 4', text: 'A negyedik felkapott film.', bg: '/img/fooldal-hatter.jpg' },
  { title: 'Film 5', text: 'Az ötödik felkapott film.', bg: '/img/poszter3.jpg' },
  { title: 'Film 6', text: 'A hatodik felkapott film.', bg: '/img/poszter3.jpg' },
  { title: 'Film 7', text: 'A hetedik felkapott film.', bg: '/img/poszter3.jpg' },
  { title: 'Film 8', text: 'A nyolcadik felkapott film.', bg: '/img/poszter3.jpg' },
]

const filmValogatas = [
  { img: 'denever.jpg', title: 'Batman 2022', rating: '3.0', providers: [{ name: 'HBO Max', href: '#' }, { name: 'Netflix', href: '#' }, { name: 'Apple TV', href: '#' }] },
  { img: 'jatek.jpg', title: 'Toy Story', rating: '4.2', providers: [{ name: 'Disney+', href: '#' }, { name: 'Apple TV', href: '#' }] },
  { img: 'avatar.jpg', title: 'Avatar: Fire And Ash', rating: '4.1', providers: [{ name: 'Mozi premier', href: '#' }, { name: 'Disney+', href: '#' }] },
  { img: 'ted.jpg', title: 'Ted', rating: '4.5', providers: [{ name: 'Netflix', href: 'https://www.netflix.com/title/70218756' }, { name: 'SkyShowtime', href: 'https://www.skyshowtime.com/hu/stream/movies/ted/cf502e64-a0bd-34aa-8bc1-9b29578f7b58' }], link: '/ted' },
  { img: 'nagyfiuk.jpg', title: 'Grown ups', rating: '5.0', providers: [{ name: 'Netflix', href: '#' }, { name: 'Prime Video', href: '#' }] },
  { img: 'venom.jpg', title: 'Venom', rating: '4.6', providers: [{ name: 'Netflix', href: '#' }, { name: 'HBO Max', href: '#' }] },
]

const topSorozatok = [
  { img: 'loki.jpg', title: 'Loki', rating: '3.4', providers: [{ name: 'Disney+', href: '#' }] },
  { img: 'zombi.jpg', title: 'All Of Us Are Dead', rating: '4.0', providers: [{ name: 'Netflix', href: '#' }] },
  { img: 'polip.jpg', title: 'Squid Game', rating: '5.0', providers: [{ name: 'Netflix', href: '#' }] },
  { img: 'szerda.jpg', title: 'Wednesday', rating: '2.9', providers: [{ name: 'Netflix', href: '#' }] },
  { img: 'esernyo.jpg', title: 'The Umbrella Academy', rating: '4.3', providers: [{ name: 'Netflix', href: '#' }] },
  { img: 'fiuk.jpg', title: 'The Boys', rating: '4.6', providers: [{ name: 'Prime Video', href: '#' }] },
]

const pages = [napiFilmek.slice(0, 4), napiFilmek.slice(4, 8)]

export default function Home() {
  const [aktualisOldal, setAktualisOldal] = useState(0)
  const [irany, setIrany] = useState('left')

  useEffect(() => {
    const el = document.getElementById('carouselExampleIndicators')
    if (el && window.bootstrap) {
      window.bootstrap.Carousel.getOrCreateInstance(el, { ride: 'carousel' })
    }
  }, [])

  function kovetkezoFilm() {
    setIrany('left')
    setAktualisOldal((p) => (p < pages.length - 1 ? p + 1 : 0))
  }

  function elozoFilm() {
    setIrany('right')
    setAktualisOldal((p) => (p > 0 ? p - 1 : pages.length - 1))
  }

  return (
    <>
      <Navbar />
      <hr style={{ color: 'yellow' }} />

      <h2 style={{ textAlign: 'center', color: '#ffee00' }}>Ajánlásaink</h2>
      <br />

      <div id="carouselExampleIndicators" className="carousel slide mx-auto rounded overflow-hidden shadow" data-bs-ride="carousel" style={{ maxWidth: 600, backgroundColor: '#000' }}>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block mx-auto" src="/img/tamadnak.jpg" alt="First slide" style={{ height: 380, maxWidth: '100%', objectFit: 'contain' }} />
          </div>
          <div className="carousel-item">
            <img className="d-block mx-auto" src="/img/szellemek.jpg" alt="Second slide" style={{ height: 380, maxWidth: '100%', objectFit: 'contain' }} />
          </div>
          <div className="carousel-item">
            <img className="d-block mx-auto" src="/img/alien.jpg" alt="Third slide" style={{ height: 380, maxWidth: '100%', objectFit: 'contain' }} />
          </div>
          <div className="carousel-item">
            <img className="d-block mx-auto" src="/img/nonono.jpg" alt="Fourth slide" style={{ height: 380, maxWidth: '100%', objectFit: 'contain' }} />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Előző</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Következő</span>
        </button>
      </div>

      <h3 style={{ color: '#fffb00', marginLeft: 90 }}>Napi felkapott</h3>
      <br />

      <div className="movie-slider">
        <button className="slider-button prev-button" onClick={elozoFilm}>&#10094;</button>

        <div className="movie-container">
          {pages.map((oldal, i) => {
            const isActive = i === aktualisOldal
            const cls = 'movie-page' + (isActive ? ' active ' + (irany === 'left' ? 'slide-left' : 'slide-right') : '')
            return (
              <div className={cls} key={i}>
                {oldal.map((film, j) => (
                  <div className="movie-card" key={j}>
                    <div className="card text-white" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${film.bg}')` }}>
                      <div className="card-body">
                        <h5 className="card-title">{film.title}</h5>
                        <p className="card-text">{film.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )
          })}
        </div>

        <button className="slider-button next-button" onClick={kovetkezoFilm}>&#10095;</button>
      </div>

      <h3 style={{ color: 'yellow', marginLeft: 20, marginTop: 150 }}>| Film válogatások</h3>
      <br />

      <div className="d-flex flex-row flex-nowrap overflow-x-auto kartyak g-3 container-fluid px-5 pb-3">
        {filmValogatas.map((film, i) => (
          <div className="flex-shrink-0" key={i}>
            <div className="card bg-dark text-white h-100" style={{ width: '14rem' }}>
              {film.link ? (
                <a href={film.link}><img src={`/img/${film.img}`} className="card-img-top" alt={`${film.title} poszter`} style={{ height: 320, objectFit: 'cover' }} /></a>
              ) : (
                <img src={`/img/${film.img}`} className="card-img-top" alt={`${film.title} poszter`} style={{ height: 320, objectFit: 'cover' }} />
              )}
              <div className="card-body text-center d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
                    <i className="bi bi-star-fill text-warning"></i>
                    <span>{film.rating}</span>
                    <i className="bi bi-star text-warning"></i>
                  </div>
                  <h5 className="card-title">{film.title}</h5>
                </div>
                <div className="dropdown mt-3">
                  <button className="btn btn-outline-light dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Watch options
                  </button>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    {film.providers.map((p, j) => (
                      <li key={j}><a className="dropdown-item" href={p.href} target="_blank" rel="noreferrer">{p.name}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 style={{ color: 'yellow', marginLeft: 20, marginTop: 150 }}>| Top sorozatok</h3>
      <br />

      <div className="d-flex flex-row flex-nowrap overflow-x-auto kartyak g-3 container-fluid px-5 mb-5 pb-3">
        {topSorozatok.map((s, i) => (
          <div className="flex-shrink-0" key={i}>
            <div className="card bg-dark text-white h-100" style={{ width: '14rem' }}>
              <img src={`/img/${s.img}`} className="card-img-top" alt={`${s.title} poszter`} style={{ height: 320, objectFit: 'cover' }} />
              <div className="card-body text-center d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
                    <i className="bi bi-star-fill text-warning"></i>
                    <span>{s.rating}</span>
                    <i className="bi bi-star text-warning"></i>
                  </div>
                  <h5 className="card-title">{s.title}</h5>
                </div>
                <div className="dropdown mt-3">
                  <button className="btn btn-outline-light dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Watch options
                  </button>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    {s.providers.map((p, j) => (
                      <li key={j}><a className="dropdown-item" href={p.href} target="_blank" rel="noreferrer">{p.name}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </>
  )
}