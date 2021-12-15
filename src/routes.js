import {Route, Routes} from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import MainPage from "./components/MainPage/MainPage";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Profile from "./components/Profile/Profile";
import {useEffect, useState} from "react";
import {auth} from "./firebase";

export const useRoutes = () => {
    const [isAuth, setIsAuth] = useState(undefined)
    useEffect(() => {
        auth.onAuthStateChanged(setIsAuth)
    }, [])
    if(isAuth === undefined) return;
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
            <Route path="/profile" exact={true} element={<Profile/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    )
}