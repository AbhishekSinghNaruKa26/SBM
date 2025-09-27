import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Header from './Component/Header';
import Mainn from './Component/Mainn';

function App() {


  return (
    <>
    <Router>

      <Routes>

        <Route path='/' element={
          <>
          <Header/>
          <Mainn/>
          </>
        }>
        </Route>


      </Routes>

    </Router>

    </>
  )
}

export default App
