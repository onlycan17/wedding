import type {AppProps} from 'next/app'
import {RecoilRoot} from "recoil";
import '../styles/globals.css';
import Header from "@/pages/components/header";
import React from "react";
import Footer from "@/pages/components/footer";
import {QueryClient, QueryClientProvider} from "react-query";
import * as process from "process";
import {ReactQueryDevtools} from "react-query/devtools";

const queryClient = new QueryClient();

export default function App({Component, pageProps}: AppProps) {
    // @ts-ignore
    return (
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <Header/>
                <Component {...pageProps} />
                { process.env.NODE_ENV === 'development' &&( <ReactQueryDevtools initialIsOpen={false} />) }
                <Footer/>
            </RecoilRoot>
        </QueryClientProvider>
    )
}
