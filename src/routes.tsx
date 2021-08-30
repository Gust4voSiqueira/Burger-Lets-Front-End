import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CartProvider from "./services/hooks/useCart";
import SearchProvider from "./services//hooks/useSearch";
import ProductsProvider from "./services/hooks/useProducts";
import Landing from './Landing'
import Location from "./pages/Location/index";
import RequestsForm from "./pages/Requests/RequestsForm/requests-form";
import Requests from "./pages/Requests/RequestsPage";
import { PageAdmin } from './pages/PageAdmin'
export default function Routes() {
    return (
        <ProductsProvider>
            <CartProvider>
                <SearchProvider>
                    <BrowserRouter>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/Requests" component={Requests} />
                        <Route exact path="/Location" component={Location} />
                        <Route exact path="/RequestsForm" component={RequestsForm} />
                        <Route exact path="/PageAdmin" component={PageAdmin} />
                    </BrowserRouter>
                </SearchProvider>
            </CartProvider>
        </ProductsProvider>
    );
}