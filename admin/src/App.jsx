import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Header from './Component/Header';
import Mainn from './Component/Mainn';

import Order from "./Pages/Order";

import { useState } from 'react';

import Addproductss from "./Pages/Addproductss";
import Allproducts from "./Pages/Allproducts";



function App() {

  const [selected , setSelected] = useState("Dashboard");

  return (
    <>

    <Router>

      <Routes>

        <Route path='/' element={
          <>
          <Header  selected={selected} setSelected={setSelected}/>
          <Mainn  selected={selected} setSelected={setSelected}/>
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
          <Route path="/admin/addproducts" element={<Addproductss />} />
          <Route path="/admin/allproducts" element={<Allproducts />}></Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
