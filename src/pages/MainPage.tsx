
import {Outlet} from "react-router-dom"
import AppNav from "../components/AppNav"

export default function Root() {
    return (
        <>
            <AppNav />
            <Outlet />
        </>
    )
}