import Login from "@/pages/views/login";
import React from "react";
import Header from "@/pages/components/header";
import Footer from "@/pages/components/footer";

export default function Home() {

    return (
        <div>
            <Header/>
                <Login/>
            <Footer/>
        </div>
    )
}
