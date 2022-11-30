import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout({children}){
return(
    <>
    <Head>
        <link rel="shortcut icon" href="/images/favicon.ico"></link>
        <title>PokéNext</title>
    </Head>
    <NavBar></NavBar>
    <main className="main-container">{children}</main>
    <Footer></Footer>
    </>
)
}