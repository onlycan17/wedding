import {dataRegion} from "@/pages/data/region";

const selectRegion = (code : string) => {
   const regionName =  dataRegion.filter((item) => {
        if(item.code === code) {
            return item.name;
        }
    });
  return regionName[0].name;
}

export default selectRegion;