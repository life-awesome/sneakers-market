import React, {useEffect, useState} from "react";
import {BrowserRouter} from 'react-router-dom'
import {useRoutes} from "./routes";
import {auth} from "./firebase";
import {store} from "./store";
import {Provider} from "react-redux";

const App = () => {
   const [isAuth, setIsAuth] = useState(null)
   const routes = useRoutes( isAuth );
   useEffect( () => {
        auth.onAuthStateChanged(setIsAuth)
   },[])
   return (
      <BrowserRouter>
        <Provider store={store}>
           {routes}
        </Provider>
      </BrowserRouter>
   )
}

export default App;
