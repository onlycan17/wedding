import { NextPage } from "next";
import React, { useRef, useState } from "react";

import generateYear from "@/pages/common/function/generate-year";
import { dataDepartment } from "@/pages/data/department";
import generateNumbers from "@/pages/common/function/generate-number";
import { secondStatus } from "@/pages/data/second-status";
import { newClass } from "@/pages/data/new-class";
import { religion } from "@/pages/data/religion";
import { education } from "@/pages/data/education";
import { jobSimple } from "@/pages/data/job-simple";
import { residence } from "@/pages/data/residence";

type ActivedTab = {
  activedTab: number;
  setActivedTab: React.Dispatch<React.SetStateAction<number>>;
};

type Siblings = {
  index: number;
  name: string;
  age: number;
  religion: string;
  education: string;
  job: string;
  residence: string;
  status: string;
  support: string;
  persecution: string;
};

const Tab5FamilyInfo: NextPage<ActivedTab> = ({ activedTab, setActivedTab }) => {
  const [siblings, setSiblings] = useState<Siblings[]>([]); // 초기 상태는 하나의 필드만 있도록 설정

  const handleNextTab = () => {
    setActivedTab(2);
  };

  const closeSiblings = (index: number) => {
    const temp = [...siblings];
    temp.splice(index, 1);
    setSiblings(temp);
  };

  const addSiblings = () => {
    const temp = [...siblings];
    temp.push({
      index: siblings.length,
      name: "",
      age: 0,
      religion: "",
      education: "",
      job: "",
      residence: "",
      status: "",
      support: "",
      persecution: "",
    });
    setSiblings(temp);
  };

  return (
    <div className={"bg-whitesmoke w-full"}>
      <div className={"bg-white w-full flex flex-col items-center justify-center"}>
        <div className={"w-[1200px] bg-back-select"}>
          <div id={"title"} className="w-full h-11 text-center text-[35px] text-darkslategray font-noto-sans m-[46px]">
            <div className="">가족정보</div>
          </div>
          <div id={"content"} className="w-full flex flex-col pl-[88px] pt-[33px] ">
            <div className={"w-full flex justify-end pr-[35.85px]"}>
              <div className={"w-[362px]"}>
                <div className={"w-full flex flex-row justify-center items-center"}>
                  <div
                    className="text-[#e82121] text-left w-3"
                    style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                  >
                    *
                  </div>
                  <div
                    className="text-_500 text-left pr-[17.85px]"
                    style={{ font: "var(--font-16, 400 16px/150% 'Noto Sans', sans-serif)" }}
                  >
                    필수입력 정보입니다.
                  </div>
                  <div className="bg-[#d9d9d9] w-[47px] h-[19px] mr-[5.15px]"></div>
                  <div
                    className="text-_500 text-left"
                    style={{ font: "var(--font-16, 400 16px/150% 'Noto Sans', sans-serif)" }}
                  >
                    비공개 정보 입니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start shrink-0">
            <div className="text-primary2 text-left" style={{ font: "700 22px/150% 'Noto Sans', sans-serif" }}>
              아버지{" "}
            </div>
          </div>
          <div className={"mt-[58px] ml-[88px]"}>
            <div className="flex flex-row items-start justify-start">
              <div
                className="text-_900 text-left font-bold flex items-center justify-start"
                style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}
              >
                성명{" "}
              </div>
              <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6">
                <div
                  className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                  style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                >
                  *
                </div>
              </div>
              <div className={"w-[200px] h-[60px] mt-[-15px] ml-[42px]"}>
                <input
                  className={"h-[60px] rounded-[5px] border-solid border-_400 border   text-_500 "}
                  placeholder="입력"
                />
              </div>

              <div
                className="text-_900 text-left font-bold flex items-center justify-start"
                style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}
              >
                연령{" "}
              </div>
              <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6">
                <div
                  className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                  style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                >
                  *
                </div>
              </div>
              <div className={"w-[200px] h-[60px] mt-[-15px] ml-[42px]"}>
                <input
                  className={"h-[60px] rounded-[5px] border-solid border-_400 border   text-_500 "}
                  placeholder="입력"
                />
              </div>

              <div
                className="text-_900 text-left font-bold flex items-center justify-start"
                style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}
              >
                종교{" "}
              </div>
              <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6">
                <div
                  className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                  style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                >
                  *
                </div>
              </div>
              <div className={"w-[200px] h-[60px] mt-[-15px] ml-[42px]"}>
                <select className={"h-[60px] rounded-[5px] border-solid border-_400 border   text-_500 "}>
                  <option>선택</option>
                  {religion.map((item, index) => (
                    <option key={index}>{item}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="ml-[88px] mt-[40px]">
            <div className="flex flex-row items-start justify-start">
              <div
                className="text-_900 text-left font-bold flex items-center justify-start"
                style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}
              >
                학력{" "}
              </div>
              <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6">
                <div
                  className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                  style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                >
                  *
                </div>
              </div>
              <div className={"w-[200px] h-[60px] mt-[-15px] ml-[42px]"}>
                <select className={"h-[60px] rounded-[5px] border-solid border-_400 border   text-_500 "}>
                  <option>선택</option>
                  {education.map((item, index) => (
                    <option key={index}>{item}</option>
                  ))}
                </select>
              </div>
              <div className={"w-[360px] h-[60px] mt-[-15px] ml-[20px]"}>
                <input
                  className={"w-full h-[60px] rounded-[5px] border-solid border-_400 border   text-_500 "}
                  placeholder="최종학교명"
                />
              </div>
            </div>
          </div>

          <div className="ml-[88px] mt-[40px]">
            <div className="flex flex-row items-start justify-start">
              <div
                className="text-_900 text-left font-bold flex items-center justify-start"
                style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}
              >
                직업/종{" "}
              </div>
              <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6">
                <div
                  className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                  style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                >
                  *
                </div>
              </div>
              <div className={"w-[200px] h-[60px] mt-[-15px] ml-[21px]"}>
                <select className={"h-[60px] rounded-[5px] border-solid border-_400 border   text-_500 "}>
                  <option>선택</option>
                  {jobSimple.map((item, index) => (
                    <option key={index}>{item}</option>
                  ))}
                </select>
              </div>
              <div className={"w-[360px] h-[60px] mt-[-15px] ml-[20px]"}>
                <input
                  className={"w-full h-[60px] rounded-[5px] border-solid border-_400 border   text-_500 "}
                  placeholder="직장명"
                />
              </div>
              <div className="ml-[41px] flex items-start justify-start">
                <div
                  className="text-_900 text-left font-bold flex items-center justify-start"
                  style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}
                >
                  거주지{" "}
                </div>
                <div className="items-center justify-center shrink-0 w-6 h-6">
                  <div
                    className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                    style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                  >
                    *
                  </div>
                </div>
                <div className={"w-[200px] h-[60px] mt-[-15px] ml-[20px]"}>
                  <select className="h-[60px] rounded-[5px] border-solid border-_400 border   text-_500 ">
                    <option>선택</option>
                    {residence.map((item, index) => (
                      <option key={index}>{item}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[109px] ml-[88px]">
            <div className="flex flex-row items-start justify-start">
              <div
                className="text-_900 text-left font-bold flex items-center justify-start"
                style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}
              >
                현재상태{" "}
              </div>
              <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6">
                <div
                  className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                  style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                >
                  *
                </div>
              </div>

              <div className="ml-[12px] ">
                <div className={"w-full flex"}>
                  <span className="bg-chk">
                    <input type="checkbox" id="home" name="home" />
                    <label htmlFor="home" className={"text-_600 text-[15px]"}>
                      동거{" "}
                    </label>
                  </span>
                </div>
              </div>
              <div className="ml-[12px] ">
                <div className={"w-full flex"}>
                  <span className="bg-chk">
                    <input type="checkbox" id="building" name="building" />
                    <label htmlFor="building" className={"text-_600 text-[15px]"}>
                      별거{" "}
                    </label>
                  </span>
                </div>
              </div>
              <div className="ml-[12px] ">
                <div className={"w-full flex"}>
                  <span className="bg-chk">
                    <input type="checkbox" id="car" name="car" />
                    <label htmlFor="car" className={"text-_600 text-[15px]"}>
                      사망{" "}
                    </label>
                  </span>
                </div>
              </div>
              <div
                className="ml-[56px] text-_900 text-left font-bold flex items-center justify-start"
                style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}
              >
                부양유무{" "}
              </div>
              <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6">
                <div
                  className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                  style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                >
                  *
                </div>
              </div>

              <div className="ml-[12px] ">
                <div className={"w-full flex"}>
                  <span className="bg-chk">
                    <input type="checkbox" id="home" name="home" />
                    <label htmlFor="home" className={"text-_600 text-[15px]"}>
                      유{" "}
                    </label>
                  </span>
                </div>
              </div>
              <div className="ml-[12px] ">
                <div className={"w-full flex"}>
                  <span className="bg-chk">
                    <input type="checkbox" id="building" name="building" />
                    <label htmlFor="building" className={"text-_600 text-[15px]"}>
                      무{" "}
                    </label>
                  </span>
                </div>
              </div>
              <div
                className="ml-[56px] text-_900 text-left font-bold flex items-center justify-start"
                style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}
              >
                핍박유무{" "}
              </div>
              <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6">
                <div
                  className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                  style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                >
                  *
                </div>
              </div>

              <div className="ml-[12px] ">
                <div className={"w-full flex"}>
                  <span className="bg-chk">
                    <input type="checkbox" id="home" name="home" />
                    <label htmlFor="home" className={"text-_600 text-[15px]"}>
                      유{" "}
                    </label>
                  </span>
                </div>
              </div>
              <div className="ml-[12px] ">
                <div className={"w-full flex"}>
                  <span className="bg-chk">
                    <input type="checkbox" id="building" name="building" />
                    <label htmlFor="building" className={"text-_600 text-[15px]"}>
                      무{" "}
                    </label>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-[62px]"></div>
        </div>
        <div className="mb-[60px]"></div>

        <div className="flex flex-col gap-[15px] items-start justify-start ">
          <div className="flex flex-row gap-2.5 items-start justify-start shrink-0">
            <div className="text-primary2 text-left" style={{ font: "700 22px/150% 'Noto Sans', sans-serif" }}>
              어머니{" "}
            </div>
          </div>
          <div className="bg-backselect flex-1 w-[1200px]">
            <div className={"mt-[58px] ml-[88px]"}>
              <div className="flex flex-row items-start justify-start">
                <div
                  className="text-_900 text-left font-bold flex items-center justify-start"
                  style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}
                >
                  성명{" "}
                </div>
                <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6">
                  <div
                    className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                    style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                  >
                    *
                  </div>
                </div>
                <div className={"w-[200px] h-[60px] mt-[-15px] ml-[42px]"}>
                  <input
                    className={"h-[60px] rounded-[5px] border-solid border-_400 border   text-_500 "}
                    placeholder="입력"
                  />
                </div>

                <div
                  className="text-_900 text-left font-bold flex items-center justify-start"
                  style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}
                >
                  연령{" "}
                </div>
                <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6">
                  <div
                    className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                    style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                  >
                    *
                  </div>
                </div>
                <div className={"w-[200px] h-[60px] mt-[-15px] ml-[42px]"}>
                  <input
                    className={"h-[60px] rounded-[5px] border-solid border-_400 border   text-_500 "}
                    placeholder="입력"
                  />
                </div>

                <div
                  className="text-_900 text-left font-bold flex items-center justify-start"
                  style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}
                >
                  종교{" "}
                </div>
                <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6">
                  <div
                    className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                    style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                  >
                    *
                  </div>
                </div>
                <div className={"w-[200px] h-[60px] mt-[-15px] ml-[42px]"}>
                  <select className={"h-[60px] rounded-[5px] border-solid border-_400 border   text-_500 "}>
                    <option>선택</option>
                    {religion.map((item, index) => (
                      <option key={index}>{item}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="ml-[88px] mt-[40px]">
              <div className="flex flex-row items-start justify-start">
                <div
                  className="text-_900 text-left font-bold flex items-center justify-start"
                  style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}
                >
                  학력{" "}
                </div>
                <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6">
                  <div
                    className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                    style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                  >
                    *
                  </div>
                </div>
                <div className={"w-[200px] h-[60px] mt-[-15px] ml-[42px]"}>
                  <select className={"h-[60px] rounded-[5px] border-solid border-_400 border   text-_500 "}>
                    <option>선택</option>
                    {education.map((item, index) => (
                      <option key={index}>{item}</option>
                    ))}
                  </select>
                </div>
                <div className={"w-[360px] h-[60px] mt-[-15px] ml-[20px]"}>
                  <input
                    className={"w-full h-[60px] rounded-[5px] border-solid border-_400 border   text-_500 "}
                    placeholder="최종학교명"
                  />
                </div>
              </div>
            </div>

            <div className="ml-[88px] mt-[40px]">
              <div className="flex flex-row items-start justify-start">
                <div
                  className="text-_900 text-left font-bold flex items-center justify-start"
                  style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}
                >
                  직업/종{" "}
                </div>
                <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6">
                  <div
                    className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                    style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                  >
                    *
                  </div>
                </div>
                <div className={"w-[200px] h-[60px] mt-[-15px] ml-[21px]"}>
                  <select className={"h-[60px] rounded-[5px] border-solid border-_400 border   text-_500 "}>
                    <option>선택</option>
                    {jobSimple.map((item, index) => (
                      <option key={index}>{item}</option>
                    ))}
                  </select>
                </div>
                <div className={"w-[360px] h-[60px] mt-[-15px] ml-[20px]"}>
                  <input
                    className={"w-full h-[60px] rounded-[5px] border-solid border-_400 border   text-_500 "}
                    placeholder="직장명"
                  />
                </div>
                <div className="ml-[41px] flex items-start justify-start">
                  <div
                    className="text-_900 text-left font-bold flex items-center justify-start"
                    style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}
                  >
                    거주지{" "}
                  </div>
                  <div className="items-center justify-center shrink-0 w-6 h-6">
                    <div
                      className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                      style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                    >
                      *
                    </div>
                  </div>
                  <div className={"w-[200px] h-[60px] mt-[-15px] ml-[20px]"}>
                    <select className="h-[60px] rounded-[5px] border-solid border-_400 border   text-_500 ">
                      <option>선택</option>
                      {residence.map((item, index) => (
                        <option key={index}>{item}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-[109px] ml-[88px]">
              <div className="flex flex-row items-start justify-start">
                <div
                  className="text-_900 text-left font-bold flex items-center justify-start"
                  style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}
                >
                  현재상태{" "}
                </div>
                <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6">
                  <div
                    className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                    style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                  >
                    *
                  </div>
                </div>

                <div className="ml-[12px] ">
                  <div className={"w-full flex"}>
                    <span className="bg-chk">
                      <input type="checkbox" id="home" name="home" />
                      <label htmlFor="home" className={"text-_600 text-[15px]"}>
                        동거{" "}
                      </label>
                    </span>
                  </div>
                </div>
                <div className="ml-[12px] ">
                  <div className={"w-full flex"}>
                    <span className="bg-chk">
                      <input type="checkbox" id="building" name="building" />
                      <label htmlFor="building" className={"text-_600 text-[15px]"}>
                        별거{" "}
                      </label>
                    </span>
                  </div>
                </div>
                <div className="ml-[12px] ">
                  <div className={"w-full flex"}>
                    <span className="bg-chk">
                      <input type="checkbox" id="car" name="car" />
                      <label htmlFor="car" className={"text-_600 text-[15px]"}>
                        사망{" "}
                      </label>
                    </span>
                  </div>
                </div>
                <div
                  className="ml-[56px] text-_900 text-left font-bold flex items-center justify-start"
                  style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}
                >
                  부양유무{" "}
                </div>
                <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6">
                  <div
                    className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                    style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                  >
                    *
                  </div>
                </div>

                <div className="ml-[12px] ">
                  <div className={"w-full flex"}>
                    <span className="bg-chk">
                      <input type="checkbox" id="home" name="home" />
                      <label htmlFor="home" className={"text-_600 text-[15px]"}>
                        유{" "}
                      </label>
                    </span>
                  </div>
                </div>
                <div className="ml-[12px] ">
                  <div className={"w-full flex"}>
                    <span className="bg-chk">
                      <input type="checkbox" id="building" name="building" />
                      <label htmlFor="building" className={"text-_600 text-[15px]"}>
                        무{" "}
                      </label>
                    </span>
                  </div>
                </div>
                <div
                  className="ml-[56px] text-_900 text-left font-bold flex items-center justify-start"
                  style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}
                >
                  핍박유무{" "}
                </div>
                <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6">
                  <div
                    className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                    style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                  >
                    *
                  </div>
                </div>

                <div className="ml-[12px] ">
                  <div className={"w-full flex"}>
                    <span className="bg-chk">
                      <input type="checkbox" id="home" name="home" />
                      <label htmlFor="home" className={"text-_600 text-[15px]"}>
                        유{" "}
                      </label>
                    </span>
                  </div>
                </div>
                <div className="ml-[12px] ">
                  <div className={"w-full flex"}>
                    <span className="bg-chk">
                      <input type="checkbox" id="building" name="building" />
                      <label htmlFor="building" className={"text-_600 text-[15px]"}>
                        무{" "}
                      </label>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-[62px]"></div>
            <div className={"mb-[40px]"}></div>
          </div>
        </div>
        <div className="mb-[60px]"></div>

        {/* 형제자매 */}
        {siblings.map((item, index) => (
          <div className="flex flex-col gap-[15px] items-start justify-start ">
            <div className="flex flex-row gap-2.5 items-start justify-between shrink-0 w-full">
              <div className="text-primary2 text-left" style={{ font: "700 22px/150% 'Noto Sans', sans-serif" }}>
                형제/자매{" "}
              </div>
              <div className="pt-[15px] pr-[15px]" onClick={() => closeSiblings(index)}>
                <img src="/x.png" alt="plus" className="w-[15px] h-[15px]" />
              </div>
            </div>
            <div className="bg-backselect flex-1 w-[1200px]">
              <div className={"mt-[58px] ml-[88px]"}>
                <div className="flex flex-row items-start justify-start">
                  <div
                    className="text-_900 text-left font-bold flex items-center justify-start"
                    style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}
                  >
                    성명{" "}
                  </div>
                  <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6">
                    <div
                      className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                      style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                    >
                      *
                    </div>
                  </div>
                  <div className={"w-[200px] h-[60px] mt-[-15px] ml-[42px]"}>
                    <input
                      className={"h-[60px] rounded-[5px] border-solid border-_400 border   text-_500 "}
                      placeholder="입력"
                    />
                  </div>

                  <div
                    className="text-_900 text-left font-bold flex items-center justify-start"
                    style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}
                  >
                    연령{" "}
                  </div>
                  <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6">
                    <div
                      className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                      style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                    >
                      *
                    </div>
                  </div>
                  <div className={"w-[200px] h-[60px] mt-[-15px] ml-[42px]"}>
                    <input
                      className={"h-[60px] rounded-[5px] border-solid border-_400 border   text-_500 "}
                      placeholder="입력"
                    />
                  </div>

                  <div
                    className="text-_900 text-left font-bold flex items-center justify-start"
                    style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}
                  >
                    종교{" "}
                  </div>
                  <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6">
                    <div
                      className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                      style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                    >
                      *
                    </div>
                  </div>
                  <div className={"w-[200px] h-[60px] mt-[-15px] ml-[42px]"}>
                    <select className={"h-[60px] rounded-[5px] border-solid border-_400 border   text-_500 "}>
                      <option>선택</option>
                      {religion.map((item, index) => (
                        <option key={index}>{item}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="ml-[88px] mt-[40px]">
                <div className="flex flex-row items-start justify-start">
                  <div
                    className="text-_900 text-left font-bold flex items-center justify-start"
                    style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}
                  >
                    학력{" "}
                  </div>
                  <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6">
                    <div
                      className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                      style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                    >
                      *
                    </div>
                  </div>
                  <div className={"w-[200px] h-[60px] mt-[-15px] ml-[42px]"}>
                    <select className={"h-[60px] rounded-[5px] border-solid border-_400 border   text-_500 "}>
                      <option>선택</option>
                      {education.map((item, index) => (
                        <option key={index}>{item}</option>
                      ))}
                    </select>
                  </div>
                  <div className={"w-[360px] h-[60px] mt-[-15px] ml-[20px]"}>
                    <input
                      className={"w-full h-[60px] rounded-[5px] border-solid border-_400 border   text-_500 "}
                      placeholder="최종학교명"
                    />
                  </div>
                </div>
              </div>

              <div className="ml-[88px] mt-[40px]">
                <div className="flex flex-row items-start justify-start">
                  <div
                    className="text-_900 text-left font-bold flex items-center justify-start"
                    style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}
                  >
                    직업/종{" "}
                  </div>
                  <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6">
                    <div
                      className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                      style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                    >
                      *
                    </div>
                  </div>
                  <div className={"w-[200px] h-[60px] mt-[-15px] ml-[21px]"}>
                    <select className={"h-[60px] rounded-[5px] border-solid border-_400 border   text-_500 "}>
                      <option>선택</option>
                      {jobSimple.map((item, index) => (
                        <option key={index}>{item}</option>
                      ))}
                    </select>
                  </div>
                  <div className={"w-[360px] h-[60px] mt-[-15px] ml-[20px]"}>
                    <input
                      className={"w-full h-[60px] rounded-[5px] border-solid border-_400 border   text-_500 "}
                      placeholder="직장명"
                    />
                  </div>
                  <div className="ml-[41px] flex items-start justify-start">
                    <div
                      className="text-_900 text-left font-bold flex items-center justify-start"
                      style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}
                    >
                      거주지{" "}
                    </div>
                    <div className="items-center justify-center shrink-0 w-6 h-6">
                      <div
                        className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                        style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                      >
                        *
                      </div>
                    </div>
                    <div className={"w-[200px] h-[60px] mt-[-15px] ml-[20px]"}>
                      <select className="h-[60px] rounded-[5px] border-solid border-_400 border   text-_500 ">
                        <option>선택</option>
                        {residence.map((item, index) => (
                          <option key={index}>{item}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-[109px] ml-[88px]">
                <div className="flex flex-row items-start justify-start">
                  <div
                    className="text-_900 text-left font-bold flex items-center justify-start"
                    style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}
                  >
                    현재상태{" "}
                  </div>
                  <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6">
                    <div
                      className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                      style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                    >
                      *
                    </div>
                  </div>

                  <div className="ml-[12px] ">
                    <div className={"w-full flex"}>
                      <span className="bg-chk">
                        <input type="checkbox" id="home" name="home" />
                        <label htmlFor="home" className={"text-_600 text-[15px]"}>
                          동거{" "}
                        </label>
                      </span>
                    </div>
                  </div>
                  <div className="ml-[12px] ">
                    <div className={"w-full flex"}>
                      <span className="bg-chk">
                        <input type="checkbox" id="building" name="building" />
                        <label htmlFor="building" className={"text-_600 text-[15px]"}>
                          별거{" "}
                        </label>
                      </span>
                    </div>
                  </div>
                  <div className="ml-[12px] ">
                    <div className={"w-full flex"}>
                      <span className="bg-chk">
                        <input type="checkbox" id="car" name="car" />
                        <label htmlFor="car" className={"text-_600 text-[15px]"}>
                          사망{" "}
                        </label>
                      </span>
                    </div>
                  </div>
                  <div
                    className="ml-[56px] text-_900 text-left font-bold flex items-center justify-start"
                    style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}
                  >
                    부양유무{" "}
                  </div>
                  <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6">
                    <div
                      className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                      style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                    >
                      *
                    </div>
                  </div>

                  <div className="ml-[12px] ">
                    <div className={"w-full flex"}>
                      <span className="bg-chk">
                        <input type="checkbox" id="home" name="home" />
                        <label htmlFor="home" className={"text-_600 text-[15px]"}>
                          유{" "}
                        </label>
                      </span>
                    </div>
                  </div>
                  <div className="ml-[12px] ">
                    <div className={"w-full flex"}>
                      <span className="bg-chk">
                        <input type="checkbox" id="building" name="building" />
                        <label htmlFor="building" className={"text-_600 text-[15px]"}>
                          무{" "}
                        </label>
                      </span>
                    </div>
                  </div>
                  <div
                    className="ml-[56px] text-_900 text-left font-bold flex items-center justify-start"
                    style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}
                  >
                    핍박유무{" "}
                  </div>
                  <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6">
                    <div
                      className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                      style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                    >
                      *
                    </div>
                  </div>

                  <div className="ml-[12px] ">
                    <div className={"w-full flex"}>
                      <span className="bg-chk">
                        <input type="checkbox" id="home" name="home" />
                        <label htmlFor="home" className={"text-_600 text-[15px]"}>
                          유{" "}
                        </label>
                      </span>
                    </div>
                  </div>
                  <div className="ml-[12px] ">
                    <div className={"w-full flex"}>
                      <span className="bg-chk">
                        <input type="checkbox" id="building" name="building" />
                        <label htmlFor="building" className={"text-_600 text-[15px]"}>
                          무{" "}
                        </label>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-[62px]"></div>
              <div className={"mb-[40px]"}></div>
            </div>
          </div>
        ))}

        <div className="mt-[30px] w-[1200px] flex justify-end">
          <div className="w-[155px]">
            <button className="p-[10px] rounded-[5px] bg-_700 text-_200 text-[12px]" onClick={addSiblings}>
              형제자매 추가 +
            </button>
          </div>
        </div>

        <div className="w-[1200px] flex-col">
          <div className="flex">
            <div className="text-primary2 text-left" style={{ font: "700 22px/150% 'Noto Sans', sans-serif" }}>
              가족소개{" "}
            </div>
            <div className="ml-[10px] mt-[10px]">
              <div
                className="text-[#e82121] text-left w-3"
                style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
              >
                *
              </div>
            </div>
          </div>
          <div className="mb-[15px]"></div>
          <div className="bg-backselect flex-1 w-[1200px]">
            <div className="pl-[88px] pt-[78px]">
              <div className="text-infomation text-[12px] font-[400] leading-[150%] tracking-[0.14px] ">
                가족력(정신질환)을 비롯하여 특이사항등 구체적으로 작성해주세요.
              </div>
              <div className="mt-[20px]">
                <textarea className="w-[1024px] h-[200px] rounded-[10px] border-solid border-[1px] border-[#dddddd] p-[10px] text-[12px] text-[#666666]"></textarea>
              </div>
            </div>
            <div className="pb-[60px]"></div>
          </div>
        </div>

        <div className={"mb-[120px]"}></div>
        <div className={"w-full flex items-center justify-center "}>
          <button
            className="hover:bg-primary2 hover:text-white w-[180px] h-[40px] bg-_200 rounded-[20px] gap-0  text-gray-500 text-center top-[calc(50%_-_10px)] flex items-center justify-center"
            style={{
              font: "var(--m-3-label-large, 500 14px/20px 'Roboto', sans-serif)",
            }}
            onClick={handleNextTab}
          >
            이전단계{" "}
          </button>
          <div className={"w-[20px]"}></div>
          <button
            className="hover:bg-primary2 hover:text-white w-[180px] h-[40px] bg-_200 rounded-[20px] gap-0  text-gray-500 text-center top-[calc(50%_-_10px)] flex items-center justify-center"
            style={{
              font: "var(--m-3-label-large, 500 14px/20px 'Roboto', sans-serif)",
            }}
            onClick={handleNextTab}
          >
            임시저장{" "}
          </button>
          <div className={"w-[20px]"}></div>
          <button
            className="hover:bg-primary2 hover:text-white w-[180px] h-[40px] bg-_200 rounded-[20px] gap-0  text-gray-500 text-center top-[calc(50%_-_10px)] flex items-center justify-center"
            style={{
              font: "var(--m-3-label-large, 500 14px/20px 'Roboto', sans-serif)",
            }}
            onClick={handleNextTab}
          >
            다음단계{" "}
          </button>
        </div>
        <div className={"mb-[60px]"}></div>
      </div>
    </div>
  );
};

export default Tab5FamilyInfo;
