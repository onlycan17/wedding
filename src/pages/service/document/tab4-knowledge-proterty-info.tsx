import {NextPage} from "next";
import React, {useRef, useState} from "react";

import generateYear from "@/pages/common/function/generate-year";
import {dataDepartment} from "@/pages/data/department";
import generateNumbers from "@/pages/common/function/generate-number";
import {secondStatus} from "@/pages/data/second-status";
import {newClass} from "@/pages/data/new-class";

type ActivedTab = {
    activedTab: number,
    setActivedTab: React.Dispatch<React.SetStateAction<number>>
}



const Tab4KnowledgePropertyInfo: NextPage<ActivedTab> = ({activedTab, setActivedTab}) => {

    const [fields, setFields] = useState<number[]>([0]); // 초기 상태는 하나의 필드만 있도록 설정

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
    }


    return (
        <div className={'bg-whitesmoke w-full'}>
            <div className={'bg-white w-full flex flex-col items-center justify-center'}>
                <div className={'w-[1200px] h-[860px] bg-back-select'}>
                    <div id={'title'}
                         className="w-full h-11 text-center text-[35px] text-darkslategray font-noto-sans m-[46px]">
                        <div className="">직장/재산정보</div>
                    </div>
                    <div id={'content'} className="w-full flex flex-col pl-[88px] pt-[33px] ">
                        <div className={'w-full flex justify-end pr-[35.85px]'}>
                            <div className={'w-[362px]'}>
                                <div className={'w-full flex flex-row justify-center items-center'}>
                                    <div className="text-[#e82121] text-left w-3"
                                         style={{font: "400 13px/14.95px 'Noto Sans', sans-serif"}}>
                                        *
                                    </div>
                                    <div className="text-_500 text-left pr-[17.85px]"
                                         style={{font: "var(--font-16, 400 16px/150% 'Noto Sans', sans-serif)"}}>
                                        필수입력 정보입니다.
                                    </div>
                                    <div className="bg-[#d9d9d9] w-[47px] h-[19px] mr-[5.15px]"></div>
                                    <div className="text-_500 text-left"
                                         style={{font: "var(--font-16, 400 16px/150% 'Noto Sans', sans-serif)"}}>
                                        비공개 정보 입니다.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'w-full h-[111px]'}></div>
                        <div className={'w-full flex justify-start'}>
                            <div className={'mt-[88px]'}>
                                <div className="flex flex-row items-start justify-start">
                                    <div
                                        className="text-_900 text-left font-bold flex items-center justify-start"
                                        style={{font: "400 16px/150% 'Noto Sans', sans-serif"}}
                                    >
                                        직업/종{" "}
                                    </div>
                                    <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6">
                                        <div
                                            className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                                            style={{font: "400 13px/14.95px 'Noto Sans', sans-serif"}}
                                        >
                                            *
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={' mt-[70px] w-[192px] flex justify-end'}>
                                <div className={'w-[180px] h-[60px]'}>
                                    <select className={'h-[60px]'}>
                                        <option>선택</option>
                                        {dataDepartment.map((item, index) => (
                                            <option key={index} value={item.code}>{item.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className={'mt-[88px] ml-[78px]'}>
                                <div className="flex flex-row items-start justify-start">
                                    <div
                                        className="text-_900 text-left font-bold flex items-center justify-start"
                                        style={{font: "400 16px/150% 'Noto Sans', sans-serif"}}
                                    >
                                        활동사명{" "}
                                    </div>
                                    <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6">
                                        <div
                                            className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                                            style={{font: "400 13px/14.95px 'Noto Sans', sans-serif"}}
                                        >
                                            *
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={' mt-[70px] w-[192px] flex justify-end'}>
                                <div className={'w-[180px] h-[60px]'}>
                                    <select className={'h-[60px]'}>
                                        <option>선택</option>
                                        {dataDepartment.map((item, index) => (
                                            <option key={index} value={item.code}>{item.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className={'w-full flex justify-start'}>
                            <div className={'mt-[58px]'}>
                                <div className="flex flex-row items-start justify-start">
                                    <div
                                        className="text-_900 text-left font-bold flex items-center justify-start"
                                        style={{font: "400 16px/150% 'Noto Sans', sans-serif"}}
                                    >
                                        수료일{" "}
                                    </div>
                                    <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6">
                                        <div
                                            className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                                            style={{font: "400 13px/14.95px 'Noto Sans', sans-serif"}}
                                        >
                                            *
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={' mt-[40px] w-[172px] flex justify-end'}>
                                <div className={'w-[146px] h-[60px]'}>
                                    <select className={'h-[60px]'}>
                                        <option>년도</option>
                                        {
                                            generateYear(1970).map((item, index) => (
                                                <option key={index} value={item}>{item}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className={'ml-[20px]'}></div>
                            <div className={'mt-[40px] w-[110px] h-[60px]'}>
                                <select className={'h-[60px]'}>
                                    <option>월</option>
                                    {
                                        generateNumbers(12).map((item, index) => (
                                            <option key={index} value={item}>{item}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className={'ml-[20px]'}></div>
                            <div className={'mt-[40px] w-[110px] h-[60px]'}>
                                <select className={'h-[60px]'}>
                                    <option>일</option>
                                    {
                                        generateNumbers(31).map((item, index) => (
                                            <option key={index} value={item}>{item}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className={'ml-[20px]'}></div>
                            <div className={'mt-[40px] w-[110px] h-[60px]'}>
                                <input type={'number'}
                                       className={'border-0 border-b-2 h-[60px] font-size-16 text-[#4d5053] text-right bg-transparent'}
                                       placeholder={'년'}
                                       max={99}
                                       style={{font: "400 22px/150% 'Jost', sans-serif"}}
                                />
                            </div>
                        </div>
                        <div className={'w-full flex justify-start'}>
                            <div className={'mt-[58px]'}>
                                <div className="flex flex-row items-start justify-start">
                                    <div
                                        className="text-_900 text-left font-bold flex items-center justify-start"
                                        style={{font: "400 16px/150% 'Noto Sans', sans-serif"}}
                                    >
                                        2세유무{" "}
                                    </div>
                                </div>
                            </div>
                            <div className={' mt-[58px] w-[187px] flex justify-end'}>
                                <div className={'w-[146px] h-[60px]'}>
                                    <span className="bg-chk">
                                        <input type={'checkbox'} id={'secondYn'}/>
                                        <label className="bg-chk-label" htmlFor="secondYn">2세입니다.</label>
                                    </span>
                                </div>
                            </div>
                            <div className={'ml-[20px]'}></div>
                            <div className={'mt-[40px] w-[180px] h-[60px]'}>
                                <select className={'h-[60px]'}>
                                    <option>선택</option>
                                    {
                                        secondStatus.map((item, index) => (
                                            <option key={index} value={item.code}>{item.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        <div className={'w-full flex justify-start'}>
                            <div className={'mt-[58px]'}>
                                <div className="flex flex-row items-start justify-start">
                                    <div
                                        className="text-_900 text-left font-bold flex items-center justify-start"
                                        style={{font: "400 16px/150% 'Noto Sans', sans-serif"}}
                                    >
                                        신급{" "}
                                    </div>
                                </div>
                            </div>
                            <div className={'ml-[64px]'}></div>
                            <div className={'mt-[40px] w-[180px] h-[60px]'}>
                                <select className={'h-[60px]'}>
                                    <option>선택</option>
                                    {
                                        newClass.map((item, index) => (
                                            <option key={index} value={item.code}>{item.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className={'ml-[80px]'}></div>
                            <div className={'mt-[58px]'}>
                                <div className="flex flex-row items-start justify-start">
                                    <div
                                        className="text-_900 text-left font-bold flex items-center justify-start"
                                        style={{font: "400 16px/150% 'Noto Sans', sans-serif"}}
                                    >
                                        신학{" "}
                                    </div>
                                </div>
                            </div>
                            <div className={'ml-[64px]'}></div>
                            <div className={'mt-[40px] h-[60px]'}>
                                <input type={'text'}
                                       className={' rounded-[5px] border-solid border-_400 border pr-2.5 pl-2.5 flex flex-row gap-2.5 items-center justify-start text-_500 w-[180px] h-[60px] text-right'}
                                       placeholder={'기'}/>
                            </div>
                            <div className={'ml-[20px]'}></div>
                            <div className={'mt-[40px] h-[60px]'}>
                                <input type={'text'}
                                       className={' rounded-[5px] border-solid border-_400 border pr-2.5 pl-2.5 flex flex-row gap-2.5 items-center justify-start text-_500 w-[180px] h-[60px] text-right'}
                                       placeholder={'학과'}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'mb-[70px]'}></div>
                <div className="flex flex-col gap-[15px] items-start justify-start ">
                    <div className="flex flex-row gap-2.5 items-start justify-start shrink-0">
                        <div
                            className="text-primary2 text-left"
                            style={{font: "700 22px/150% 'Noto Sans', sans-serif"}}
                        >
                            공적사항{" "}
                        </div>
                    </div>
                    <div className="bg-backselect flex-1 w-[1200px]">
                        <div className={'mt-[60px] ml-[88px] flex justify-between'}>
                            <div className="text-_700 text-left relative"
                                 style={{font: "500 14px/150% 'Noto Sans', sans-serif"}}>
                                피스넷 기준으로 정확하게 적어주세요(잘 모르시면 총무에게 확인 후 적어주세요)
                            </div>
                            <div
                                className="text-error text-left pr-[102px]"
                                style={{font: "500 14px/150% 'Noto Sans', sans-serif"}}
                            >
                                없으시면 0으로 적어주세요{" "}
                            </div>
                        </div>
                        <div className={'pl-[88px] flex'}>
                            <div className="text-primary1 text-left w-[30px] mt-[45px]"
                                 style={{font: "600 16px/200% 'Noto Sans', sans-serif"}}>
                                전도
                            </div>
                            <div className={'mt-[47px]'}>
                                <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6 ">
                                    <div
                                        className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
                                        style={{font: "400 13px/14.95px 'Noto Sans', sans-serif"}}
                                    >
                                        *
                                    </div>
                                </div>
                            </div>
                            <div className={'ml-[42px] mt-[29px]'}>
                                <div
                                    className="text-_900 text-left w-[146px] h-[60px] flex items-center justify-start"
                                    style={{font: "500 16px/200% 'Noto Sans', sans-serif"}}
                                >
                                    <input type={'text'}
                                           className={'rounded-[5px] border-solid border-_400 border pr-2.5 pl-2.5 flex flex-row gap-2.5 items-center justify-start text-_500 w-[146px] h-[60px] text-left'}/>
                                    <label className={'pl-[10px] text-[#292f36]'}>명</label>
                                </div>
                            </div>
                            <div className={'ml-[93px] mt-[45px]'}>
                                <div className="flex flex-row items-start justify-start">
                                    <div
                                        className="text-_900 text-left flex items-center justify-start"
                                        style={{font: "400 16px/150% 'Noto Sans', sans-serif"}}
                                    >
                                        강의{" "}
                                    </div>
                                    <div
                                        className="flex flex-col gap-2.5 items-center justify-center shrink-0 w-6 h-6 ">
                                        <div
                                            className="text-[#e82121] text-center flex items-center justify-center"
                                            style={{font: "400 13px/14.95px 'Noto Sans', sans-serif"}}
                                        >
                                            *{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'ml-[42px] mt-[29px]'}>
                                <div
                                    className="text-_900 text-left w-[146px] h-[60px] flex items-center justify-start"
                                    style={{font: "500 16px/200% 'Noto Sans', sans-serif"}}
                                >
                                    <input type={'text'}
                                           className={'rounded-[5px] border-solid border-_400 border pr-2.5 pl-2.5 flex flex-row gap-2.5 items-center justify-start text-_500 w-[146px] h-[60px] text-left'}/>
                                    <label className={'pl-[10px] text-[#292f36]'}>명</label>
                                </div>
                            </div>
                            <div className={'ml-[93px] mt-[45px]'}>
                                <div className="flex flex-row items-start justify-start">
                                    <div
                                        className="text-_900 text-left flex items-center justify-start"
                                        style={{font: "400 16px/150% 'Noto Sans', sans-serif"}}
                                    >
                                        관리{" "}
                                    </div>
                                    <div
                                        className="flex flex-col gap-2.5 items-center justify-center shrink-0 w-6 h-6 ">
                                        <div
                                            className="text-[#e82121] text-center flex items-center justify-center"
                                            style={{font: "400 13px/14.95px 'Noto Sans', sans-serif"}}
                                        >
                                            *{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'ml-[42px] mt-[29px]'}>
                                <div
                                    className="text-_900 text-left w-[146px] h-[60px] flex items-center justify-start"
                                    style={{font: "500 16px/200% 'Noto Sans', sans-serif"}}
                                >
                                    <input type={'text'}
                                           className={'rounded-[5px] border-solid border-_400 border pr-2.5 pl-2.5 flex flex-row gap-2.5 items-center justify-start text-_500 w-[146px] h-[60px] text-left'}/>
                                    <label className={'pl-[10px] text-[#292f36]'}>명</label>
                                </div>
                            </div>
                        </div>
                        <div className={'pl-[88px] flex'}>
                            <div className="text-primary1 text-left w-[60px] mt-[45px]"
                                 style={{font: "600 16px/200% 'Noto Sans', sans-serif"}}>
                                기타공적
                            </div>
                            <div className={'flex flex-col'}>
                                {
                                    fields.map((field, index) => (
                                        <div key={field} className={'flex'}>
                                            <div className={'ml-[35px] mt-[30px]'}>
                                                <input type={'text'}
                                                       className={'rounded-[5px] border-solid border-_400 border pr-2.5 pl-2.5 flex flex-row gap-2.5 items-center justify-start text-_500 w-[552px] h-[60px] text-left'}/>
                                            </div>
                                            <div className={'ml-[10px]'}></div>
                                            <button
                                                className="text-primary1 text-left w-[24px] mt-[35px] bg-transparent"
                                                style={{font: "400 26px/200% 'Noto Sans', sans-serif"}}
                                                onClick={addField}>
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
                                                            <rect width="24" height="24" fill="white"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </button>
                                            <div className={'ml-[10px]'}></div>
                                            <button
                                                className="text-primary1 text-left w-[24px] mt-[35px] bg-transparent"
                                                style={{font: "400 26px/200% 'Noto Sans', sans-serif"}}
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
                                                            <rect width="24" height="24" fill="white"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </button>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={'mb-[40px]'}></div>
                    </div>
                </div>
                <div className={'mb-[50px]'}></div>
                <div className={'flex flex-col gap-[15px] items-start justify-start w-[1200px] h-[588px]'}>
                    <div className="flex flex-row gap-2.5 items-start justify-start shrink-0">
                        <div
                            className="text-primary2 text-left"
                            style={{font: "700 22px/150% 'Noto Sans', sans-serif"}}
                        >
                            신앙경력{" "}
                        </div>
                    </div>
                    <div className="bg-backselect flex-1 flex-col w-full">
                        <div className={'w-full flex flex-col ml-[88px]'}>
                            <div className="text-_700 text-left mt-[59px] "
                                 style={{font: "500 14px/150% 'Noto Sans', sans-serif"}}>
                                최근을 중심으로 대표적인 사명 3개까지만 적어주세요.
                            </div>
                            <div className="flex flex-row items-start justify-start h-[60px] w-full">
                                <div
                                    className="text-_900 text-left flex items-center justify-center h-[60px] mt-[29px]"
                                    style={{font: "400 16px/150% 'Noto Sans', sans-serif"}}
                                >
                                    사명{" "}
                                </div>
                                <div className="h-[60px] flex flex-col items-center justify-center shrink-0 ml-[10px] mt-[29px]">
                                    <div
                                        className="text-[#e82121] text-center flex items-center justify-center h-7"
                                        style={{font: "400 13px/14.95px 'Noto Sans', sans-serif"}}
                                    >
                                        *{" "}
                                    </div>
                                </div>
                                <div className={'ml-[41px] mt-[29px]'}>
                                    <input type={'text'}
                                           className="bg-white rounded-[5px] border-solid border-_400 border pt-5 pr-2.5 pb-5 pl-2.5 flex flex-row gap-2.5 items-center justify-start w-[146px] h-[60px] text-_500 text-left "
                                           style={{font: "400 15px/150% 'Noto Sans', sans-serif"}}
                                           placeholder={"기간 입력"}
                                    />
                                </div>
                                <div className={'mt-[45px] pl-[10px] pr-[10px]'}>
                                    <div className="text-[#292f36] text-left relative flex items-center justify-start" style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}>
                                        ~ </div>
                                </div>
                                <div className={'mt-[29px]'}>
                                    <input type={'text'}
                                           className="bg-white rounded-[5px] border-solid border-_400 border pt-5 pr-2.5 pb-5 pl-2.5 flex flex-row gap-2.5 items-center justify-start w-[166px] h-[60px] text-_500 text-left "
                                           style={{font: "400 15px/150% 'Noto Sans', sans-serif"}}
                                           placeholder={"기간 입력"}
                                    />
                                </div>
                                <div className={'ml-[30px]'}></div>
                                <div className={'mt-[29px]'}>
                                    <input type={'text'}
                                           className="bg-white rounded-[5px] border-solid border-_400 border pt-5 pr-2.5 pb-5 pl-2.5 flex flex-row gap-2.5 items-center justify-start w-[520px] h-[60px] text-_500 text-left "
                                           style={{font: "400 15px/150% 'Noto Sans', sans-serif"}}
                                           placeholder={"사명"}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start h-[60px] w-full">
                                <div className={'ml-[84px] mt-[49px]'}>
                                    <input type={'text'}
                                           className="bg-white rounded-[5px] border-solid border-_400 border pt-5 pr-2.5 pb-5 pl-2.5 flex flex-row gap-2.5 items-center justify-start w-[146px] h-[60px] text-_500 text-left "
                                           style={{font: "400 15px/150% 'Noto Sans', sans-serif"}}
                                           placeholder={"기간 입력"}
                                    />
                                </div>
                                <div className={'mt-[65px] pl-[10px] pr-[10px]'}>
                                    <div className="text-[#292f36] text-left relative flex items-center justify-start" style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}>
                                        ~ </div>
                                </div>
                                <div className={'mt-[49px]'}>
                                    <input type={'text'}
                                           className="bg-white rounded-[5px] border-solid border-_400 border pt-5 pr-2.5 pb-5 pl-2.5 flex flex-row gap-2.5 items-center justify-start w-[166px] h-[60px] text-_500 text-left "
                                           style={{font: "400 15px/150% 'Noto Sans', sans-serif"}}
                                           placeholder={"기간 입력"}
                                    />
                                </div>
                                <div className={'ml-[30px]'}></div>
                                <div className={'mt-[49px]'}>
                                    <input type={'text'}
                                           className="bg-white rounded-[5px] border-solid border-_400 border pt-5 pr-2.5 pb-5 pl-2.5 flex flex-row gap-2.5 items-center justify-start w-[520px] h-[60px] text-_500 text-left "
                                           style={{font: "400 15px/150% 'Noto Sans', sans-serif"}}
                                           placeholder={"사명"}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start h-[60px] w-full">
                                <div className={'ml-[84px] mt-[69px]'}>
                                    <input type={'text'}
                                           className="bg-white rounded-[5px] border-solid border-_400 border pt-5 pr-2.5 pb-5 pl-2.5 flex flex-row gap-2.5 items-center justify-start w-[146px] h-[60px] text-_500 text-left "
                                           style={{font: "400 15px/150% 'Noto Sans', sans-serif"}}
                                           placeholder={"기간 입력"}
                                    />
                                </div>
                                <div className={'mt-[85px] pl-[10px] pr-[10px]'}>
                                    <div className="text-[#292f36] text-left relative flex items-center justify-start" style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}>
                                        ~ </div>
                                </div>
                                <div className={'mt-[69px]'}>
                                    <input type={'text'}
                                           className="bg-white rounded-[5px] border-solid border-_400 border pt-5 pr-2.5 pb-5 pl-2.5 flex flex-row gap-2.5 items-center justify-start w-[166px] h-[60px] text-_500 text-left "
                                           style={{font: "400 15px/150% 'Noto Sans', sans-serif"}}
                                           placeholder={"기간 입력"}
                                    />
                                </div>
                                <div className={'ml-[30px]'}></div>
                                <div className={'mt-[69px]'}>
                                    <input type={'text'}
                                           className="bg-white rounded-[5px] border-solid border-_400 border pt-5 pr-2.5 pb-5 pl-2.5 flex flex-row gap-2.5 items-center justify-start w-[520px] h-[60px] text-_500 text-left "
                                           style={{font: "400 15px/150% 'Noto Sans', sans-serif"}}
                                           placeholder={"사명"}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={'mt-[100px] pl-[88px] flex w-full'}>
                            <div className="flex flex-row gap-[5px] items-start justify-start">
                                <div
                                    className="text-_900 text-left flex items-center justify-start w-[45px]"
                                    style={{ font: "400 16px/150% 'Noto Sans', sans-serif" }}
                                >
                                    신앙관{" "}
                                </div>
                                <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center shrink-0 w-6 h-6 ">
                                    <div
                                        className="text-[#e82121] text-center flex items-center justify-center"
                                        style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                                    >
                                        *{" "}
                                    </div>
                                </div>
                            </div>
                            {/*<div className={'mb-[60px]'}></div>*/}
                            <div className={'w-full flex ml-[10px]'}>
                            <textarea
                                className={'bg-white rounded-[5px] border-solid border-_400 border pt-5 pr-2.5 pb-5 pl-2.5 flex flex-row gap-2.5 items-center justify-start w-[892px] h-[192px]'}/>
                            </div>
                        </div>

                        <div className={'mb-[60px]'}></div>
                    </div>
                </div>

                <div className={'mb-[120px]'}></div>
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
                    <div className={'w-[20px]'}></div>
                    <button
                        className="hover:bg-primary2 hover:text-white w-[180px] h-[40px] bg-_200 rounded-[20px] gap-0  text-gray-500 text-center top-[calc(50%_-_10px)] flex items-center justify-center"
                        style={{
                            font: "var(--m-3-label-large, 500 14px/20px 'Roboto', sans-serif)",
                        }}
                        onClick={handleNextTab}
                    >
                        임시저장{" "}
                    </button>
                    <div className={'w-[20px]'}></div>
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
                <div className={'mb-[60px]'}></div>
            </div>
        </div>
    );

}

export default Tab4KnowledgePropertyInfo;