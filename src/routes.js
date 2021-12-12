import {Route, Routes} from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import MainPage from "./components/MainPage/MainPage";
import PageNotFound from "./components/PageNotFound/PageNotFound";

export const useRoutes = (isAuth) => {
    if(!isAuth) {
        return (
            <Routes>
                <Route path="*" element={<SignIn/>}/>
                <Route path='/signUp' exact={true} element={<SignUp/>}/>
            </Routes>
        )
    }
    return (
        <Routes>
            <Route path="/" exact={true} element={<MainPage/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    )
}