import Navbar from './pages/Navbar'
import ShowCreators from './pages/ShowCreators'
import AddCreator from './pages/AddCreator'
import ViewCreator from './pages/ViewCreator'
import EditCreator from './pages/EditCreator'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <div>
          <Routes>
            <Route path='/' element={<ShowCreators />} />
            <Route path='/create' element={<AddCreator />} />
            <Route path='/:id' element={<ViewCreator />} />
            <Route path='/edit/:id' element={<EditCreator />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div> 
    </div>
    </Router>
  )
}

export default App
