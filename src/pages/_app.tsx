import type {AppProps} from 'next/app'
import {RecoilRoot} from "recoil";
import '../styles/globals.css';
import Header from "@/pages/components/header";
import React from "react";
import Footer from "@/pages/components/footer";

export default function App({Component, pageProps}: AppProps) {
    // @ts-ignore
    return (
        <RecoilRoot>
            <Header/>
            <Component {...pageProps} />
            <Footer/>
        </RecoilRoot>
    )
}
