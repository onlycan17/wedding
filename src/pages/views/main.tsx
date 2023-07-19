import WithAuth from "@/pages/common/with-auth";
import React from "react";

const Main:React.FC = () => {
    return (
        <div>
            <h1>Welcome</h1>
        </div>
    );
}

export default WithAuth(Main);