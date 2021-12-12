import React from "react";
import Header from "./Header/Header";
import Content from "./Content/Content";
import Backdrop from "../Backdrop/Backdrop";

const MainPage = () => {
    return (
        <>
            <div className="wrapper">
                <div className="container-app">
                    <Header/>
                    <main>
                        <Content/>
                    </main>
                </div>
            </div>
            <Backdrop/>
        </>
    )
}
export default MainPage