import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login/Login';
import List from './Pages/List/List';
import Single from './Pages/Single/Single';
import New from './Pages/New/New';
import { productInputs, userInputs } from './form';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single/>}/>
              <Route path="new" element={<New input={userInputs} title={"Add new user"}/>}/>
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single/>}/>
              <Route path="new" element={<New input={productInputs} title={"Add new product"}/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
