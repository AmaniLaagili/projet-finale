import { Switch, Route } from "react-router";
import "./App.css";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Errors from "./Pages/Errors/Errors";
import Lunettesoleil from "./Pages/Lunettesoleil/Lunettesoleil";
import Lunettevue from "./Pages/Lunettevue/Lunettevue";
import Lentilles from "./Pages/Lentilles/Lentilles";
import Promotion from "./Pages/Promotion/Promotion";
import MyNavbar from "./Components/MyNavbar/MyNavbar";
import LandPage from "./Pages/Landpage/Landpage";
import PrivateRoute from "./router/PrivateRoute";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { current } from "./Redux/actions/user";
import HomeScreen from "./Components/screens/HomeScreen";
import ProductScreen from "./Components/screens/ProductScreen";
import CartScreen from "./Components/screens/CartScreen";
import MyCart from "./Components/MyCart/MyCart";
import CartItem from "./Components/screens/CartItem";
import AjouterProduit from "./Components/screens/AjouterProduit";
import UpdateProduit from "./Components/screens/UpdateProduit";
import EditProfile from "./Pages/EditProfile/EditProfile";
import CommandeValider from "./Components/screens/CommandeValider";
import UsersAdmin from "./Pages/CommandeAdmin/UsersAdmin";

import Order from "./Pages/Order/Order";
import OrderPageAdmin from "./Pages/OrderPage/OrderPageAdmin";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(current());
    }, []);
    return (
        <div>
            <MyNavbar />
            <MyCart />
            <Switch>
                <Route exact path="/" component={LandPage} />
                <Route exact path="/homescreen" component={HomeScreen} />
                <Route exact path="/produit/:id" component={ProductScreen} />
                <Route exact path="/cart" component={CartScreen} />
                <Route path="/product/:produitId" component={CartItem} />
                <Route path="/home" component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/profile" component={Profile} />
                <Route path="/lunettesoleil" component={Lunettesoleil} />{" "}
                <Route path="/lunettesvue" component={Lunettevue}></Route>
                <Route path="/lentilles" component={Lentilles}></Route>
                <Route path="/promotion" component={Promotion} />
                <Route path="/ajouterproduit" component={AjouterProduit} />
                <Route path="/updateproduit" component={UpdateProduit} />
                <Route path="/editprofil" component={EditProfile} />
                <Route path="/CommandeValider" component={CommandeValider} />
                <Route path="/order" component={Order} />
                <Route path="/users" component={UsersAdmin} />
                <Route path="/orderPageAdmin" component={OrderPageAdmin} />
                <Route path="/*" component={Errors} />
            </Switch>
        </div>
    );
}

export default App;
