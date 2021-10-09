import React,{memo} from "react"
import { Footer } from "./organisms/layout/Footer"
import { Header} from "./organisms/layout/Header"

const Layout = memo(({ children }) => {
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
    return (
        <>
            <Header key="header"></Header>
                <main>{children}</main>
            <Footer></Footer>
        </>
    )
})

export default Layout