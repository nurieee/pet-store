import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Error404 from "./components/pages/404";
import Register from "./components/pages/Register";
import Pets from "./components/pages/Pets";
import Shop from "./components/pages/Shop";
import ProductDetails from "./components/pages/ProductDetails";
import Cart from "./components/pages/Cart";
import Contacts from "./components/pages/Contacts";


const BaseRouter = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/pets" component={Pets} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/product/:id" component={ProductDetails} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/contacts" component={Contacts} />
            <Route component={Error404} />
        </Switch>
    </div>
);

export default BaseRouter;
