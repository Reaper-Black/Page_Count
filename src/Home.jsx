import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App"
import Dir from "./components/navbar"

const Home = () => {

    return (
        <div>
            <Dir />
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<App />}></Route>
                    <Route path="/" element={<App />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};
export default Home;