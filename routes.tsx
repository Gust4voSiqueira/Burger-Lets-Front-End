import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CartProvider from "./hooks/useCart";
import SearchProvider from "./hooks/useSearch";
import Landing from './Landing'
import Location from "./pages/Location/index";
import RequestsForm from "./pages/Requests/RequestsForm/requests-form";
import Requests from "./pages/Requests/RequestsPage";

export default function Routes() {
    return (
        <CartProvider>
            <SearchProvider>
                <BrowserRouter>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/Requests" component={Requests} />
                    <Route exact path="/Location" component={Location} />
                    <Route exact path="/RequestsForm" component={RequestsForm} />
                </BrowserRouter>
            </SearchProvider>
        </CartProvider>
    );
}