import {dataChurch} from "@/pages/data/church";

const selectChurch = (code : string) => {
  const churchName = dataChurch.filter((item) => {
    if(item.code === code) {
      return item.name;
    }
  });
  return churchName[0].name;
}

export default selectChurch;