import { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import '../styles/signin.css'

export default function Signin() {
  const [loginMode, setLoginMode] = useState(false)

  return (
    <>
      <Navbar />
      <div id="left-content">
        <h1 id="signin-text">Movie<span style={{ color: 'yellow' }}>q</span></h1>
        <h2 id="signin-text2">Üdvözlünk a Movieq-n!</h2>
        <p id="signin-text3">Hozz létre egy fiókot, hogy nyomon követhesd kedvenc filmjeidet, sorozataidat, értékeléseidet és még több izgalmas funkciót használhass!</p>

        <div style={{ color: 'white', marginLeft: 25, marginBottom: 25 }}>
          <i className="bi bi-film fs-4" style={{ display: 'inline', color: 'yellow' }}></i>
          <h3 style={{ display: 'inline', fontSize: 25 }}>Kedvenc filmjeid nyomon <span style={{ marginLeft: 30 }}>követése</span></h3>
        </div>

        <div style={{ color: 'white', marginLeft: 25, marginBottom: 25 }}>
          <i className="bi bi-star fs-4" style={{ display: 'inline', color: 'yellow' }}></i>
          <h3 style={{ display: 'inline', fontSize: 25 }}>Értékelések és listák készítése</h3>
        </div>
        <div style={{ color: 'white', marginLeft: 25, marginBottom: 25 }}>
          <i className="bi bi-heart fs-4" style={{ display: 'inline', color: 'yellow' }}></i>
          <h3 style={{ display: 'inline', fontSize: 25 }}>Személyre szabott ajánlások</h3>
        </div>

        <div id="bottom-text">
          <p>A mozi nem csak egy hobbi, </p>
          <p>hanem egy életérzés</p>
        </div>
      </div>

      <div id="right-content">
        <div id="regisztracio-szoveg" style={{ textAlign: 'center', display: loginMode ? 'none' : 'block' }}>
          <i className="bi bi-person-circle" style={{ color: 'yellow', fontSize: 50 }}></i>
          <h1 style={{ color: 'white' }}>Regisztráció</h1>
          <br />
          <p style={{ color: 'white', fontSize: 18, fontStyle: 'italic' }}>Töltsd ki az alábbi űrlapot és csatlakozz a Movieq közösségéhez!</p>
        </div>

        <div id="bejelentkezes-szoveg" style={{ textAlign: 'center', display: loginMode ? 'block' : 'none' }}>
          <i className="bi bi-box-arrow-in-right" style={{ color: 'yellow', fontSize: 50 }}></i>
          <h1 style={{ color: 'white' }}>Bejelentkezés</h1>
          <br />
          <p style={{ color: 'white', fontSize: 18, fontStyle: 'italic' }}>Jelentkezz be a fiókodba, és folytasd a Movieq felfedezését!</p>
        </div>

        <div id="urlap" className={'form-container' + (loginMode ? ' login-mode' : '')}>
          <div id="regisztracio" className="form-box">
            <form action="">
              <i className="bi bi-person fs-5" style={{ color: 'white' }}></i>
              <label className="label fs-5">Felhasználónév</label><br />
              <input type="text" placeholder=" Válassz egy felhasználónevet" className="input" />
              <br /><br />

              <i className="bi bi-envelope fs-5" style={{ color: 'white' }}></i>
              <label className="label fs-5">E-mail cím</label><br />
              <input type="email" placeholder=" Írj be egy e-mail címet" className="input" />
              <br /><br />

              <i className="bi bi-shield-lock fs-5" style={{ color: 'white' }}></i>
              <label className="label fs-5">Jelszó</label><br />
              <input type="password" placeholder=" Adj meg egy jelszót" className="input" />
              <br /><br />

              <i className="bi bi-shield-lock-fill fs-5" style={{ color: 'white' }}></i>
              <label className="label fs-5">Jelszó újra</label><br />
              <input type="password" placeholder=" Írd be újra a jelszavad" className="input" />
              <br /><br /><br />

              <div>
                <button type="button" id="signin-btn" className="btn" style={{ backgroundColor: 'yellow' }}><i className="bi bi-person-fill-add fs-5"></i>Regisztráció</button>
              </div>

              <br /><br />

              <p style={{ textAlign: 'center', color: 'white' }}>Van már fiókod? <a href="#" id="bejelentkezesLink" style={{ color: 'yellow' }} onClick={(e) => { e.preventDefault(); setLoginMode(true) }}>Bejelentkezés</a></p>
            </form>
          </div>

          <div id="bejelentkezes" className="form-box">
            <form action="">
              <i className="bi bi-person fs-5" style={{ color: 'white' }}></i>
              <label className="label fs-5">Felhasználónév</label><br />
              <input type="text" placeholder=" Add meg a felhasználóneved" className="input" />
              <br /><br />

              <i className="bi bi-shield-lock fs-5" style={{ color: 'white' }}></i>
              <label className="label fs-5">Jelszó</label><br />
              <input type="password" placeholder=" Add meg a jelszavad" className="input" />
              <br /><br /><br />

              <div>
                <button type="button" id="login-btn" className="btn" style={{ backgroundColor: 'yellow', textAlign: 'center' }}><i className="bi bi-box-arrow-in-right fs-5"></i>Bejelentkezés</button>
              </div>
              <br /><br />

              <p style={{ textAlign: 'center', color: 'white' }}>Még nincs fiókod? <a href="#" id="regisztracioLink" style={{ color: 'yellow' }} onClick={(e) => { e.preventDefault(); setLoginMode(false) }}>Regisztráció</a></p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}