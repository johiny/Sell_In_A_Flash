import Header from "../components/Header";
import React from "react";


const Layout = ({ children }) => {
    return (
        <div className = 'mainContainer'>
        <Header/>
        <main>
            {children}
        </main>
        </div>
    );
};

export default Layout;