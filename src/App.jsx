import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Signin from './pages/Signin.jsx'
import Ted from './pages/Ted.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/ted" element={<Ted />} />
    </Routes>
  )
}

export default App