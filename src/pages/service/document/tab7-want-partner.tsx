import { NextPage } from "next";
import React, { useRef, useState } from "react";

import Tab71BasicInfo from "./tab7-1-basic-info";
import Tab72StyleInfo from "./tab7-2-style-info";

type ActivedTab = {
  activedTab: number;
  setActivedTab: React.Dispatch<React.SetStateAction<number>>;
};

const Tab7WantPartner: NextPage<ActivedTab> = ({ activedTab, setActivedTab }) => {
  const [activedDetailTab, setActivedDetailTab] = useState(0);
  const handleNextTab = () => {
    setActivedTab(2);
  };

  const tabContent = [
    {
      title: "기본정보",
      content: <Tab71BasicInfo activedDetailTab={activedDetailTab} setActivedDetailTab={setActivedDetailTab} />,
    },
    {
      title: "스타일",
      content: <Tab72StyleInfo activedDetailTab={activedDetailTab} setActivedDetailTab={setActivedDetailTab} />,
    },
  ];

  return (
    <div className={"bg-whitesmoke w-full"}>
      <div className={"bg-white w-full flex flex-col items-center justify-center"}>
        <div className={"w-[1200px] bg-back-select"}>
          <div id={"title"} className="w-full h-11 text-center text-[35px] text-darkslategray font-noto-sans m-[46px]">
            <div className="">희망상대</div>
          </div>
          <div className="mt-[48px] w-full flex justify-center">
            <img src="/alram.png" alt="" />
            <p className="ml-[10px] text-[#777777] text-xl not-italic font-normal leading-6 flex justify-center">
              희망하는 상대를 <p className="ml-[5px] text-[#008DFA]">정확하게</p> 작성해주셔야{" "}
              <p className="ml-[5px] text-[#00D38B]">미래의 짝궁</p>도 확인하고 중앙에서도 적극적으로 도와드릴 수
              있습니다.
            </p>
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

          <div className="mb-[62px]"></div>
        </div>

        <div className="mb-[60px]"></div>

        <div className="flex flex-row gap-0 items-start justify-center shrink-0 relative">
          {tabContent.map((tab, index) => (
            <div key={index} className="shrink-1 w-[151px] h-[55px] ">
              <button
                className={
                  activedDetailTab === index
                    ? "absolute z-10 flex bg-[#A2BB81] w-[180px] h-[70px] justify-center items-center rounded-[20px] text-[color:var(--white,#FFF)] text-center text-base not-italic font-normal leading-[220%]"
                    : "bg-white w-[180px] h-[70px] flex justify-center items-center rounded-[20px] text-[color:var(--700,#636363)] text-center text-base not-italic font-normal leading-[220%] border border-[color:var(--400,#BFBFBF)]  border-solid left-[420px]"
                }
                key={index}
                onClick={() => setActivedDetailTab(index)}
              >
                {tab.title}
              </button>
            </div>
          ))}
        </div>
        <div id={"content"} className="mt-[40px]">
          {tabContent[activedDetailTab].content}
        </div>

        <div className={"mb-[60px]"}></div>
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

export default Tab7WantPartner;
