import { useState, useRef, useEffect } from "react"
import { Outlet } from "react-router-dom"
import AppNav from "../../../components/AppNav"
import Footer from "../../../components/Footer"

export default function MainPage() {
    return (
        <>  
            {/* I think this is where I need to put the debouncer */}
            <AppNav />
            <Outlet />
            <Footer />
        </>
    )
}