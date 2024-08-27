import { Outlet } from "react-router-dom"
import AppNav from "../../../components/AppNav"
import Footer from "../../../components/Footer"

export default function MainPage() {
    return (
        <>  
            <AppNav />
            <Outlet />
            <Footer />
        </>
    )
}