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
import AdminSidemenu from "@/pages/components/admin-sidemenu";
import AdminHeader from "@/pages/components/admin-header";

const queryClient = new QueryClient();

export default function App({Component, pageProps}: AppProps) {
    const router = useRouter();
    const isAdmin = router.pathname.startsWith('/admin');
    return (
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                {isAdmin && <div style={{height:'100vh'}} className={'w-full bg-gray-300'}>
                    <AdminHeader/>
                    <div className={'w-full h-full flex flex-row'}>
                        <AdminSidemenu/>
                        <Component {...pageProps} />
                    </div>
                </div>
                }
                {!isAdmin &&
                    <div>
                        <Header/>
                        <Component {...pageProps} />
                        {process.env.NODE_ENV === 'development' && (<ReactQueryDevtools initialIsOpen={false}/>)}
                        <Footer/>
                    </div>
                }
            </RecoilRoot>
        </QueryClientProvider>
    )
}
