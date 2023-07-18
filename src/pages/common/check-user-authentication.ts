import {onAuthStateChanged} from "@firebase/auth";
import {auth} from "../config/firbase-setting";

export function checkUserAuthentication() : Promise<any> {
    return new Promise((resolve) => {
        onAuthStateChanged(auth,(user) => {
            resolve(user || null);
        });
    })
}