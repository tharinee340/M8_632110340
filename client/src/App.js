import Home from "./pages/Home.js";
import Login from "./pages/Login";
import { Switch, Route, Redirect } from 'react-router'
import Test from "./pages/test.js";
// import GlobalStyle from "./Components/GlobalStyle";
import Footer from "./Components/Footer.js";
import Detail from "./pages/Detail.js";
import Cart from "./pages/Cart.js"
import Register from "./pages/Register.js"; 
import Admin from "./pages/Admin.js";
import AdminUpdateProduct from "./pages/AdminUpdateProduct.js";
import AdminAddProduct from "./pages/AdminAddProduct.js";
import Success from "./pages/Success.js";
import ProductList from "./pages/ProductList"
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser)
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
        <Route path="/products/:category">
          <ProductList/>
        </Route>
        <Route path="/admin">
          <Admin/>
        </Route>
        <Route path="/success">
          <Success/>
        </Route>
        <Route path="/test-logout ">
          <Test/>
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/home"/> : <Login/>}
        </Route>
        <Route path="/register">
          {user ? <Redirect to="/home"/> : <Register/>}
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        
      </Switch>
      <Footer/>

      
    </>
  );
}

export default App;
