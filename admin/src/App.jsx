
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Header from './Component/Header';
import Mainn from './Component/Mainn';

import Order from "./Pages/Order";


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

        <Route path="/orders-admin" element={<Order />} />

      </Routes>

    </Router>


      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
              </>
            }
          ></Route>
          <Route path="/orders-admin" element={<Order />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
