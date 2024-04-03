import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";


function Layout() {
    return ( 
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '100vh' }}>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
     );
}

export default Layout;