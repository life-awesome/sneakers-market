import React from "react";
import {BrowserRouter} from 'react-router-dom'
import {useRoutes} from "./routes";
import {store} from "./store";
import {Provider} from "react-redux";

const App = () => {
    const routes = useRoutes();
    return (
        <BrowserRouter>
            <Provider store={store}>
                {routes}
            </Provider>
        </BrowserRouter>
    )
}

export default App;
