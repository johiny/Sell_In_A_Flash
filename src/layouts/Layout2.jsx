import Header from "components/Header";
import React from "react";

import "styles/stylegu.css"



const Layout2 = ({ children }) => {
    return (
        <div className = 'mainContainer'>
        <Header/>
            <main>
                {children}
            </main>
        </div>
    );
};

export default Layout2;