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
function App() {
  return (
    <div>
     
    <AuthProvider>
    <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <OrderReview></OrderReview>
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
