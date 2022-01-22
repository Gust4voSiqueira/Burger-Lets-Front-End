import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import CartProvider from "./services/hooks/useCart";
import SearchProvider from "./services/hooks/useSearch";
import ProductsProvider from "./services/hooks/useProducts";
import Landing from './Landing'
import Location from "./pages/Location/index";
import RequestsForm from "./pages/Requests/RequestsForm";
import Requests from "./pages/Requests/RequestsPage";
import { PageAdmin } from './pages/PageAdmin'

import { useAuth } from './services/hooks/useAuth'

export default function Routes() {
    const { authenticated } = useAuth()

    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route
            {...rest}
            render={props =>
                authenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/', state: { from: props.location } }} />
                )
            }
        />
    )

    return (

        <ProductsProvider>
            <CartProvider>
                <SearchProvider>
                    <BrowserRouter>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/Requests" component={Requests} />
                        <Route exact path="/Location" component={Location} />
                        <Route exact path="/RequestsForm" component={RequestsForm} />
                        <PrivateRoute path="/PageAdmin" component={PageAdmin} />
                    </BrowserRouter>
                </SearchProvider>
            </CartProvider>
        </ProductsProvider>

    );

}