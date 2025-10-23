import './App.css'
import { BrowserRouter as Router , Routes ,Route } from "react-router-dom";
import Dashboard from './components/Pages/Dashboard';
import About from './components/Pages/About';
function App() {
  

  return (
    <>
      <Router>
          <Routes>
              <Route path='/' element = {<Dashboard/>}/>
              <Route path='/About' element={<About/>}/>
              
          </Routes>
      </Router>
    </>
  )
}


export default App
