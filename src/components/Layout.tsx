import React,{memo} from "react"
import { Footer } from "./organisms/layout/Footer"
import { Header} from "./organisms/layout/Header"
import { Box} from "@chakra-ui/react"

const Layout = memo(({ children }) => {
    return (
        <>
            <Header key="header"></Header>
            <Box minH="70vh">
                <main>{children}</main>
            </Box>
            <Footer></Footer>
        </>
    )
})

export default Layout