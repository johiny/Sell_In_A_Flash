import NavBars from "components/NavBars";
import "styles/LayoutStyle.css";
const Layout = ({children}) => {
    return (
        <>
        <NavBars/>
        <main className="cuerpo_central">{children}</main>
        <footer></footer>
        </>
    )
}

export default Layout;
