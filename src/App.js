import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Shop from './components/Shop/Shop';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import AuthProvider from './Context/AuthProvider';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';
import Footer from './components/Footer/Footer';
import Catagoris from './components/Header/Catagoris';
import Home from './components/Home/Home';
import Fassion from './components/Shop/Fassion';
function App() {
  return (
    <div>
     
    <AuthProvider>
    <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route path="/electronics">
            <Shop></Shop>
          </Route>
          <Route path="/fassion">
           <Fassion/>
          </Route>
          <Route path="/review">
            <OrderReview></OrderReview>
          </Route>
          <Route path="/products">
            <Catagoris/>
          </Route>
          <PrivetRoute path="/inventory">
            <Inventory></Inventory>
          </PrivetRoute>
          <Route path="/logIn">
           <Login/>
          </Route>
          <Route path="/signUp">
           <Signup/>
          </Route>
          <PrivetRoute path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </PrivetRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </AuthProvider>

    </div>
  );
}

export default App;
