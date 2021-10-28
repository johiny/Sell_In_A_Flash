import NavBars from "components/NavBars";
import React from "react";

import "styles/stylegu.css"



const Layout2 = ({children}) => {
    return (
        <>
        <NavBars/>
        <main className="cuerpo_central">{children}</main>
        <footer></footer>
        </>
    )
}

export default Layout2;