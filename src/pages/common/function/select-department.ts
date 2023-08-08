import {dataDepartment} from "@/pages/data/department";

const selectDepartment = (code : string) => {
  const departmentName = dataDepartment.filter((item) => {
    if(item.code === code) {
      return item.name;
    }
  });
  return departmentName[0].name;
}

export default selectDepartment;