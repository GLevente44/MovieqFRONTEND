import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import '../styles/ted.css'

export default function Ted() {
  const [watchlist, setWatchlist] = useState(false)
  const [watched, setWatched] = useState(false)

  return (
    <>
      <Navbar />
      <hr className="m-0" style={{ color: '#fffb00', borderTop: '2px solid #fffb00', opacity: 1 }} />

      <main className="container py-4">
        <div className="row align-items-end mb-3">
          <div className="col-12 col-md-7">
            <h1 className="fw-bold mb-1 text-warning display-5">Ted</h1>
            <div className="text-secondary fs-6 d-flex flex-wrap align-items-center gap-2">
              <span>Eredeti cím: <em>Ted</em></span>
              <span>•</span>
              <span>Film</span>
              <span>•</span>
              <span>2012</span>
              <span>•</span>
              <span className="badge border border-secondary text-secondary">16</span>
              <span>•</span>
              <span>1h 46m</span>
            </div>
          </div>

          <div className="col-12 col-md-5 mt-3 mt-md-0">
            <div className="d-flex justify-content-md-end align-items-center gap-4">
              <div className="text-center">
                <div className="text-uppercase text-secondary small fw-bold">Movieq Értékelés</div>
                <div className="d-flex align-items-center justify-content-center gap-1 fs-5">
                  <i className="bi bi-star-fill text-warning"></i>
                  <span className="fw-bold text-white">8.1</span>
                  <span className="text-secondary fs-6">/10</span>
                </div>
              </div>

              <div className="text-center">
                <div className="text-uppercase text-secondary small fw-bold">Értékeld</div>
                <button className="btn btn-link text-primary p-0 text-decoration-none d-flex align-items-center gap-1 fs-5 mx-auto">
                  <i className="bi bi-star text-primary"></i>
                  <span className="fw-bold">Értékelés</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="media-wrapper">
          <div className="media-section">
            <div className="poster-box">
              <img src="/img/tedposzter.jpg" alt="Ted poszter" />
            </div>

            <div className="trailer-box">
              <img src="/img/tedtrailer2.jpg" alt="Ted előzetes képe" className="trailer-bg-img" />
              <div className="trailer-overlay">
                <button type="button" className="btn btn-outline-light rounded-circle p-3 mb-2" aria-label="Előzetes lejátszása">
                  <a href="https://youtu.be/1xSYmg_kpMY?si=ayBAgPX3m1Xy1gu2" target="_blank" rel="noreferrer">
                    <i className="bi bi-play-fill fs-2"></i>
                  </a>
                </button>
                <div className="h5 fw-bold mb-1">Előzetes lejátszása</div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex flex-wrap gap-2 mb-4">
          <a href="#" className="genre-badge">Vígjáték</a>
          <a href="#" className="genre-badge">Humor</a>
          <a href="#" className="genre-badge">Dráma</a>
        </div>

        <div className="row g-4">
          <div className="col-12 col-lg-8">
            <p className="fs-5 text-light mb-4">
              Egy férfinak, akinek gyermekkori vágya, hogy életre keltse mackóját, most el kell döntenie, hogy ez a barátság fontosabb-e számára, mint a barátnője.
            </p>

            <hr className="border-secondary my-4" />

            <div className="d-flex flex-wrap align-items-center gap-2">
              <span className="fw-bold text-white fs-5">Sztárok:</span>
              <div className="d-flex flex-wrap gap-2 fs-5">
                <a href="#" className="cast-link">Mark Wahlberg</a>
                <span className="text-secondary">•</span>
                <a href="#" className="cast-link">Mila Kunis</a>
                <span className="text-secondary">•</span>
                <a href="#" className="cast-link">Seth MacFarlane</a>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="d-grid gap-2">
              <button
                className={'btn btn-watchlist py-2 d-flex align-items-center justify-content-center gap-2' + (watchlist ? ' btn-active-success' : '')}
                id="watchlistBtn"
                onClick={() => setWatchlist((v) => !v)}
              >
                <i className="bi bi-plus-lg fs-5"></i>
                <span>Hozzáadás a kedvencekhez</span>
              </button>

              <button
                className={'btn btn-watched py-2 d-flex align-items-center justify-content-center gap-2' + (watched ? ' btn-active-success' : '')}
                id="watchedBtn"
                onClick={() => setWatched((v) => !v)}
              >
                <span>Megjegyzés</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}