import {BrowserEvents as Router, Route, Routes} from 'react-router'
import './App.css'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' />
          <Route path='/about' />
          <Route path='/settings' />
        </Routes>
      </Router>
    </div>
  )
}

export default App
