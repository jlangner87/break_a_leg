import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ShowPosters from './components/ShowPosters'

function App() {
  return (
    <div className="App">
      <div className="header">
        <Routes>
          <Route path="/shows/:id" />
        </Routes>
      </div>
      <h2 className="theater_name">Sometown Community Theater</h2>
      <Home />
      <div className="footer">Admin login route here</div>
    </div>
  )
}

export default App
