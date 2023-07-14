import * as process from "process";

const logDev = (value : any) => {
    if(process.env.NODE_ENV === 'development'){
        return console.log(value);
    }
}

export default logDev;