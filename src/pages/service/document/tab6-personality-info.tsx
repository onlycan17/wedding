import { NextPage } from "next";
import React, { use, useEffect, useRef, useState } from "react";

import generateYear from "@/pages/common/function/generate-year";
import { dataDepartment } from "@/pages/data/department";
import generateNumbers from "@/pages/common/function/generate-number";
import { secondStatus } from "@/pages/data/second-status";
import { newClass } from "@/pages/data/new-class";
import { religion } from "@/pages/data/religion";
import { education } from "@/pages/data/education";
import { jobSimple } from "@/pages/data/job-simple";
import { residence } from "@/pages/data/residence";
import { loginUser } from "@/pages/common/state";
import { useRecoilValue } from "recoil";
import logDev from "@/pages/config/log";

type ActivedTab = {
  activedTab: number;
  setActivedTab: React.Dispatch<React.SetStateAction<number>>;
};

const Tab6PersonalityInfo: NextPage<ActivedTab> = ({ activedTab, setActivedTab }) => {
  const user = useRecoilValue(loginUser);
  const handleNextTab = () => {
    setActivedTab(5);
  };

  return (
    <div className={"bg-whitesmoke w-full"}>
      <div className={"bg-white w-full flex flex-col items-center justify-center"}>
        <div className={"w-[1200px] bg-back-select"}>
          <div id={"title"} className="w-full h-11 text-center text-[35px] text-darkslategray font-noto-sans m-[46px]">
            <div className="">성격/성향</div>
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
          {user?.sex === "male" ? (
            <div className="">
              <div className="flex flex-row items-start justify-start shrink-0">
                <div className="text-primary2 text-left" style={{ font: "700 22px/150% 'Noto Sans', sans-serif" }}>
                  본인스타일(남자){" "}
                </div>
              </div>
              <div className="mt-[67px] ml-[180px] grid grid-cols-5 gap-[30px]">
                <span className="bg-chk-square">
                  <input type="checkbox" id="proactive" name="proactive" />
                  <label htmlFor="proactive">적극적이다 </label>
                </span>
                <span className="bg-chk-square">
                  <input type="checkbox" id="health" name="health" />
                  <label htmlFor="health">건강하다 </label>
                </span>
                <span className="bg-chk-square">
                  <input type="checkbox" id="sophisticated" name="sophisticated" />
                  <label htmlFor="sophisticated">세련되다 </label>
                </span>
                <span className="bg-chk-square">
                  <input type="checkbox" id="likeMan" name="likeMan" />
                  <label htmlFor="likeMan">남자답다 </label>
                </span>
                <span className="bg-chk-square">
                  <input type="checkbox" id="handsome" name="handsome" />
                  <label htmlFor="handsome">잘생긴편이다 </label>
                </span>
                <span className="bg-chk-square">
                  <input type="checkbox" id="humorous" name="humorous" />
                  <label htmlFor="humorous">유머러스하다 </label>
                </span>
                <span className="bg-chk-square">
                  <input type="checkbox" id="leadership" name="leadership" />
                  <label htmlFor="leadership">리더십이있다 </label>
                </span>
                <span className="bg-chk-square">
                  <input type="checkbox" id="hypothetical" name="hypothetical" />
                  <label htmlFor="hypothetical">가정적이다 </label>
                </span>
                <span className="bg-chk-square">
                  <input type="checkbox" id="outgoing" name="outgoing" />
                  <label htmlFor="outgoing">밝고 활동적이다 </label>
                </span>
                <span className="bg-chk-square">
                  <input type="checkbox" id="thoughtfulCareful" name="thoughtfulCareful" />
                  <label htmlFor="thoughtfulCareful">생각이 깊고 신중하다 </label>
                </span>
                <span className="bg-chk-square">
                  <input type="checkbox" id="diligence" name="diligence" />
                  <label htmlFor="diligence">성실하다 </label>
                </span>
                <span className="bg-chk-square">
                  <input type="checkbox" id="interpersonal" name="interpersonal" />
                  <label htmlFor="interpersonal">친화력이있다 </label>
                </span>
                <span className="bg-chk-square">
                  <input type="checkbox" id="kindConsiderate" name="kindConsiderate" />
                  <label htmlFor="kindConsiderate">자상하다 </label>
                </span>
                <span className="bg-chk-square">
                  <input type="checkbox" id="impressive" name="impressive" />
                  <label htmlFor="impressive">인상이 좋다 </label>
                </span>
                <span className="bg-chk-square">
                  <input type="checkbox" id="smart" name="smart" />
                  <label htmlFor="smart">스마트하고 똑똑하다 </label>
                </span>
                <span className="bg-chk-square">
                  <input type="checkbox" id="westernStyle" name="westernStyle" />
                  <label htmlFor="westernStyle">서구적인 스타일 </label>
                </span>
                <span className="bg-chk-square">
                  <input type="checkbox" id="easternStyle" name="easternStyle" />
                  <label htmlFor="easternStyle">동양적인 스타일 </label>
                </span>
                <span className="bg-chk-square">
                  <input type="checkbox" id="fashionSense" name="fashionSense" />
                  <label htmlFor="fashionSense">패션센스가 있다 </label>
                </span>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex flex-row items-start justify-start shrink-0">
                <div className="text-primary2 text-left" style={{ font: "700 22px/150% 'Noto Sans', sans-serif" }}>
                  본인스타일(여자){" "}
                </div>
              </div>
              <div className="mt-[67px] ml-[180px] grid grid-cols-5 gap-[30px]">
                <span className="bg-chk-square">
                  <input type="checkbox" id="proactive" name="proactive" />
                  <label htmlFor="proactive">붙입성 있다 </label>
                </span>
                <span className="bg-chk-square">
                  <input type="checkbox" id="diligence" name="diligence" />
                  <label htmlFor="diligence">성실하다 </label>
                </span>
                <span className="bg-chk-square">
                  <input type="checkbox" id="cute" name="cute" />
                  <label htmlFor="cute">귀엽다 </label>
                </span>
                <span className="bg-chk-square">
                  <input type="checkbox" id="proactive" name="proactive" />
                  <label htmlFor="proactive">적극적이다 </label>
                </span>
                <span className="bg-chk-square">
                  <input type="checkbox" id="beautiful" name="beautiful" />
                  <label htmlFor="beautiful">예쁜편이다 </label>
                </span>
                <span className="bg-chk-square">
                  <input type="checkbox" id="comfortable" name="comfortable" />
                  <label htmlFor="comfortable">편안하다 </label>
                </span>
                <span className="bg-chk-square">
                  <input type="checkbox" id="youthfulFace" name="youthfulFace" />
                  <label htmlFor="youthfulFace">동안이다 </label>
                </span>
                <span className="bg-chk-square">
                  <input type="checkbox" id="outgoing" name="outgoing" />
                  <label htmlFor="outgoing">밝고 활동적이다 </label>
                </span>
                <span className="bg-chk-square">
                  <input type="checkbox" id="goodSkin" name="goodSkin" />
                  <label htmlFor="goodSkin">피부가좋다 </label>
                </span>
                <span className="bg-chk-square">
                  <input type="checkbox" id="smart" name="smart" />
                  <label htmlFor="smart">스마트하고 똑똑하다 </label>
                </span>
                <span className="bg-chk-square">
                  <input type="checkbox" id="sophisticated" name="sophisticated" />
                  <label htmlFor="sophisticated">세련되다 </label>
                </span>
                
                <span className="bg-chk-square">
                  <input type="checkbox" id="charm" name="charm" />
                  <label htmlFor="charm">애교가 많다 </label>
                </span>
                <span className="bg-chk-square">
                  <input type="checkbox" id="feminine" name="feminine" />
                  <label htmlFor="feminine">여성스럽다 </label>
                </span>
                <span className="bg-chk-square">
                  <input type="checkbox" id="slim" name="slim" />
                  <label htmlFor="slim">날씬하다 </label>
                </span>
                <span className="bg-chk-square">
                  <input type="checkbox" id="kind" name="kind" />
                  <label htmlFor="kind">상냥하다 </label>
                </span>
                
                <span className="bg-chk-square">
                  <input type="checkbox" id="westernStyle" name="westernStyle" />
                  <label htmlFor="westernStyle">서구적인 스타일 </label>
                </span>
                <span className="bg-chk-square">
                  <input type="checkbox" id="easternStyle" name="easternStyle" />
                  <label htmlFor="easternStyle">동양적인 스타일 </label>
                </span>
                <span className="bg-chk-square">
                  <input type="checkbox" id="fashionSense" name="fashionSense" />
                  <label htmlFor="fashionSense">패션센스가 있다 </label>
                </span>
              </div>
            </div>
          )}
          <div className="mt-[58px]"></div>
          <div className="ml-[88px] flex w-full">
            <div className="text-[color:var(--900,#232527)] text-base not-italic font-bold leading-[150%] tracking-[0.16px]">
              반려동물 유무
            </div>
            <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6">
              <div
                className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
              >
                *
              </div>
            </div>
            <div className="ml-[38px]"></div>
            <div className="flex">
              <span className="bg-chk">
                <input type="radio" name="petYn" id="petN" />
                <label htmlFor="petN">무</label>
              </span>
              <span className="bg-chk">
                <input type="radio" name="petYn" id="petY" />
                <label htmlFor="petY">유</label>
              </span>
              <div className="mt-[-15px]">
                <input
                  type="text"
                  className="flex w-[360px] h-[60px] items-center gap-6 shrink-0 border border-[color:var(--400,#BFBFBF)] px-2.5 py-0 rounded-[5px] border-solid"
                  placeholder="반려동물 종류 입력"
                />
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

export default Tab6PersonalityInfo;
