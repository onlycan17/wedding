import React from "react";
import WithAuthAdmin from "@/pages/common/with-auth-admin";

const Home : React.FC = () => {
  return (
    <div className={'w-full h-full mt-0.5'}>
        <h1>Home</h1>
    </div>
    );
}

export default WithAuthAdmin(Home);