import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Header from './Component/Header';

function App() {


  return (
    <>
    <Router>

      <Routes>

        <Route path='/' element={
          <>
          <Header/>
          </>
        }>
        </Route>


      </Routes>

    </Router>
     <div className="bg-orange-500">Jay Shree Ram</div>
    </>
  )
}

export default App
