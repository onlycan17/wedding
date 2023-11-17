import { NextPage } from "next";
import React, { useState, useEffect } from "react";

import generateYear from "@/pages/common/function/generate-year";
import generateNumbers from "@/pages/common/function/generate-number";
import { secondStatus } from "@/pages/data/second-status";
import { newClass } from "@/pages/data/new-class";
import firstJobCategory from "@/pages/data/first-job-category";
import logDev from "@/pages/config/log";
import secondJobCategory, { Status } from "@/pages/data/second-job-category";
import { location, locationDetail } from "@/pages/data/location";
import { position } from "@/pages/data/position";
import { employmentType } from "@/pages/data/employment-type";

type ActivedTab = {
  activedTab: number;
  setActivedTab: React.Dispatch<React.SetStateAction<number>>;
};

const Tab4KnowledgePropertyInfo: NextPage<ActivedTab> = ({ activedTab, setActivedTab }) => {
  const [fields, setFields] = useState<number[]>([0]); // 초기 상태는 하나의 필드만 있도록 설정
  const [secondJobs, setSecondJobs] = useState<Status[]>([]); // 초기 상태는 하나의 필드만 있도록 설정
  const [sigugun, setSigugun] = useState<string[] | undefined>([]); // 초기 상태는 하나의 필드만 있도록 설정

  // 필드 추가 함수
  const addField = () => {
    setFields((prevFields) => [...prevFields, prevFields.length]);
  };

  // 필드 제거 함수
  const removeField = (index: number) => {
    setFields((prevFields) => prevFields.filter((_, i) => i !== index));
  };

  const handleNextTab = () => {
    setActivedTab(2);
  };

  const onFirstJobChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    logDev(`test value : ${event.target.value}`);
    const filterJob = secondJobCategory.filter((value) => value.code.startsWith(event.target.value));
    setSecondJobs([...filterJob]);
  };

  useEffect(() => {
    //logDev(`secondJobs : ${secondJobs}`);
  }, [secondJobs]);

  const onchangeLocation = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filterLocationDetail = locationDetail
      .filter((value) => value.sido.startsWith(event.target.value))
      .map((value) => value.sigungu);
    console.log("---------TEST---------------");
    console.log(filterLocationDetail);
    console.log("---------TEST END---------------");
    setSigugun(filterLocationDetail[0]);
  };

  return (
    <div className={"bg-whitesmoke w-full"}>
      <div className={"bg-white w-full flex flex-col items-center justify-center"}>
        <div className={"w-[1200px] pb-[60px] bg-back-select"}>
          <div id={"title"} className="w-full h-11 text-center text-[35px] text-darkslategray font-noto-sans m-[46px]">
            <div className="">직장/재산정보</div>
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
            <div className={"w-full h-[111px]"}></div>
            <div className={"w-full flex justify-start"}>
              <div className={"mt-[88px]"}>
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
                </div>
              </div>
              <div className={"ml-[20px] mt-[70px] w-[310px] flex justify-end"}>
                <div className={"w-[300px] h-[60px]"}>
                  <select className={"h-[60px]"} onChange={onFirstJobChange}>
                    <option>선택</option>
                    {firstJobCategory.map((item, index) => (
                      <option key={index} value={item.code}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={" mt-[70px] w-[330px] flex justify-end"}>
                <div className={"w-[320px] h-[60px]"}>
                  <select className={"h-[60px]"}>
                    <option>선택</option>
                    {secondJobs.map((item, index) => (
                      <option key={index} value={item.code}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className={"w-full flex justify-start"}>
              <div className={"mt-[58px]"}>
                <div className="flex flex-row items-start justify-start">
                  <div
                    className="text-_900 text-left font-bold flex items-center justify-start"
                    style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}
                  >
                    직장명{" "}
                  </div>
                  <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6">
                    <div
                      className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                      style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                    >
                      *
                    </div>
                  </div>
                </div>
              </div>
              <div className={"ml-[35px] mt-[40px] w-[500px] flex justify-end"}>
                <div className={"w-full h-[60px]"}>
                  <input
                    className={"w-full h-[60px] rounded-[5px] border-solid border-_400 border   text-_500 text-right"}
                  />
                </div>
              </div>
              <div className={"ml-[60px]"}></div>

              <div className={"mt-[58px]"}>
                <div className="flex flex-row items-start justify-start">
                  <div
                    className="text-_900 text-left font-bold flex items-center justify-start"
                    style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}
                  >
                    소재지{" "}
                  </div>
                  <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6">
                    <div
                      className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                      style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                    >
                      *
                    </div>
                  </div>
                </div>
              </div>
              <div className={"ml-[20px]"}></div>
              <div className={"mt-[40px] w-[160px] h-[60px]"}>
                <select className={"h-[60px]"} onChange={onchangeLocation}>
                  <option>선택</option>
                  {location.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className={"ml-[20px]"}></div>
              <div className={"mt-[40px] w-[140px] h-[60px]"}>
                <select className={"h-[60px]"}>
                  <option>선택</option>
                  {sigugun?.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className={"w-full flex justify-start"}>
              <div className={"mt-[58px]"}>
                <div className="flex flex-row items-start justify-start">
                  <div
                    className="text-_900 text-left font-bold flex items-center justify-start"
                    style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}
                  >
                    부서{" "}
                  </div>
                  <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6">
                    <div
                      className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                      style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                    >
                      *
                    </div>
                  </div>
                </div>
              </div>
              <div className={"ml-[50px] mt-[40px] w-[500px] flex justify-end"}>
                <div className={"w-full h-[60px]"}>
                  <input
                    className={"w-full h-[60px] rounded-[5px] border-solid border-_400 border   text-_500 text-right"}
                  />
                </div>
              </div>
              <div className={"ml-[60px]"}></div>

              <div className={"mt-[58px]"}>
                <div className="flex flex-row items-start justify-start">
                  <div
                    className="text-_900 text-left font-bold flex items-center justify-start"
                    style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}
                  >
                    직급{" "}
                  </div>
                  <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6">
                    <div
                      className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                      style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                    >
                      *
                    </div>
                  </div>
                </div>
              </div>
              <div className={"ml-[30px]"}></div>
              <div className={"mt-[40px] w-[325px] h-[60px]"}>
                <select className={"h-[60px]"} onChange={onchangeLocation}>
                  <option>선택</option>
                  {position.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className={"w-full flex justify-start"}>
              <div className={"mt-[58px]"}>
                <div className="flex flex-row items-start justify-start">
                  <div
                    className="text-_900 text-left font-bold flex items-center justify-start"
                    style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}
                  >
                    담당업무{" "}
                  </div>
                  <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6">
                    <div
                      className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                      style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                    >
                      *
                    </div>
                  </div>
                </div>
              </div>
              <div className={"ml-[20px] mt-[40px] w-[500px] flex justify-end"}>
                <div className={"w-full h-[60px]"}>
                  <input
                    className={"w-full h-[60px] rounded-[5px] border-solid border-_400 border   text-_500 text-right"}
                  />
                </div>
              </div>
            </div>
            <div className={"w-full flex justify-start"}>
              <div className={"mt-[58px]"}>
                <div className="flex flex-row items-start justify-start">
                  <div
                    className="text-_900 text-left font-bold flex items-center justify-start"
                    style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}
                  >
                    입사년도{" "}
                  </div>
                  <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6">
                    <div
                      className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                      style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                    >
                      *
                    </div>
                  </div>
                </div>
              </div>
              <div className={" mt-[40px] w-[172px] flex justify-end"}>
                <div className={"w-[146px] h-[60px]"}>
                  <select className={"h-[60px]"}>
                    <option>년도</option>
                    {generateYear(1970).map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className={"ml-[20px]"}></div>
              <div className={"mt-[40px] w-[90px] h-[60px]"}>
                <select className={"h-[60px]"}>
                  <option>월</option>
                  {generateNumbers(12).map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className={"ml-[20px]"}></div>
              <div className={"mt-[40px] w-[90px] h-[60px]"}>
                <select className={"h-[60px]"}>
                  <option>일</option>
                  {generateNumbers(31).map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className={"ml-[20px]"}></div>
              <div className={"mt-[40px] w-[100px] h-[60px]"}>
                <input
                  type={"number"}
                  className={
                    "border-0 border-b-2 h-[60px] w-full font-size-16 text-[#4d5053] text-right bg-transparent"
                  }
                  placeholder={"년"}
                  max={99}
                  style={{ font: "400 22px/150% 'Jost', sans-serif" }}
                />
              </div>
              <div className={"ml-[60px]"}></div>
              <div className={"mt-[58px]"}>
                <div className="flex flex-row items-start justify-start">
                  <div
                    className="text-_900 text-left font-bold flex items-center justify-start"
                    style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}
                  >
                    고용형태{" "}
                  </div>
                  <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6">
                    <div
                      className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                      style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                    >
                      *
                    </div>
                  </div>
                </div>
              </div>
              <div className={"ml-[10px]"}></div>
              <div className={"mt-[40px] w-[325px] h-[60px]"}>
                <select className={"h-[60px]"} onChange={onchangeLocation}>
                  <option>선택</option>
                  {employmentType.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className={"w-full flex justify-start"}>
              <div
                className="text-primary1 text-left w-[60px] mt-[45px]"
                style={{ font: "600 16px/200% 'Noto Sans', sans-serif" }}
              >
                자격증
              </div>
              <div className={"flex flex-col"}>
                {fields.map((field, index) => (
                  <div key={field} className={"flex"}>
                    <div className={"ml-[35px] mt-[30px]"}>
                      <input
                        type={"text"}
                        className={
                          "rounded-[5px] border-solid border-_400 border pr-2.5 pl-2.5 flex flex-row gap-2.5 items-center justify-start text-_500 w-[252px] h-[60px] text-left"
                        }
                        placeholder="입력"
                      />
                    </div>
                    <div className={"ml-[35px] mt-[30px]"}>
                      <input
                        type={"text"}
                        className={
                          "rounded-[5px] border-solid border-_400 border pr-2.5 pl-2.5 flex flex-row gap-2.5 items-center justify-start text-_500 w-[120px] h-[60px] text-left"
                        }
                        placeholder="발행처"
                      />
                    </div>
                    <div className={"ml-[20px]"}></div>
                    <div className={"mt-[30px]"}>
                      <input
                        type={"text"}
                        className={
                          "rounded-[5px] border-solid border-_400 border pr-2.5 pl-2.5 flex flex-row gap-2.5 items-center justify-start text-_500 w-[120px] h-[60px] text-left"
                        }
                        placeholder="취득일"
                      />
                    </div>
                    <button
                      className="text-primary1 text-left w-[24px] mt-[35px] bg-transparent"
                      style={{ font: "400 26px/200% 'Noto Sans', sans-serif" }}
                      onClick={addField}
                    >
                      <svg
                        className="relative overflow-visible"
                        style={{}}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_599_11679)">
                          <path
                            d="M5 12H19"
                            stroke="#232527"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 19V5"
                            stroke="#232527"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_599_11679">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                    <div className={"ml-[10px]"}></div>
                    <button
                      className="text-primary1 text-left w-[24px] mt-[35px] bg-transparent"
                      style={{ font: "400 26px/200% 'Noto Sans', sans-serif" }}
                      onClick={() => removeField(index)}
                    >
                      <svg
                        className="relative overflow-visible"
                        style={{}}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_599_11687)">
                          <path
                            d="M5 12H19"
                            stroke="#232527"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_599_11687">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={"mb-[70px]"}></div>
        <div className="flex flex-col gap-[15px] items-start justify-start ">
          <div className="flex flex-row gap-2.5 items-start justify-start shrink-0">
            <div className="text-primary2 text-left" style={{ font: "700 22px/150% 'Noto Sans', sans-serif" }}>
              재산정보{" "}
            </div>
          </div>
          <div className="bg-backselect flex-1 w-[1200px]">
            <div className={"pl-[88px] flex"}>
              <div className={"flex-col"}>
                <div className="flex">
                  <div
                    className="text-primary1 text-left w-[30px] mt-[35px]"
                    style={{ font: "600 16px/200% 'Noto Sans', sans-serif" }}
                  >
                    연봉
                  </div>
                  <div className={"mt-[40px]"}>
                    <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6 ">
                      <div
                        className="text-[#e82121] text-center flex items-center justify-center w-full h-full "
                        style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                      >
                        *
                      </div>
                    </div>
                  </div>
                  <div className={"ml-[42px] mt-[29px]"}>
                    <div
                      className="text-_900 text-left w-[320px] h-[60px] flex items-center justify-start"
                      style={{ font: "500 16px/200% 'Noto Sans', sans-serif" }}
                    >
                      <input
                        type={"text"}
                        className={
                          "bg-x-200 rounded-[5px] border-solid border-_400 border pr-2.5 pl-2.5 flex flex-row gap-2.5 items-center justify-start text-_500 w-[272px] h-[60px] text-left"
                        }
                      />
                      <label className={"pl-[10px] text-[#292f36] text-[18px]"}>만원</label>
                    </div>
                  </div>
                </div>

                <div
                  className="text-primary1 text-left w-[68px] mt-[-30px]"
                  style={{ font: "600 16px/200% 'Noto Sans', sans-serif" }}
                >
                  (VAT포함)
                </div>
              </div>
            </div>
            <div className={"pl-[88px] flex"}>
              <div
                className="text-primary1 text-left w-[60px] mt-[45px]"
                style={{ font: "600 16px/200% 'Noto Sans', sans-serif" }}
              >
                기타수입
              </div>
              <div className={"flex flex-col"}>
                {fields.map((field, index) => (
                  <div key={field} className={"flex"}>
                    <div className={"ml-[35px] mt-[30px]"}>
                      <input
                        type={"text"}
                        className={
                          "rounded-[5px] border-solid border-_400 border pr-2.5 pl-2.5 flex flex-row gap-2.5 items-center justify-start text-_500 w-[272px] h-[60px] text-left"
                        }
                      />
                    </div>
                    <div className={"ml-[10px]"}></div>
                    <label className={"mt-[48px] pl-[3px] text-[#292f36] text-[18px] "}>만원</label>
                    <button
                      className="text-primary1 text-left w-[24px] mt-[35px] bg-transparent"
                      style={{ font: "400 26px/200% 'Noto Sans', sans-serif" }}
                      onClick={addField}
                    >
                      <svg
                        className="relative overflow-visible"
                        style={{}}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_599_11679)">
                          <path
                            d="M5 12H19"
                            stroke="#232527"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 19V5"
                            stroke="#232527"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_599_11679">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                    <div className={"ml-[10px]"}></div>
                    <button
                      className="text-primary1 text-left w-[24px] mt-[35px] bg-transparent"
                      style={{ font: "400 26px/200% 'Noto Sans', sans-serif" }}
                      onClick={() => removeField(index)}
                    >
                      <svg
                        className="relative overflow-visible"
                        style={{}}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_599_11687)">
                          <path
                            d="M5 12H19"
                            stroke="#232527"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_599_11687">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="ml-[88px] flex">
              <div className="text-primary1 mt-[58px]" style={{ font: "600 16px/200% 'Noto Sans', sans-serif" }}>
                소유재산
              </div>
              <div className={"mt-[63px]"}>
                <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6 ">
                  <div
                    className="text-[#e82121] text-center flex items-center justify-center w-full h-full "
                    style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                  >
                    *
                  </div>
                </div>
              </div>
              <div className="ml-[12px] mt-[61px]">
                <div className={"w-full flex"}>
                  <span className="bg-chk">
                    <input type="checkbox" id="home" name="home" />
                    <label htmlFor="home" className={"text-_600 text-[15px]"}>
                      집{" "}
                    </label>
                  </span>
                </div>
              </div>
              <div className="ml-[12px] mt-[61px]">
                <div className={"w-full flex"}>
                  <span className="bg-chk">
                    <input type="checkbox" id="building" name="building" />
                    <label htmlFor="building" className={"text-_600 text-[15px]"}>
                      건물{" "}
                    </label>
                  </span>
                </div>
              </div>
              <div className="ml-[12px] mt-[61px]">
                <div className={"w-full flex"}>
                  <span className="bg-chk">
                    <input type="checkbox" id="car" name="car" />
                    <label htmlFor="car" className={"text-_600 text-[15px]"}>
                      차량{" "}
                    </label>
                  </span>
                </div>
              </div>
              <div className="ml-[12px] mt-[61px]">
                <div className={"w-full flex"}>
                  <span className="bg-chk">
                    <input type="checkbox" id="savingsAndDeposits" name="savingsAndDeposits" />
                    <label htmlFor="savingsAndDeposits" className={"text-_600 text-[15px]"}>
                      예.적금{" "}
                    </label>
                  </span>
                </div>
              </div>
              <div className="ml-[12px] mt-[61px]">
                <div className={"w-full flex"}>
                  <span className="bg-chk">
                    <input type="checkbox" id="stocks" name="stocks" />
                    <label htmlFor="stocks" className={"text-_600 text-[15px]"}>
                      주식{" "}
                    </label>
                  </span>
                </div>
              </div>
              <div className="ml-[12px] mt-[61px]">
                <div className={"w-full flex"}>
                  <span className="bg-chk">
                    <input type="checkbox" id="land" name="land" />
                    <label htmlFor="land" className={"text-_600 text-[15px]"}>
                      토지{" "}
                    </label>
                  </span>
                </div>
              </div>
              <div className="ml-[12px] mt-[61px]">
                <div className={"w-full flex"}>
                  <span className="bg-chk">
                    <input type="checkbox" id="other" name="other" />
                    <label htmlFor="other" className={"text-_600 text-[15px]"}>
                      기타{" "}
                    </label>
                  </span>
                </div>
              </div>
              <div
                className="text-primary1 text-left w-[20px] mt-[58px]"
                style={{ font: "600 16px/200% 'Noto Sans', sans-serif" }}
              >
                총
              </div>
              <div className={"mt-[63px]"}>
                <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6 ">
                  <div
                    className="text-[#e82121] text-center flex items-center justify-center w-full h-full "
                    style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                  >
                    *
                  </div>
                </div>
              </div>
              <div className={"ml-[15px] mt-[45px]"}>
                <input
                  type={"text"}
                  className={
                    "rounded-[5px] border-solid border-_400 border pr-2.5 pl-2.5 flex flex-row gap-2.5 items-center justify-start text-_500 w-[232px] h-[60px] text-left"
                  }
                />
              </div>
              <div className="mt-[58px] pl-[10px] text-[#292f36] text-[18px]">만원</div>
            </div>
            <div className="ml-[88px] flex">
              <div className="text-primary1 mt-[75px]" style={{ font: "600 16px/200% 'Noto Sans', sans-serif" }}>
                부채(빚)
              </div>
              <div className="mt-[81px]  flex flex-col items-center justify-center shrink-0 w-6 h-6 ">
                <div
                  className="text-[#e82121] text-center flex items-center justify-center w-full h-full "
                  style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                >
                  *
                </div>
              </div>
              <div className="ml-[12px] mt-[77px]">
                <div className={"w-full flex"}>
                  <span className="bg-chk">
                    <input type="checkbox" id="car" name="car" />
                    <label htmlFor="car" className={"text-_600 text-[15px]"}>
                      주택담보/전세대출{" "}
                    </label>
                  </span>
                </div>
              </div>
              <div className="ml-[42px] mt-[60px]">
                <div
                  className="text-_900 text-left w-[320px] h-[60px] flex items-center justify-start"
                  style={{ font: "500 16px/200% 'Noto Sans', sans-serif" }}
                >
                  <input
                    type={"text"}
                    className={
                      "rounded-[5px] border-solid border-_400 border pr-2.5 pl-2.5 flex flex-row gap-2.5 items-center justify-start text-_500 w-[272px] h-[60px] text-left"
                    }
                  />
                  <label className={"pl-[10px] text-[#292f36] text-[18px]"}>만원</label>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="ml-[176px] mt-[35px]">
                <div className={"w-full flex"}>
                  <span className="bg-chk">
                    <input type="checkbox" id="car" name="car" />
                    <label htmlFor="car" className={"text-_600 text-[15px]"}>
                      신용대출{" "}
                    </label>
                  </span>
                </div>
              </div>
              <div className="ml-[103px] mt-[19px]">
                <div
                  className="text-_900 text-left w-[320px] h-[60px] flex items-center justify-start"
                  style={{ font: "500 16px/200% 'Noto Sans', sans-serif" }}
                >
                  <input
                    type={"text"}
                    className={
                      "rounded-[5px] border-solid border-_400 border pr-2.5 pl-2.5 flex flex-row gap-2.5 items-center justify-start text-_500 w-[272px] h-[60px] text-left"
                    }
                  />
                  <label className={"pl-[10px] text-[#292f36] text-[18px]"}>만원</label>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="ml-[176px] mt-[35px]">
                <div className={"w-full flex"}>
                  <span className="bg-chk">
                    <input type="checkbox" id="car" name="car" />
                    <label htmlFor="car" className={"text-_600 text-[15px]"}>
                      학자금대출{" "}
                    </label>
                  </span>
                </div>
              </div>
              <div className="ml-[90px] mt-[19px]">
                <div
                  className="text-_900 text-left w-[320px] h-[60px] flex items-center justify-start"
                  style={{ font: "500 16px/200% 'Noto Sans', sans-serif" }}
                >
                  <input
                    type={"text"}
                    className={
                      "rounded-[5px] border-solid border-_400 border pr-2.5 pl-2.5 flex flex-row gap-2.5 items-center justify-start text-_500 w-[272px] h-[60px] text-left"
                    }
                  />
                  <label className={"pl-[10px] text-[#292f36] text-[18px]"}>만원</label>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="ml-[176px] mt-[35px]">
                <div className={"w-full flex"}>
                  <span className="bg-chk">
                    <input type="checkbox" id="car" name="car" />
                    <label htmlFor="car" className={"text-_600 text-[15px]"}>
                      기타{" "}
                    </label>
                  </span>
                </div>
              </div>
              <div className="ml-[131px] mt-[19px]">
                <div
                  className="text-_900 text-left w-[320px] h-[60px] flex items-center justify-start"
                  style={{ font: "500 16px/200% 'Noto Sans', sans-serif" }}
                >
                  <input
                    type={"text"}
                    className={
                      "rounded-[5px] border-solid border-_400 border pr-2.5 pl-2.5 flex flex-row gap-2.5 items-center justify-start text-_500 w-[272px] h-[60px] text-left"
                    }
                  />
                  <label className={"pl-[10px] text-[#292f36] text-[18px]"}>만원</label>
                </div>
              </div>
              <div
                className="text-primary1 text-left w-[20px] ml-[130px] mt-[38px]"
                style={{ font: "600 16px/200% 'Noto Sans', sans-serif" }}
              >
                총
              </div>
              <div className={"mt-[43px]"}>
                <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6 ">
                  <div
                    className="text-[#e82121] text-center flex items-center justify-center w-full h-full "
                    style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                  >
                    *
                  </div>
                </div>
              </div>
              <div className={"ml-[25px] mt-[25px]"}>
                <input
                  type={"text"}
                  className={
                    "rounded-[5px] border-solid border-_400 border pr-2.5 pl-2.5 flex flex-row gap-2.5 items-center justify-start text-_500 w-[232px] h-[60px] text-left"
                  }
                />
              </div>
              <div className="mt-[38px] pl-[10px] text-[#292f36] text-[18px]">만원</div>
            </div>
            <div className={"mb-[40px]"}></div>
          </div>
        </div>
        <div className={"mb-[50px]"}></div>

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

export default Tab4KnowledgePropertyInfo;
