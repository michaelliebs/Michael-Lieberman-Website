import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Home from './pages/Home'
import './App.css'

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<div />} />
        <Route path="/blog" element={<div />} />
      </Routes>

    </>
  )
}

export default App
