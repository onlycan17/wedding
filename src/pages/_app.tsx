import type {AppProps} from 'next/app'
import {RecoilRoot} from "recoil";
import '../styles/globals.css';
import Header from "@/pages/components/header";
import React from "react";
import Footer from "@/pages/components/footer";
import {QueryClient, QueryClientProvider} from "react-query";
import * as process from "process";
import {ReactQueryDevtools} from "react-query/devtools";
import {useRouter} from "next/router";

const queryClient = new QueryClient();

export default function App({Component, pageProps}: AppProps) {
    const router = useRouter();
    const isAdmin = router.pathname.startsWith('/admin');
    return (
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                {!isAdmin && <Header/>}
                <Component {...pageProps} />
                { process.env.NODE_ENV === 'development' &&( <ReactQueryDevtools initialIsOpen={false} />) }
                {!isAdmin && <Footer/>}
            </RecoilRoot>
        </QueryClientProvider>
    )
}
