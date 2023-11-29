import { NextPage } from "next";
import React, { use, useEffect, useRef, useState } from "react";

import { loginUser } from "@/pages/common/state";
import { useRecoilValue } from "recoil";
import logDev from "@/pages/config/log";
import { hobby } from "@/pages/data/hobby";
import { image } from "d3";

type ActivedTab = {
  activedTab: number;
  setActivedTab: React.Dispatch<React.SetStateAction<number>>;
};

const Tab6PersonalityInfo: NextPage<ActivedTab> = ({ activedTab, setActivedTab }) => {
  const user = useRecoilValue(loginUser);
  const [mbti, setMbti] = useState("");
  const [q1, setQ1] = useState(-1);
  const [q2, setQ2] = useState(-1);
  const [q3, setQ3] = useState(-1);
  const [q4, setQ4] = useState(-1);
  const [q5, setQ5] = useState(-1);
  const [q6, setQ6] = useState(-1);
  const [q7, setQ7] = useState(-1);
  const [q8, setQ8] = useState(-1);
  const [q9, setQ9] = useState(-1);
  const [q10, setQ10] = useState(-1);
  const [q11, setQ11] = useState(-1);
  const [q12, setQ12] = useState(-1);
  const [q13, setQ13] = useState(-1);
  const [q14, setQ14] = useState(-1);
  const [q15, setQ15] = useState(-1);
  const [q16, setQ16] = useState(-1);
  const [q17, setQ17] = useState(-1);
  const [q18, setQ18] = useState(-1);
  const [q19, setQ19] = useState(-1);
  const [q20, setQ20] = useState(-1);

  const [hobby1, setHobby1] = useState([...hobby]);
  const [hobby2, setHobby2] = useState([...hobby]);
  const [hobby3, setHobby3] = useState([...hobby]);

  const [hobbyLevel1, setHobbyLevel1] = useState(-1);
  const [hobbyLevel2, setHobbyLevel2] = useState(-1);
  const [hobbyLevel3, setHobbyLevel3] = useState(-1);

  const mbtiUnselectCss =
    "bg-[#BFBFBF] flex w-[206px] h-[47px] flex-col justify-center items-center gap-2.5 p-2.5 rounded-[5px] text-[color:var(--white,#FFF)] text-base not-italic font-normal leading-[150%] tracking-[0.16px]";
  const mbtiSelectCss =
    "bg-[#A2BB81] flex w-[206px] h-[47px] justify-center items-center gap-2.5 p-2.5 rounded-[5px] text-[color:var(--white,#FFF)] text-base not-italic font-normal leading-[150%] tracking-[0.16px]";
  const handleNextTab = () => {
    setActivedTab(5);
  };

  const handleMbti = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const mbti = e.currentTarget.innerText;
    setMbti(mbti.split(" ")[0]);
  };

  useEffect(() => {}, [mbti]);

  const handleQ = (e: React.MouseEvent<HTMLImageElement, MouseEvent>): void => {
    console.log(e.currentTarget.id);
    let id = e.currentTarget.id;
    let q = id.split("_")[0];
    let a = id.split("_")[1];
    switch (q) {
      case "q1":
        setQ1(parseInt(a));
        break;
      case "q2":
        setQ2(parseInt(a));
        break;
      case "q3":
        setQ3(parseInt(a));
        break;
      case "q4":
        setQ4(parseInt(a));
        break;
      case "q5":
        setQ5(parseInt(a));
        break;
      case "q6":
        setQ6(parseInt(a));
        break;
      case "q7":
        setQ7(parseInt(a));
        break;
      case "q8":
        setQ8(parseInt(a));
        break;
      case "q9":
        setQ9(parseInt(a));
        break;
      case "q10":
        setQ10(parseInt(a));
        break;
      case "q11":
        setQ11(parseInt(a));
        break;
      case "q12":
        setQ12(parseInt(a));
        break;
      case "q13":
        setQ13(parseInt(a));
        break;
      case "q14":
        setQ14(parseInt(a));
        break;
      case "q15":
        setQ15(parseInt(a));
        break;
      case "q16":
        setQ16(parseInt(a));
        break;
      case "q17":
        setQ17(parseInt(a));
        break;
      case "q18":
        setQ18(parseInt(a));
        break;
      case "q19":
        setQ19(parseInt(a));
        break;
      default:
        setQ20(parseInt(a));
        break;
    }
  };
  const handleHobby = (event: React.MouseEvent<HTMLImageElement, MouseEvent>): void => {
    let id = event.currentTarget.id;
    let hobby = id.split("_")[0];
    let level = id.split("_")[1];
    switch (hobby) {
      case "h1":
        setHobbyLevel1(parseInt(level));
        break;
      case "h2":
        setHobbyLevel2(parseInt(level));
        break;
      default:
        setHobbyLevel3(parseInt(level));
        break;
    }
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
          <div className="w-full flex flex-row gap-2.5 items-start justify-between shrink-0">
            <div className="text-primary2 text-left" style={{ font: "700 22px/150% 'Noto Sans', sans-serif" }}>
              MBTI 성격유형{" "}
            </div>
            <div className="flex">
              <div className=" bg-[#D2C3D899] opacity-[60%] flex w-[53px] h-[53px] flex-col justify-center items-center text-black text-center text-[22px] not-italic font-bold leading-[214%] tracking-[0.22px] ml-[13px]">
                M
              </div>
              <div className=" bg-[#C3D8C499] opacity-[60%] flex w-[53px] h-[53px] flex-col justify-center items-center text-black text-center text-[22px] not-italic font-bold leading-[214%] tracking-[0.22px] ml-[13px]">
                B
              </div>
              <div className=" bg-[#C3D3D899] opacity-[60%] flex w-[53px] h-[53px] flex-col justify-center items-center text-black text-center text-[22px] not-italic font-bold leading-[214%] tracking-[0.22px] ml-[13px]">
                T
              </div>
              <div className=" bg-[#D8D2C399] opacity-[60%] flex w-[53px] h-[53px] flex-col justify-center items-center text-black text-center text-[22px] not-italic font-bold leading-[214%] tracking-[0.22px] ml-[13px]">
                I
              </div>
            </div>
          </div>
          <div className="bg-backselect flex-1 w-[1200px]">
            <div className="mt-[15px] ml-[88px]">
              <p className="flex-[1_0_0] text-[color:var(--600,#777)] text-sm not-italic font-normal leading-[178%] tracking-[0.14px]">
                MBTI(Myers-Briggs Type Indicator)는 간단한 실생활의 질문을 통해 사람의 성향을 16개의 유형으로 나누는
                자기보고식 성격유형 지표입니다. <br />
                대표적으로 외향적인 E와 내향적인 I, 감각형 S, 직관형 N, 사고형 T, 감정형 F, 판단형 J, 인식형 P로 구분이
                됩니다.
              </p>
            </div>
            <div className={"mt-[23px] ml-[88px]"}>
              <div className="flex flex-row items-start justify-start">
                <div
                  className="text-_900 text-left font-bold flex items-center justify-start"
                  style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}
                >
                  나의 MBTI 유형은? (1개선택){" "}
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
            <div className="ml-[88px] mt-[27px]">
              <div className="grid grid-cols-4 gap-[30px]">
                <button className={mbti === "INTJ" ? mbtiSelectCss : mbtiUnselectCss} onClick={handleMbti}>
                  INTJ 전략가{" "}
                  {mbti === "INTJ" && (
                    <div className="relative">
                      <img src="/chk.svg" alt="" className="absolute top-[-25px] left-[33px]" />
                    </div>
                  )}
                </button>
                <button className={mbti === "INTP" ? mbtiSelectCss : mbtiUnselectCss} onClick={handleMbti}>
                  INTP 논리술사{" "}
                  {mbti === "INTP" && (
                    <div className="relative">
                      <img src="/chk.svg" alt="" className="absolute top-[-25px] left-[33px]" />
                    </div>
                  )}
                </button>
                <button className={mbti === "ENTJ" ? mbtiSelectCss : mbtiUnselectCss} onClick={handleMbti}>
                  ENTJ 통솔자{" "}
                  {mbti === "ENTJ" && (
                    <div className="relative">
                      <img src="/chk.svg" alt="" className="absolute top-[-25px] left-[33px]" />
                    </div>
                  )}
                </button>
                <button className={mbti === "ENTP" ? mbtiSelectCss : mbtiUnselectCss} onClick={handleMbti}>
                  ENTP 변론가{" "}
                  {mbti === "ENTP" && (
                    <div className="relative">
                      <img src="/chk.svg" alt="" className="absolute top-[-25px] left-[33px]" />
                    </div>
                  )}
                </button>
                <button className={mbti === "INFJ" ? mbtiSelectCss : mbtiUnselectCss} onClick={handleMbti}>
                  INFJ 옹호자{" "}
                  {mbti === "INFJ" && (
                    <div className="relative">
                      <img src="/chk.svg" alt="" className="absolute top-[-25px] left-[33px]" />
                    </div>
                  )}
                </button>
                <button className={mbti === "INFP" ? mbtiSelectCss : mbtiUnselectCss} onClick={handleMbti}>
                  INFP 중재자{" "}
                  {mbti === "INFP" && (
                    <div className="relative">
                      <img src="/chk.svg" alt="" className="absolute top-[-25px] left-[33px]" />
                    </div>
                  )}
                </button>
                <button className={mbti === "ENFJ" ? mbtiSelectCss : mbtiUnselectCss} onClick={handleMbti}>
                  ENFJ 선도자{" "}
                  {mbti === "ENFJ" && (
                    <div className="relative">
                      <img src="/chk.svg" alt="" className="absolute top-[-25px] left-[33px]" />
                    </div>
                  )}
                </button>
                <button className={mbti === "ENFP" ? mbtiSelectCss : mbtiUnselectCss} onClick={handleMbti}>
                  ENFP 활동가{" "}
                  {mbti === "ENFP" && (
                    <div className="relative">
                      <img src="/chk.svg" alt="" className="absolute top-[-25px] left-[33px]" />
                    </div>
                  )}
                </button>
                <button className={mbti === "ISTJ" ? mbtiSelectCss : mbtiUnselectCss} onClick={handleMbti}>
                  ISTJ 현실주의자{" "}
                  {mbti === "ISTJ" && (
                    <div className="relative">
                      <img src="/chk.svg" alt="" className="absolute top-[-25px] left-[33px]" />
                    </div>
                  )}{" "}
                </button>
                <button className={mbti === "ISFJ" ? mbtiSelectCss : mbtiUnselectCss} onClick={handleMbti}>
                  ISFJ 수호자{" "}
                  {mbti === "ISFJ" && (
                    <div className="relative">
                      <img src="/chk.svg" alt="" className="absolute top-[-25px] left-[33px]" />{" "}
                    </div>
                  )}
                </button>
                <button className={mbti === "ESTJ" ? mbtiSelectCss : mbtiUnselectCss} onClick={handleMbti}>
                  ESTJ 경영자{" "}
                  {mbti === "ESTJ" && (
                    <div className="relative">
                      <img src="/chk.svg" alt="" className="absolute top-[-25px] left-[33px]" />{" "}
                    </div>
                  )}
                </button>
                <button className={mbti === "ESFJ" ? mbtiSelectCss : mbtiUnselectCss} onClick={handleMbti}>
                  ESFJ 집정관{" "}
                  {mbti === "ESFJ" && (
                    <div className="relative">
                      <img src="/chk.svg" alt="" className="absolute top-[-25px] left-[33px]" />{" "}
                    </div>
                  )}
                </button>
                <button className={mbti === "ISTP" ? mbtiSelectCss : mbtiUnselectCss} onClick={handleMbti}>
                  ISTP 장인{" "}
                  {mbti === "ISTP" && (
                    <div className="relative">
                      <img src="/chk.svg" alt="" className="absolute top-[-25px] left-[33px]" />{" "}
                    </div>
                  )}
                </button>
                <button className={mbti === "ISFP" ? mbtiSelectCss : mbtiUnselectCss} onClick={handleMbti}>
                  ISFP 모험가{" "}
                  {mbti === "ISFP" && (
                    <div className="relative">
                      <img src="/chk.svg" alt="" className="absolute top-[-25px] left-[33px]" />{" "}
                    </div>
                  )}
                </button>
                <button className={mbti === "ESTP" ? mbtiSelectCss : mbtiUnselectCss} onClick={handleMbti}>
                  ESTP 사업가{" "}
                  {mbti === "ESTP" && (
                    <div className="relative">
                      <img src="/chk.svg" alt="" className="absolute top-[-25px] left-[33px]" />{" "}
                    </div>
                  )}
                </button>
                <button className={mbti === "ESFP" ? mbtiSelectCss : mbtiUnselectCss} onClick={handleMbti}>
                  ESFP 연예인{" "}
                  {mbti === "ESFP" && (
                    <div className="relative">
                      <img src="/chk.svg" alt="" className="absolute top-[-25px] left-[33px]" />{" "}
                    </div>
                  )}
                </button>
              </div>
              <div className="flex">
                <div className="mt-[50px] flex w-[279px] items-start gap-2.5">
                  <p className="flex-[1_0_0] text-[color:var(--600,#777)] text-[13px] not-italic font-normal leading-[178%] tracking-[0.13px]">
                    본인의 MBTI 성향을 모르시면 확인해보세요 <br /> MBTI검사는 무료 입니다.
                  </p>
                </div>
                <div className="mt-[60px] ml-[30px]">
                  <img src="/right-arrow.svg" alt="" />
                </div>
                <div className="mt-[50px] ml-[86px]">
                  <button
                    className="bg-[#695B4C] flex w-[210px] h-[46px] justify-center items-center gap-2.5 shrink-0 flex-[1_0_0] text-[color:var(--white,#FFF)] text-center text-sm not-italic font-semibold leading-[318.5%] tracking-[0.14px]"
                    onClick={() => window.open("https://kmbti.co.kr/")}
                  >
                    무료 MBTI검사 바로가기
                  </button>
                </div>
              </div>
            </div>
            <div className={"mt-[60px] ml-[88px]"}>
              <div className="flex flex-row items-start justify-start">
                <div
                  className="text-_900 text-left font-bold flex items-center justify-start"
                  style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}
                >
                  장단점{" "}
                </div>
                <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6">
                  <div
                    className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                    style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                  >
                    *
                  </div>
                </div>
                <div className="ml-[26px]">
                  <textarea
                    className="flex w-[912px] h-48 items-center gap-6 shrink-0 border border-[color:var(--400,#BFBFBF)] p-[20px] rounded-[5px] border-solid placeholder-[#7777] placeholder-sm  placeholder-leading-[178%] placeholder-tracking-[0.14px]"
                    name=""
                    id=""
                    cols={112}
                    rows={10}
                    placeholder="성격/ 성향/스타일등 자신의 장점과 단점을 적고 가정을 꾸리며 어떻게 맞추어 나가고 극복해 나갈지 간단하게 적어주세요 "
                  ></textarea>
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
              성향 테스트{" "}
            </div>
          </div>
          <div className="mb-[15px]"></div>
          <div className="bg-backselect flex-1 w-[1200px]">
            <div className="pl-[120px] pt-[52px]">
              <div className="flex w-[849px] items-start gap-2.5 flex-[1_0_0] text-[color:var(--600,#777)] text-sm not-italic font-normal leading-[178%] tracking-[0.14px]">
                작성하신 회원님의 성향을 미래의 짝궁이 보게 됩니다. 모든 항목에 성실히 답변해주세요
              </div>
              <div className="mt-[40px]">
                <table>
                  <thead>
                    <tr>
                      <th className="w-[40%] h-[45px]">항목</th>
                      <th className="w-[15%]">그렇다</th>
                      <th className="w-[15%]">다소 그런편</th>
                      <th className="w-[15%]">그렇지 않은편</th>
                      <th className="w-[15%]">그렇지 않다</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="h-[45px]">
                      <td className="text-start flex-[1_0_0] text-[color:var(--600,#777)] text-sm not-italic font-medium leading-[318.5%] tracking-[0.14px]">
                        1. 나는 타인과 갈등이 있을 때 손해가 되더라도 상대에게 맞춘다.
                      </td>
                      <td className="text-center">
                        {q1 === 1 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q1_1" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q1 === 2 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q1_2" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q1 === 3 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q1_3" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q1 === 4 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q1_4" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                    </tr>
                    <tr className="h-[45px]">
                      <td className="text-start flex-[1_0_0] text-[color:var(--600,#777)] text-sm not-italic font-medium leading-[318.5%] tracking-[0.14px]">
                        2. 나는 비슷한 성향의 사람보다 반대의 성향의 짝이 좋다.
                      </td>
                      <td className="text-center">
                        {q2 === 1 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q2_1" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q2 === 2 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q2_2" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q2 === 3 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q2_3" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q2 === 4 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q2_4" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                    </tr>
                    <tr className="h-[45px]">
                      <td className="text-start flex-[1_0_0] text-[color:var(--600,#777)] text-sm not-italic font-medium leading-[318.5%] tracking-[0.14px]">
                        3. 나는 새로운 것에 대한 호기심이 강하다.
                      </td>
                      <td className="text-center">
                        {q3 === 1 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q3_1" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q3 === 2 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q3_2" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q3 === 3 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q3_3" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q3 === 4 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q3_4" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                    </tr>
                    <tr className="h-[45px]">
                      <td className="text-start flex-[1_0_0] text-[color:var(--600,#777)] text-sm not-italic font-medium leading-[318.5%] tracking-[0.14px]">
                        4. 자신감이 있고 지적인 사람보다는 사교적이고 온화한 사람이 좋다.
                      </td>
                      <td className="text-center">
                        {q4 === 1 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q4_1" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q4 === 2 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q4_2" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q4 === 3 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q4_3" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q4 === 4 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q4_4" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                    </tr>
                    <tr className="h-[45px]">
                      <td className="text-start flex-[1_0_0] text-[color:var(--600,#777)] text-sm not-italic font-medium leading-[318.5%] tracking-[0.14px]">
                        5. 조용하고 절제되어 있는 웃음을 가진 배우자가 좋다.
                      </td>
                      <td className="text-center">
                        {q5 === 1 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q5_1" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q5 === 2 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q5_2" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q5 === 3 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q5_3" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q5 === 4 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q5_4" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                    </tr>
                    <tr className="h-[45px]">
                      <td className="text-start flex-[1_0_0] text-[color:var(--600,#777)] text-sm not-italic font-medium leading-[318.5%] tracking-[0.14px]">
                        6. 마음이 따듯한 사람보다 능력있는 사람이 마음에 든다.
                      </td>
                      <td className="text-center">
                        {q6 === 1 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q6_1" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q6 === 2 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q6_2" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q6 === 3 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q6_3" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q6 === 4 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q6_4" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                    </tr>
                    <tr className="h-[45px]">
                      <td className="text-start flex-[1_0_0] text-[color:var(--600,#777)] text-sm not-italic font-medium leading-[318.5%] tracking-[0.14px]">
                        7. 전통이나 관습의 중요성을 인식하는 사람이 좋다.
                      </td>
                      <td className="text-center">
                        {q7 === 1 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q7_1" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q7 === 2 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q7_2" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q7 === 3 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q7_3" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q7 === 4 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q7_4" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                    </tr>
                    <tr className="h-[45px]">
                      <td className="text-start flex-[1_0_0] text-[color:var(--600,#777)] text-sm not-italic font-medium leading-[318.5%] tracking-[0.14px]">
                        8. 나는 타인이 나를 좋아하고 존중한다고 확신한다.
                      </td>
                      <td className="text-center">
                        {q8 === 1 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q8_1" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q8 === 2 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q8_2" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q8 === 3 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q8_3" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q8 === 4 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q8_4" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                    </tr>
                    <tr className="h-[45px]">
                      <td className="text-start flex-[1_0_0] text-[color:var(--600,#777)] text-sm not-italic font-medium leading-[318.5%] tracking-[0.14px]">
                        9. 나는 대화를 먼저 시작한다.
                      </td>
                      <td className="text-center">
                        {q9 === 1 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q9_1" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q9 === 2 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q9_2" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q9 === 3 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q9_3" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q9 === 4 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q9_4" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                    </tr>
                    <tr className="h-[45px]">
                      <td className="text-start flex-[1_0_0] text-[color:var(--600,#777)] text-sm not-italic font-medium leading-[318.5%] tracking-[0.14px]">
                        10. 나는 남성의 액세서리에 대해서 긍정적이다.
                      </td>
                      <td className="text-center">
                        {q10 === 1 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q10_1" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q10 === 2 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q10_2" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q10 === 3 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q10_3" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q10 === 4 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q10_4" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                    </tr>
                    <tr className="h-[45px]">
                      <td className="text-start flex-[1_0_0] text-[color:var(--600,#777)] text-sm not-italic font-medium leading-[318.5%] tracking-[0.14px]">
                        11. 인간관계보다 일에서의 성취를 더 중요시 하는 사람이 좋다.
                      </td>
                      <td className="text-center">
                        {q11 === 1 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q11_1" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q11 === 2 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q11_2" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q11 === 3 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q11_3" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q11 === 4 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q11_4" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                    </tr>
                    <tr className="h-[45px]">
                      <td className="text-start flex-[1_0_0] text-[color:var(--600,#777)] text-sm not-italic font-medium leading-[318.5%] tracking-[0.14px]">
                        11. 인간관계보다 일에서의 성취를 더 중요시 하는 사람이 좋다.
                      </td>
                      <td className="text-center">
                        {q11 === 1 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q11_1" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q11 === 2 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q11_2" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q11 === 3 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q11_3" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q11 === 4 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q11_4" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                    </tr>
                    <tr className="h-[45px]">
                      <td className="text-start flex-[1_0_0] text-[color:var(--600,#777)] text-sm not-italic font-medium leading-[318.5%] tracking-[0.14px]">
                        12. 배우자의 친구는 많았으면 좋겠다.
                      </td>
                      <td className="text-center">
                        {q12 === 1 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q12_1" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q12 === 2 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q12_2" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q12 === 3 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q12_3" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q12 === 4 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q12_4" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                    </tr>
                    <tr className="h-[45px]">
                      <td className="text-start flex-[1_0_0] text-[color:var(--600,#777)] text-sm not-italic font-medium leading-[318.5%] tracking-[0.14px]">
                        12. 배우자의 친구는 많았으면 좋겠다.
                      </td>
                      <td className="text-center">
                        {q12 === 1 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q12_1" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q12 === 2 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q12_2" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q12 === 3 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q12_3" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q12 === 4 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q12_4" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                    </tr>
                    <tr className="h-[45px]">
                      <td className="text-start flex-[1_0_0] text-[color:var(--600,#777)] text-sm not-italic font-medium leading-[318.5%] tracking-[0.14px]">
                        13. 예술에 대한 관심이 높은 사람이 좋다.
                      </td>
                      <td className="text-center">
                        {q13 === 1 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q13_1" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q13 === 2 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q13_2" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q13 === 3 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q13_3" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q13 === 4 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q13_4" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                    </tr>
                    <tr className="h-[45px]">
                      <td className="text-start flex-[1_0_0] text-[color:var(--600,#777)] text-sm not-italic font-medium leading-[318.5%] tracking-[0.14px]">
                        14. 나의 이성친구를 인정해주는 배우자가 좋다.
                      </td>
                      <td className="text-center">
                        {q14 === 1 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q14_1" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q14 === 2 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q14_2" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q14 === 3 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q14_3" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q14 === 4 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q14_4" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                    </tr>
                    <tr className="h-[45px]">
                      <td className="text-start flex-[1_0_0] text-[color:var(--600,#777)] text-sm not-italic font-medium leading-[318.5%] tracking-[0.14px]">
                        15. 나는 생각대로 일이 진행되지 않으면 실망감을 그대로 표현한다.
                      </td>
                      <td className="text-center">
                        {q15 === 1 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q15_1" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q15 === 2 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q15_2" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q15 === 3 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q15_3" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q15 === 4 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q15_4" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                    </tr>
                    <tr className="h-[45px] ">
                      <td className="text-start flex-[1_0_0] text-[color:var(--600,#777)] text-sm not-italic font-medium leading-[318.5%] tracking-[0.14px]">
                        16. 나는 다른 사람에게 쉽게 다가가지 못한다.
                      </td>
                      <td className="text-center">
                        {q16 === 1 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q16_1" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q16 === 2 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q16_2" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q16 === 3 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q16_3" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q16 === 4 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q16_4" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                    </tr>
                    <tr className="h-[45px]">
                      <td className="text-start flex-[1_0_0] text-[color:var(--600,#777)] text-sm not-italic font-medium leading-[318.5%] tracking-[0.14px]">
                        17. 나는 기발한 아이디어를 많이 가지고 있다.
                      </td>
                      <td className="text-center">
                        {q17 === 1 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q17_1" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q17 === 2 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q17_2" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q17 === 3 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q17_3" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q17 === 4 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q17_4" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                    </tr>
                    <tr className="h-[45px]">
                      <td className="text-start flex-[1_0_0] text-[color:var(--600,#777)] text-sm not-italic font-medium leading-[318.5%] tracking-[0.14px]">
                        18. 말을 잘하는 사람이 좋다.
                      </td>
                      <td className="text-center">
                        {q18 === 1 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q18_1" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q18 === 2 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q18_2" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q18 === 3 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q18_3" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q18 === 4 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q18_4" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                    </tr>
                    <tr className="h-[45px]">
                      <td className="text-start flex-[1_0_0] text-[color:var(--600,#777)] text-sm not-italic font-medium leading-[318.5%] tracking-[0.14px]">
                        19. 배우자는 웃음과 눈물이 많은 사람이 좋겠다.
                      </td>
                      <td className="text-center">
                        {q19 === 1 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q19_1" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q19 === 2 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q19_2" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q19 === 3 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q19_3" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q19 === 4 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q19_4" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                    </tr>
                    <tr className="h-[45px]">
                      <td className="text-start flex-[1_0_0] text-[color:var(--600,#777)] text-sm not-italic font-medium leading-[318.5%] tracking-[0.14px]">
                        20. 같은 일도 항상 새로운 방법으로 해보길 좋아하는 이성에게 끌린다.
                      </td>
                      <td className="text-center">
                        {q20 === 1 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q20_1" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q20 === 2 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q20_2" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q20 === 3 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q20_3" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                      <td className="text-center">
                        {q20 === 4 ? (
                          <img src="/radio_check.png" alt="" />
                        ) : (
                          <img id="q20_4" src="/radio_uncheck.png" onClick={handleQ} alt="" />
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="pb-[60px]"></div>
          </div>
        </div>

        <div className="mb-[60px]"></div>

        <div className="w-[1200px] flex-col">
          <div className="text-primary2 text-left" style={{ font: "700 22px/150% 'Noto Sans', sans-serif" }}>
            취미활동{" "}
          </div>
          <div className="mb-[15px]"></div>
          <div className="bg-backselect flex-1 w-[1200px]">
            <table className="ml-[88px]">
              <thead>
                <tr className="h-[60px]">
                  <th className="w-[8%]"></th>
                  <th className="w-[30%] text-start text-[color:var(--600,#777)] text-sm not-italic font-semibold leading-[318.5%] tracking-[0.14px]">
                    대표적인 취미활동 3가지만 적어주세요
                  </th>
                  <th className="w-[15%] text-start text-[color:var(--600,#777)] text-sm not-italic font-semibold leading-[318.5%] tracking-[0.14px]">
                    관심 많고 자주한다
                  </th>
                  <th className="w-[15%] text-start text-[color:var(--600,#777)] text-sm not-italic font-semibold leading-[318.5%] tracking-[0.14px]">
                    가끔하는편이다
                  </th>
                  <th className="w-[15%] text-start text-[color:var(--600,#777)] text-sm not-italic font-semibold leading-[318.5%] tracking-[0.14px]">
                    어쩌다 한번씩
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="h-[90px]">
                  <th>
                    <div className="flex">
                      <div className="items-start gap-[5px]">취미1</div>
                      <div
                        className="ml-[13px] text-[#e82121] flex items-center pt-[3px]"
                        style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                      >
                        *
                      </div>
                    </div>
                  </th>
                  <td>
                    <select className="flex w-80 h-[60px] items-center gap-6 shrink-0 border border-[color:var(--400,#BFBFBF)] px-2.5 py-0 rounded-[5px] border-solid">
                      <option value="">선택</option>
                      {hobby1.map((value) => (
                        <option value={value}>{value}</option>
                      ))}
                    </select>
                  </td>
                  <td className="pl-[20px]">
                    {hobbyLevel1 === 1 ? (
                      <img src="/radio_check.png" alt="" />
                    ) : (
                      <img id="h1_1" src="/radio_uncheck.png" alt="" onClick={handleHobby} />
                    )}
                  </td>
                  <td className="pl-[20px]">
                    {hobbyLevel1 === 2 ? (
                      <img src="/radio_check.png" alt="" />
                    ) : (
                      <img id="h1_2" src="/radio_uncheck.png" alt="" onClick={handleHobby} />
                    )}
                  </td>
                  <td className="pl-[20px]">
                    {hobbyLevel1 === 3 ? (
                      <img src="/radio_check.png" alt="" />
                    ) : (
                      <img id="h1_3" src="/radio_uncheck.png" alt="" onClick={handleHobby} />
                    )}
                  </td>
                </tr>
                <tr className="h-[90px]">
                  <th>
                    <div className="flex">
                      <div className="items-start gap-[5px]">취미2</div>
                      <div
                        className="ml-[13px] text-[#e82121] flex items-center pt-[3px]"
                        style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                      >
                        *
                      </div>
                    </div>
                  </th>
                  <td>
                    <select className="flex w-80 h-[60px] items-center gap-6 shrink-0 border border-[color:var(--400,#BFBFBF)] px-2.5 py-0 rounded-[5px] border-solid">
                      <option value="">선택</option>
                      {hobby2.map((value) => (
                        <option value={value}>{value}</option>
                      ))}
                    </select>
                  </td>
                  <td className="pl-[20px]">
                    {hobbyLevel2 === 1 ? (
                      <img src="/radio_check.png" alt="" />
                    ) : (
                      <img id="h2_1" src="/radio_uncheck.png" alt="" onClick={handleHobby} />
                    )}
                  </td>
                  <td className="pl-[20px]">
                    {hobbyLevel2 === 2 ? (
                      <img src="/radio_check.png" alt="" />
                    ) : (
                      <img id="h2_2" src="/radio_uncheck.png" alt="" onClick={handleHobby} />
                    )}
                  </td>
                  <td className="pl-[20px]">
                    {hobbyLevel2 === 3 ? (
                      <img src="/radio_check.png" alt="" />
                    ) : (
                      <img id="h2_3" src="/radio_uncheck.png" alt="" onClick={handleHobby} />
                    )}
                  </td>
                </tr>
                <tr className="h-[90px]">
                  <th>
                    <div className="flex">
                      <div className="items-start gap-[5px]">취미3</div>
                      <div
                        className="ml-[13px] text-[#e82121] flex items-center pt-[3px]"
                        style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                      >
                        *
                      </div>
                    </div>
                  </th>
                  <td>
                    <select className="flex w-80 h-[60px] items-center gap-6 shrink-0 border border-[color:var(--400,#BFBFBF)] px-2.5 py-0 rounded-[5px] border-solid">
                      <option value="">선택</option>
                      {hobby3.map((value) => (
                        <option value={value}>{value}</option>
                      ))}
                    </select>
                  </td>
                  <td className="pl-[20px]">
                    {hobbyLevel3 === 1 ? (
                      <img src="/radio_check.png" alt="" />
                    ) : (
                      <img id="h3_1" src="/radio_uncheck.png" alt="" onClick={handleHobby} />
                    )}
                  </td>
                  <td className="pl-[20px]">
                    {hobbyLevel3 === 2 ? (
                      <img src="/radio_check.png" alt="" />
                    ) : (
                      <img id="h3_2" src="/radio_uncheck.png" alt="" onClick={handleHobby} />
                    )}
                  </td>
                  <td className="pl-[20px]">
                    {hobbyLevel3 === 3 ? (
                      <img src="/radio_check.png" alt="" />
                    ) : (
                      <img id="h3_3" src="/radio_uncheck.png" alt="" onClick={handleHobby} />
                    )}
                  </td>
                </tr>
                <tr>
                  <th>
                    <div className="flex">
                      <div className="items-start gap-[5px]">자기소개</div>
                      <div
                        className="ml-[13px] text-[#e82121] flex items-center pt-[3px]"
                        style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                      >
                        *
                      </div>
                    </div>
                  </th>
                  <td colSpan={4}>
                    <textarea
                      className="w-[950px] h-[200px] border border-[color:var(--400,#BFBFBF)] px-2.5 py-0 rounded-[5px] border-solid placeholder-[color:var(--400,#BFBFBF)] placeholder-sm placeholder-nomal pl-[20px] pt-[20px]"
                      placeholder="기본적인 사항들은 각 항목에서 소개되고 있으니… 그 외 기본적인 소개 말고 자신을 어필할 수 있는 내용을 중심으로 적으세요"
                    ></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
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
