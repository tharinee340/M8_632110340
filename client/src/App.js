import Home from "./pages/Home.js";
import Login from "./pages/Login";
import { Switch, Route } from 'react-router'
import Test from "./pages/test.js";
// import GlobalStyle from "./Components/GlobalStyle";
import Footer from "./Components/Footer.js";
import Detail from "./pages/Detail.js";
import Cart from "./pages/Cart"
import Register from "./pages/Register.js"; 
import Admin from "./pages/Admin.js";
import AdminUpdateProduct from "./pages/AdminUpdateProduct.js";
import AdminAddProduct from "./pages/AdminAddProduct.js";

function App() {
  return (
    <>
    {/* <GlobalStyle/> */}
      <Switch>
        <Route path="/admin/update/:id">
          <AdminUpdateProduct/>
        </Route>
        <Route path="/admin/add">
          <AdminAddProduct/>
        </Route>
        <Route path="/detail/:id">
          <Detail/>
        </Route>
        <Route path="/admin">
          <Admin/>
        </Route>
        <Route path="/test-logout ">
          <Test/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
        
      </Switch>
      <Footer/>

      
    </>
  );
}

export default App;
