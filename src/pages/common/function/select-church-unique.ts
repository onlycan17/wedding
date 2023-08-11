import {dataChurch} from "@/pages/data/church";

const selectChurchUnique = (code : string) => {
    const uniqueCode  = dataChurch.filter((item) => {
        if(item.code === code) {
            return item.uniqueCode;
        }
    });
    return uniqueCode[0].uniqueCode;
}


export default selectChurchUnique;