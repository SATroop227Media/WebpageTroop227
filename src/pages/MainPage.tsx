
import {Outlet} from "react-router-dom"
import AppNav from "../components/AppNav"

export default function MainPage() {
    return (
        <>
            <AppNav />
            <Outlet />
        </>
    )
}