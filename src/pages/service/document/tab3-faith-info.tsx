import {NextPage} from "next";
import React, {useRef, useState} from "react";
import AddressSearch from "@/pages/config/daum-post";
import {heightList} from "@/pages/data/height";
import {weightList} from "@/pages/data/weight";
import {bodyTypeList} from "@/pages/data/body-type";
import {helthStatusList} from "@/pages/data/helth-status";
import {educationalTypeList} from "@/pages/data/educational-type";
import generateYear from "@/pages/common/function/generate-year";

type ActivedTab = {
    activedTab: number,
    setActivedTab: React.Dispatch<React.SetStateAction<number>>
}

interface AddressInfo {
    zonecode: string;
    address: string;
}

const Tab3FaithInfo: NextPage<ActivedTab> = ({activedTab, setActivedTab}) => {
    const [showPopup, setShowPopup] = useState(false);
    const [address, setAddress] = useState<AddressInfo | null>(null);

    const handleOpenPopup = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handleNextTab = () => {
        setActivedTab(2);
    }


    return (
        <div className={'bg-whitesmoke w-full'}>
            <AddressSearch show={showPopup} onClose={handleClosePopup} address={address} setAddress={setAddress}/>
            <div className={'bg-white w-full flex flex-col items-center justify-center'}>
                <div className={'w-[1200px] h-[1000px] bg-back-select'}>
                    <div id={'title'}
                         className="w-full h-11 text-center text-[35px] text-darkslategray font-noto-sans m-[46px]">
                        <div className="">신앙정보</div>
                    </div>
                    <div id={'content'} className="w-full flex flex-col pl-[88px] pt-[33px] ">
                        <div className={'w-full flex justify-end pr-[35.85px]'}>
                            <div className={'w-[362px]'}>
                                <div className={'w-full flex flex-row justify-center items-center'}>
                                    <div className="text-[#e82121] text-left w-3" style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}>
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
                        <div className={'mb-[77px]'}></div>
                        <div className={'w-full flex flex-row'}>
                            <div
                                className="p-2.5 flex flex-col gap-2.5 items-center justify-center shrink-0 w-6 h-6">
                                <div
                                    className="text-[#e82121] text-center flex items-center justify-center"
                                    style={{font: "400 13px/14.95px 'Noto Sans', sans-serif"}}
                                >
                                    *{" "}
                                </div>
                            </div>
                            <div
                                className="text-_600 text-left"
                                style={{font: "400 15px/24px 'Noto Sans', sans-serif"}}
                            >
                                자기를 한마디로 소개해 보세요{" "}
                            </div>
                        </div>
                        <div className={'w-full mt-[10px]'}>
                            <div className="border-solid border-0 border-_900 border-b w-[1024px] h-[45px] p-0">
                                <input
                                    className="text-_400 text-left p-0  w-[1024px] h-[40px] border-0  border-solid border-_900 bg-transparent"
                                    style={{font: "400 22px/150% 'Jost', sans-serif"}}
                                    placeholder={'자기를 한마디로 소개해보세요 짝꿍이 찾는 중요한 키워드 입니다.'}
                                />
                            </div>
                        </div>
                        <div className={'mb-[40px]'}>
                        </div>
                        <div className={'mt-[39px]'}></div>
                        <div className={'w-full flex flex-row mb-[20px]'}>
                            <div className="text-primary2 text-left "
                                 style={{font: "700 36px/150% 'Noto Sans', sans-serif"}}>
                                프로필 이미지
                            </div>
                            <div className={'mr-[30px]'}></div>
                            <div className="text-_800 text-left pt-[15px]"
                                 style={{font: "400 14px/150% 'Noto Sans', sans-serif"}}>
                                나를 어필하기 위해서 다양한 모습을 넣어주세요
                            </div>
                        </div>
                        <div className={'w-full flex flex-row'}>
                            <div className="w-[120px] h-[151px]">
                                <div
                                    className="bg-white rounded-sm border-solid border-_200 border w-[120px] h-[120px] flex justify-center items-center">
                                    <svg
                                        className=" overflow-visible"
                                        style={{}}
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_1387_10701)">
                                            <path
                                                d="M5 12H19"
                                                stroke="#BFBFBF"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12 19V5"
                                                stroke="#BFBFBF"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1387_10701">
                                                <rect width="24" height="24" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>

                                <div
                                    className="text-_400 text-center"
                                    style={{font: "400 16px/220% 'Jost', sans-serif"}}
                                >
                                    프로필 사진추가{" "}
                                </div>
                            </div>
                            <div className={'mr-[10px]'}></div>
                            <div className={'w-full flex items-end'}>
                                <div className="text-infomation text-left"
                                     style={{font: "400 14px/150% 'Noto Sans', sans-serif"}}>
                                <span>
                                    <span className="span">권장크기 : 1000x1000 px<br/></span>
                                    <span className="span2">      추가 이미지는 최대한 4개까지 설정할수 있으며 jpg, jpeg, gif, png, bmp 형식의 이미지만 등록가능하고 1파일당 20MB까지 첨부 가능합니다.</span>
                                </span>
                                </div>
                            </div>
                        </div>
                        <div className={'mt-[20px]'}></div>
                        <div className={'w-full flex flex-row'}>
                            <div className="w-60 h-[270px] flex flex-col justify-center justify-items-center mr-[21px]">
                                <div
                                    className="bg-white rounded-sm border-solid border-primary2 border w-60 h-60 flex justify-center items-center">
                                    <svg
                                        className=" overflow-visible"
                                        style={{}}
                                        width="45"
                                        height="45"
                                        viewBox="0 0 45 45"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_1387_13803)">
                                            <path
                                                d="M35.8312 38.6249C32.1375 36.9561 28.7062 34.7436 25.65 32.0624L25.1625 31.6874C21.3187 28.6124 17.9625 25.9686 14.5125 26.2124C11.175 26.7561 8.08125 28.3124 5.625 30.6561"
                                                stroke="#BFBFBF"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M25.6309 32.0627C27.4684 30.0002 29.9434 28.594 32.6621 28.069C34.7996 27.919 36.8997 29.494 39.2809 31.3877"
                                                stroke="#BFBFBF"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M28.0703 19.7812C30.1516 19.7812 31.8203 18.0938 31.8203 16.0312C31.8203 13.9687 30.1328 12.2812 28.0703 12.2812C26.0078 12.2812 24.3203 13.9687 24.3203 16.0312C24.3203 18.0938 26.0078 19.7812 28.0703 19.7812Z"
                                                stroke="#BFBFBF"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M33.3188 5.625H11.6812C8.34371 5.625 5.625 8.34377 5.625 11.6813V33.3187C5.625 36.6562 8.34371 39.375 11.6812 39.375H33.3188C36.6563 39.375 39.375 36.6562 39.375 33.3187V11.6813C39.375 8.34377 36.6563 5.625 33.3188 5.625Z"
                                                stroke="#BFBFBF"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1387_13803">
                                                <rect width="45" height="45" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className={"w-full flex justify-center"}>
                                    <div
                                        className="text-primary-2 text-center w-[108px] h-[30px]"
                                        style={{font: "700 16px/220% 'Jost', sans-serif"}}
                                    >
                                        대표이미지{" "}
                                    </div>
                                </div>
                            </div>
                            <div className="w-60 h-[270px] flex flex-col justify-center justify-items-center mr-[21px]">
                                <div
                                    className="bg-white rounded-sm border-solid border-_200 border w-60 h-60 flex justify-center items-center">
                                    <svg
                                        className=" overflow-visible"
                                        style={{}}
                                        width="45"
                                        height="45"
                                        viewBox="0 0 45 45"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_1387_13803)">
                                            <path
                                                d="M35.8312 38.6249C32.1375 36.9561 28.7062 34.7436 25.65 32.0624L25.1625 31.6874C21.3187 28.6124 17.9625 25.9686 14.5125 26.2124C11.175 26.7561 8.08125 28.3124 5.625 30.6561"
                                                stroke="#BFBFBF"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M25.6309 32.0627C27.4684 30.0002 29.9434 28.594 32.6621 28.069C34.7996 27.919 36.8997 29.494 39.2809 31.3877"
                                                stroke="#BFBFBF"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M28.0703 19.7812C30.1516 19.7812 31.8203 18.0938 31.8203 16.0312C31.8203 13.9687 30.1328 12.2812 28.0703 12.2812C26.0078 12.2812 24.3203 13.9687 24.3203 16.0312C24.3203 18.0938 26.0078 19.7812 28.0703 19.7812Z"
                                                stroke="#BFBFBF"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M33.3188 5.625H11.6812C8.34371 5.625 5.625 8.34377 5.625 11.6813V33.3187C5.625 36.6562 8.34371 39.375 11.6812 39.375H33.3188C36.6563 39.375 39.375 36.6562 39.375 33.3187V11.6813C39.375 8.34377 36.6563 5.625 33.3188 5.625Z"
                                                stroke="#BFBFBF"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1387_13803">
                                                <rect width="45" height="45" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className={"w-full flex justify-center"}>
                                    <div
                                        className="text-primary-2 text-center w-[108px] h-[30px]"
                                        style={{font: "700 16px/220% 'Jost', sans-serif"}}
                                    >
                                        대표이미지{" "}
                                    </div>
                                </div>
                            </div>
                            <div className="w-60 h-[270px] flex flex-col justify-center justify-items-center mr-[21px]">
                                <div
                                    className="bg-white rounded-sm border-solid border-_200 border w-60 h-60 flex justify-center items-center">
                                    <svg
                                        className=" overflow-visible"
                                        style={{}}
                                        width="45"
                                        height="45"
                                        viewBox="0 0 45 45"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_1387_13803)">
                                            <path
                                                d="M35.8312 38.6249C32.1375 36.9561 28.7062 34.7436 25.65 32.0624L25.1625 31.6874C21.3187 28.6124 17.9625 25.9686 14.5125 26.2124C11.175 26.7561 8.08125 28.3124 5.625 30.6561"
                                                stroke="#BFBFBF"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M25.6309 32.0627C27.4684 30.0002 29.9434 28.594 32.6621 28.069C34.7996 27.919 36.8997 29.494 39.2809 31.3877"
                                                stroke="#BFBFBF"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M28.0703 19.7812C30.1516 19.7812 31.8203 18.0938 31.8203 16.0312C31.8203 13.9687 30.1328 12.2812 28.0703 12.2812C26.0078 12.2812 24.3203 13.9687 24.3203 16.0312C24.3203 18.0938 26.0078 19.7812 28.0703 19.7812Z"
                                                stroke="#BFBFBF"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M33.3188 5.625H11.6812C8.34371 5.625 5.625 8.34377 5.625 11.6813V33.3187C5.625 36.6562 8.34371 39.375 11.6812 39.375H33.3188C36.6563 39.375 39.375 36.6562 39.375 33.3187V11.6813C39.375 8.34377 36.6563 5.625 33.3188 5.625Z"
                                                stroke="#BFBFBF"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1387_13803">
                                                <rect width="45" height="45" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className={"w-full flex justify-center"}>
                                    <div
                                        className="text-primary-2 text-center w-[108px] h-[30px]"
                                        style={{font: "700 16px/220% 'Jost', sans-serif"}}
                                    >
                                        대표이미지{" "}
                                    </div>
                                </div>
                            </div>
                            <div className="w-60 h-[270px] flex flex-col justify-center justify-items-center mr-[21px]">
                                <div
                                    className="bg-white rounded-sm border-solid border-_200 border w-60 h-60 flex justify-center items-center">
                                    <svg
                                        className=" overflow-visible"
                                        style={{}}
                                        width="45"
                                        height="45"
                                        viewBox="0 0 45 45"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_1387_13803)">
                                            <path
                                                d="M35.8312 38.6249C32.1375 36.9561 28.7062 34.7436 25.65 32.0624L25.1625 31.6874C21.3187 28.6124 17.9625 25.9686 14.5125 26.2124C11.175 26.7561 8.08125 28.3124 5.625 30.6561"
                                                stroke="#BFBFBF"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M25.6309 32.0627C27.4684 30.0002 29.9434 28.594 32.6621 28.069C34.7996 27.919 36.8997 29.494 39.2809 31.3877"
                                                stroke="#BFBFBF"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M28.0703 19.7812C30.1516 19.7812 31.8203 18.0938 31.8203 16.0312C31.8203 13.9687 30.1328 12.2812 28.0703 12.2812C26.0078 12.2812 24.3203 13.9687 24.3203 16.0312C24.3203 18.0938 26.0078 19.7812 28.0703 19.7812Z"
                                                stroke="#BFBFBF"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M33.3188 5.625H11.6812C8.34371 5.625 5.625 8.34377 5.625 11.6813V33.3187C5.625 36.6562 8.34371 39.375 11.6812 39.375H33.3188C36.6563 39.375 39.375 36.6562 39.375 33.3187V11.6813C39.375 8.34377 36.6563 5.625 33.3188 5.625Z"
                                                stroke="#BFBFBF"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1387_13803">
                                                <rect width="45" height="45" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className={"w-full flex justify-center"}>
                                    <div
                                        className="text-primary-2 text-center w-[108px] h-[30px]"
                                        style={{font: "700 16px/220% 'Jost', sans-serif"}}
                                    >
                                        대표이미지{" "}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'mb-[70px]'}></div>
                <div className="flex flex-col gap-[15px] items-start justify-start h-[1018px]">
                    <div className="flex flex-row gap-2.5 items-start justify-start shrink-0">
                        <div
                            className="text-primary2 text-left"
                            style={{font: "700 22px/150% 'Noto Sans', sans-serif"}}
                        >
                            인적사항{" "}
                        </div>
                    </div>
                    <div className="bg-backselect flex-1 w-[1200px]">
                        <div className={'mt-[60px] ml-[88px] flex'}>
                            <div className="text-primary2 text-left w-[191px] mr-[34px]"
                                 style={{font: "600 24px/200% 'Noto Sans', sans-serif"}}>
                                고유번호
                            </div>
                            <div
                                className="text-[#292f36] text-left w-[260px] flex items-center justify-start"
                                style={{font: "500 24px/200% 'Noto Sans', sans-serif"}}
                            >
                                JU21312312{" "}
                            </div>
                        </div>
                        <div className={'mt-[30px]'}></div>
                        <div className={'pl-[88px] flex'}>
                            <div className="text-primary1 text-left w-[191px]"
                                 style={{font: "600 16px/200% 'Noto Sans', sans-serif"}}>
                                본명
                            </div>
                            <div className={'mr-[10px]'}></div>
                            <div
                                className="text-_900 text-left w-[260px] flex items-center justify-start"
                                style={{font: "500 16px/200% 'Noto Sans', sans-serif"}}
                            >
                                홍길동
                            </div>
                        </div>
                        <div className={'pl-[88px] flex'}>
                            <div className="text-primary1 text-left w-[191px]"
                                 style={{font: "600 16px/200% 'Noto Sans', sans-serif"}}>
                                섭리명
                            </div>
                            <div className={'mr-[10px]'}></div>
                            <div
                                className="text-_900 text-left w-[260px] flex items-center justify-start"
                                style={{font: "500 16px/200% 'Noto Sans', sans-serif"}}
                            >
                                홍길동
                            </div>
                        </div>
                        <div className={'pl-[88px] flex'}>
                            <div className="text-primary1 text-left w-[191px]"
                                 style={{font: "600 16px/200% 'Noto Sans', sans-serif"}}>
                                생년월일
                            </div>
                            <div className={'mr-[10px]'}></div>
                            <div
                                className="text-_900 text-left w-[260px] flex items-center justify-start"
                                style={{font: "500 16px/200% 'Noto Sans', sans-serif"}}
                            >
                                1992년 7월 15일 / 24세
                            </div>
                        </div>
                        <div className={'pl-[88px] flex'}>
                            <div className="text-primary1 text-left w-[191px]"
                                 style={{font: "600 16px/200% 'Noto Sans', sans-serif"}}>
                                성별
                            </div>
                            <div className={'mr-[10px]'}></div>
                            <div
                                className="text-_900 text-left w-[260px] flex items-center justify-start"
                                style={{font: "500 16px/200% 'Noto Sans', sans-serif"}}
                            >
                                남자
                            </div>
                        </div>
                        <div className={'pl-[88px] flex'}>
                            <div className="text-primary1 text-left w-[191px]"
                                 style={{font: "600 16px/200% 'Noto Sans', sans-serif"}}>
                                휴대폰
                            </div>
                            <div className={'mr-[10px]'}></div>
                            <div
                                className="text-_900 text-left w-[260px] flex items-center justify-start"
                                style={{font: "500 16px/200% 'Noto Sans', sans-serif"}}
                            >
                                <div className="bg-_200 rounded-[5px] w-[180px] h-[30px] pl-[9px] "
                                     style={{font: "500 16px/200% 'Noto Sans', sans-serif"}}>
                                    010-0000-0000
                                </div>
                            </div>
                        </div>
                        <div className={'pl-[88px] flex'}>
                            <div className="text-primary1 text-left w-[191px]"
                                 style={{font: "600 16px/200% 'Noto Sans', sans-serif"}}>
                                이메일
                            </div>
                            <div className={'mr-[10px]'}></div>
                            <div
                                className="text-_900 text-left w-[260px] flex items-center justify-start"
                                style={{font: "500 16px/200% 'Noto Sans', sans-serif"}}
                            >
                                <div className="bg-_200 rounded-[5px] w-[180px] h-[30px] pl-[9px] "
                                     style={{font: "500 16px/200% 'Noto Sans', sans-serif"}}>
                                    dfdfd@naver.com
                                </div>
                            </div>
                        </div>
                        <div className={'mt-[40px]'}></div>
                        <div className={'w-full flex justify-center'}>
                            <div
                                className="border-dashed border-_400 border-t border-r-[0] border-b-[0] border-l-[0] w-[1134px] h-0"></div>
                        </div>
                        <div className={'mt-[40px]'}></div>
                        <div className="w-[527px] h-[60px] flex ml-[88px]">
                            <div className="flex flex-row gap-[5px] items-center justify-start">
                                <div
                                    className="text-_900 text-left flex items-center justify-start"
                                    style={{font: "400 16px/150% 'Noto Sans', sans-serif"}}
                                >
                                    주소{" "}
                                </div>
                                <div
                                    className="p-2.5 flex flex-col gap-2.5 items-center justify-center shrink-0 w-6 h-6 ">
                                    <div
                                        className="text-[#e82121] text-center flex items-center justify-center"
                                        style={{font: "400 13px/14.95px 'Noto Sans', sans-serif"}}
                                    >
                                        *{" "}
                                    </div>
                                </div>
                            </div>
                            <div className="w-fit flex flex-col">
                                <div className={"w-full flex mb-1"}>
                                    <input
                                        type={'text'}
                                        className={'bg-_200 rounded-[5px] border-solid border-_400 border pr-2.5 pl-2.5 flex flex-row gap-2.5 items-center justify-start text-_500 text-left w-[300px] h-[60px] '}
                                        style={{font: "400 15px/150% 'Noto Sans', sans-serif"}}
                                        placeholder={"우편번호 검색"}
                                        readOnly={true}
                                        value={address?.zonecode}
                                    />
                                    <div className="flex items-center justify-center" onClick={handleOpenPopup}>
                                        <svg
                                            className="overflow-visible"
                                            style={{}}
                                            width="24"
                                            height="24"
                                        ></svg>

                                        <svg
                                            className=" overflow-visible"
                                            style={{}}
                                            width="18"
                                            height="18"
                                            viewBox="0 0 18 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M8.74 17.48C13.567 17.48 17.48 13.567 17.48 8.74C17.48 3.91303 13.567 0 8.74 0C3.91303 0 0 3.91303 0 8.74C0 13.567 3.91303 17.48 8.74 17.48Z"
                                                stroke="#232527"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M15.0293 15.0303L17.9993 18.0003"
                                                stroke="#232527"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className={'w-full mb-1'}>
                                    <input
                                        type={'text'}
                                        className={'bg-_200 rounded-[5px] border-solid border-_400 border pr-2.5 pl-2.5 flex flex-row gap-2.5 items-center justify-start text-_500 text-left w-[426px] h-[60px] '}
                                        style={{font: "400 15px/150% 'Noto Sans', sans-serif"}}
                                        placeholder={"주소 입력"}
                                        readOnly={true}
                                        value={address?.address}
                                    />
                                </div>
                                <div className={'w-full'}>
                                    <input
                                        type={'text'}
                                        className={'bg-_200 rounded-[5px] border-solid border-_400 border pr-2.5 pl-2.5 flex flex-row gap-2.5 items-center justify-start text-_500 text-left w-[426px] h-[60px]'}
                                        style={{font: "400 15px/150% 'Noto Sans', sans-serif"}}
                                        placeholder={"상세주소 입력"}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={'mb-[180px]'}></div>
                        <div className={'w-full flex ml-[68px]'}>
                            <div className="text-_900 text-left flex items-center justify-start "
                                 style={{font: "400 16px/150% 'Noto Sans', sans-serif"}}>
                                신장(키)
                            </div>
                            <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center shrink-0">
                                <div
                                    className="text-[#e82121] text-center flex items-center justify-center"
                                    style={{font: "400 13px/14.95px 'Noto Sans', sans-serif"}}
                                >
                                    *{" "}
                                </div>
                            </div>
                            <div className={'mr-[10px]'}></div>
                            <div className={'w-[166px] h-[60px] flex items-center'}>
                                <select className={'h-[60px]'}>
                                    <option>선택</option>
                                    {heightList.map((item, index) => (
                                        <option key={index} value={item.code}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div
                                className="text-[#292f36] text-left flex items-center justify-start ml-[10px]"
                                style={{font: "400 16px/150% 'Noto Sans', sans-serif"}}
                            >
                                cm{" "}
                            </div>
                            <div className={'mr-[80px]'}></div>
                            <div className="text-_900 text-left flex items-center justify-start "
                                 style={{font: "400 16px/150% 'Noto Sans', sans-serif"}}>
                                체중
                            </div>
                            <div className={'mr-[10px]'}></div>
                            <div className={'w-[166px] h-[60px] flex items-center'}>
                                <select className={'bg-[#D9D9D9] h-[60px]'}>
                                    <option>선택</option>
                                    {weightList.map((item, index) => (
                                        <option key={index} value={item.code}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div
                                className="text-[#292f36] text-left flex items-center justify-start ml-[10px]"
                                style={{font: "400 16px/150% 'Noto Sans', sans-serif"}}
                            >
                                kg{" "}
                            </div>
                            <div className={'mr-[80px]'}></div>
                            <div className="text-_900 text-left flex items-center justify-start "
                                 style={{font: "400 16px/150% 'Noto Sans', sans-serif"}}>
                                체형
                            </div>
                            <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center shrink-0">
                                <div
                                    className="text-[#e82121] text-center flex items-center justify-center"
                                    style={{font: "400 13px/14.95px 'Noto Sans', sans-serif"}}
                                >
                                    *{" "}
                                </div>
                            </div>
                            <div className={'mr-[10px]'}></div>
                            <div className={'w-[166px] h-[60px] flex items-center'}>
                                <select className={'h-[60px]'}>
                                    <option>선택</option>
                                    {bodyTypeList.map((item, index) => (
                                        <option key={index} value={item.code}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className={'mb-[40px]'}></div>
                        <div className={'w-full flex ml-[68px]'}>
                            <div className="text-_900 text-left flex items-center justify-start "
                                 style={{font: "400 16px/150% 'Noto Sans', sans-serif"}}>
                                건강상태
                            </div>
                            <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center shrink-0">
                                <div
                                    className="text-[#e82121] text-center flex items-center justify-center"
                                    style={{font: "400 13px/14.95px 'Noto Sans', sans-serif"}}
                                >
                                    *{" "}
                                </div>
                            </div>
                            <div className={'mr-[10px]'}></div>
                            <div className={'w-[166px] h-[60px] flex items-center'}>
                                <select className={'h-[60px]'}>
                                    <option>선택</option>
                                    {helthStatusList.map((item, index) => (
                                        <option key={index} value={item.code}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className={'ml-[48px]'}>
                                <input type={'text'}
                                       className="bg-white rounded-[5px] border-solid border-_400 border pt-5 pr-2.5 pb-5 pl-2.5 flex flex-row gap-2.5 items-center justify-start w-[234px] h-[60px] text-_500 text-left "
                                       style={{font: "400 15px/150% 'Noto Sans', sans-serif"}}
                                       placeholder={"병원"}
                                />
                            </div>
                            <div className={'ml-[48px] w-[426px]'}>
                                <input type={'text'}
                                       className="bg-white rounded-[5px] border-solid border-_400 border pt-5 pr-2.5 pb-5 pl-2.5 flex flex-row gap-2.5 items-center justify-start w-full h-[60px] text-_500 text-left "
                                       style={{font: "400 15px/150% 'Noto Sans', sans-serif"}}
                                       placeholder={"진단명"}
                                />
                            </div>
                        </div>
                        <div className={'mb-[40px]'}></div>
                        <div className={'w-full flex ml-[68px]'}>
                            <div className="text-_900 text-left flex items-center justify-start "
                                 style={{font: "400 16px/150% 'Noto Sans', sans-serif"}}>
                                병역
                            </div>
                            <div className={'mr-[63px]'}></div>
                            <div className={'w-[166px] h-[60px] flex items-center'}>
                                <select className={'h-[60px]'}>
                                    <option>선택</option>
                                    {weightList.map((item, index) => (
                                        <option key={index} value={item.code}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className={'mr-[48px]'}></div>
                            <div className={'w-[728px]'}>
                                <input type={'text'}
                                       className="bg-white rounded-[5px] border-solid border-_400 border pt-5 pr-2.5 pb-5 pl-2.5 flex flex-row gap-2.5 items-center justify-start w-full h-[60px] text-_500 text-left "
                                       style={{font: "400 15px/150% 'Noto Sans', sans-serif"}}
                                       placeholder={"면제사유"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'mb-[50px]'}></div>
                <div className={'flex flex-col gap-[15px] items-start justify-start w-[1200px] h-[588px]'}>
                    <div className="flex flex-row gap-2.5 items-start justify-start shrink-0">
                        <div
                            className="text-primary2 text-left"
                            style={{font: "700 22px/150% 'Noto Sans', sans-serif"}}
                        >
                            학력사항{" "}
                        </div>
                    </div>
                    <div className="bg-backselect flex-1 flex-col w-full">
                        <div className={'mb-[60px]'}></div>
                        <div className={'w-full flex ml-[88px]'}>
                            <div className="flex flex-row items-start justify-start h-[60px] w-full">
                                <div
                                    className="text-_900 text-left flex items-center justify-center h-[60px]"
                                    style={{font: "400 16px/150% 'Noto Sans', sans-serif"}}
                                >
                                    고등학교{" "}
                                </div>
                                <div className="h-[60px] flex flex-col items-center justify-center shrink-0 ml-[10px]">
                                    <div
                                        className="text-[#e82121] text-center flex items-center justify-center h-7"
                                        style={{font: "400 13px/14.95px 'Noto Sans', sans-serif"}}
                                    >
                                        *{" "}
                                    </div>
                                </div>
                                <div className={'ml-[11px]'}>
                                    <input type={'text'}
                                           className="bg-white rounded-[5px] border-solid border-_400 border pt-5 pr-2.5 pb-5 pl-2.5 flex flex-row gap-2.5 items-center justify-start w-[180px] h-[60px] text-_500 text-left "
                                           style={{font: "400 15px/150% 'Noto Sans', sans-serif"}}
                                           placeholder={"고등학교"}
                                    />
                                </div>
                                <div className={'ml-[240px]'}></div>
                                <div className={''}>
                                    <select className={'w-[140px] h-[60px] text-_500'}>
                                        <option>졸업구분</option>
                                        {educationalTypeList.map((item, index) => (
                                            <option key={index} value={item.code}>{item.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className={'ml-[20px]'}></div>
                                <div>
                                    <div className={''}>
                                        <select className={'w-[140px] h-[60px] text-_500'}>
                                            <option>입학연도</option>
                                            {generateYear(1960).map((item, index) => (
                                                <option key={index} value={item}>{item}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className={'ml-[20px]'}></div>
                                <div>
                                    <div className={''}>
                                        <select className={'w-[140px] h-[60px] text-_500'}>
                                            <option>졸업연도</option>
                                            {generateYear(1960).map((item, index) => (
                                                <option key={index} value={item}>{item}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className={'w-[130px] h-[60px] flex justify-end items-center '}>
                                    <span className="bg-chk">
                                            <input type={'checkbox'} name={"finalYear"} id={'finalYear1'}/>
                                        <label
                                            htmlFor="finalYear1">최종학력{" "} </label>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={'mb-[20px]'}></div>
                        <div className={'w-full flex ml-[88px]'}>
                            <div className="flex flex-row items-start justify-start h-[60px] w-full">
                                <div
                                    className="text-[#292f36] text-left flex items-center justify-center h-[60px]"
                                    style={{font: "400 16px/150% 'Noto Sans', sans-serif"}}
                                >
                                    대학교
                                </div>
                                <div className={'ml-[40px]'}>
                                    <input type={'text'}
                                           className={'bg-white rounded-[5px] border-solid border-_400 border pt-5 pr-2.5 pb-5 pl-2.5 flex flex-row gap-2.5 items-center justify-start w-[180px] h-[60px] text-_500 text-left'}
                                           placeholder={'대학교'}/>
                                </div>
                                <div className={'ml-[20px]'}></div>
                                <div className={''}>
                                    <input type={'text'}
                                           className="bg-white rounded-[5px] border-solid border-_400 border pt-5 pr-2.5 pb-5 pl-2.5 flex flex-row gap-2.5 items-center justify-start w-[200px] h-[60px] text-_500 text-left"
                                           style={{font: "400 15px/150% 'Noto Sans', sans-serif"}}
                                           placeholder={'전공입력'}
                                    />
                                </div>
                                <div className={'ml-[20px]'}></div>
                                <div className={''}>
                                    <select className={'w-[140px] h-[60px] text-_500'}>
                                        <option>졸업구분</option>
                                        {educationalTypeList.map((item, index) => (
                                            <option key={index} value={item.code}>{item.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className={'ml-[20px]'}></div>
                                <div>
                                    <div className={''}>
                                        <select className={'w-[140px] h-[60px] text-_500'}>
                                            <option>입학연도</option>
                                            {generateYear(1960).map((item, index) => (
                                                <option key={index} value={item}>{item}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className={'ml-[20px]'}></div>
                                <div>
                                    <div className={''}>
                                        <select className={'w-[140px] h-[60px] text-_500'}>
                                            <option>졸업연도</option>
                                            {generateYear(1960).map((item, index) => (
                                                <option key={index} value={item}>{item}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className={'w-[130px] h-[60px] flex justify-end items-center '}>
                                    <span className="bg-chk">
                                            <input type={'checkbox'} name={"finalYear"} id={'finalYear1'}/>
                                        <label
                                            htmlFor="finalYear1">최종학력{" "} </label>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={'mb-[20px]'}></div>
                        <div className={'w-full flex ml-[88px]'}>
                            <div className="flex flex-row items-start justify-start h-[60px] w-full">
                                <div
                                    className="text-[#292f36] text-left flex items-center justify-center h-[60px]"
                                    style={{font: "400 16px/150% 'Noto Sans', sans-serif"}}
                                >
                                    대학원
                                </div>
                                <div className={'ml-[40px]'}>
                                    <input type={'text'}
                                           className={'bg-white rounded-[5px] border-solid border-_400 border pt-5 pr-2.5 pb-5 pl-2.5 flex flex-row gap-2.5 items-center justify-start w-[180px] h-[60px] text-_500 text-left'}
                                           placeholder={'대학원(석사)'}/>
                                </div>
                                <div className={'ml-[20px]'}></div>
                                <div className={''}>
                                    <input type={'text'}
                                           className="bg-white rounded-[5px] border-solid border-_400 border pt-5 pr-2.5 pb-5 pl-2.5 flex flex-row gap-2.5 items-center justify-start w-[200px] h-[60px] text-_500 text-left"
                                           style={{font: "400 15px/150% 'Noto Sans', sans-serif"}}
                                           placeholder={'전공입력'}
                                    />
                                </div>
                                <div className={'ml-[20px]'}></div>
                                <div className={''}>
                                    <select className={'w-[140px] h-[60px] text-_500'}>
                                        <option>졸업구분</option>
                                        {educationalTypeList.map((item, index) => (
                                            <option key={index} value={item.code}>{item.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className={'ml-[20px]'}></div>
                                <div>
                                    <div className={''}>
                                        <select className={'w-[140px] h-[60px] text-_500'}>
                                            <option>입학연도</option>
                                            {generateYear(1960).map((item, index) => (
                                                <option key={index} value={item}>{item}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className={'ml-[20px]'}></div>
                                <div>
                                    <div className={''}>
                                        <select className={'w-[140px] h-[60px] text-_500'}>
                                            <option>졸업연도</option>
                                            {generateYear(1960).map((item, index) => (
                                                <option key={index} value={item}>{item}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className={'w-[130px] h-[60px] flex justify-end items-center '}>
                                    <span className="bg-chk">
                                            <input type={'checkbox'} name={"finalYear"} id={'finalYear1'}/>
                                        <label
                                            htmlFor="finalYear1">최종학력{" "} </label>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={'mb-[20px]'}></div>
                        <div className={'w-full flex ml-[88px]'}>
                            <div className="flex flex-row items-start justify-start h-[60px] w-full">
                                <div
                                    className="text-[#292f36] text-left flex items-center justify-center h-[60px]"
                                    style={{font: "400 16px/150% 'Noto Sans', sans-serif"}}
                                >
                                    대학원
                                </div>
                                <div className={'ml-[40px]'}>
                                    <input type={'text'}
                                           className={'bg-white rounded-[5px] border-solid border-_400 border pt-5 pr-2.5 pb-5 pl-2.5 flex flex-row gap-2.5 items-center justify-start w-[180px] h-[60px] text-_500 text-left'}
                                           placeholder={'대학원(박사)'}/>
                                </div>
                                <div className={'ml-[20px]'}></div>
                                <div className={''}>
                                    <input type={'text'}
                                           className="bg-white rounded-[5px] border-solid border-_400 border pt-5 pr-2.5 pb-5 pl-2.5 flex flex-row gap-2.5 items-center justify-start w-[200px] h-[60px] text-_500 text-left"
                                           style={{font: "400 15px/150% 'Noto Sans', sans-serif"}}
                                           placeholder={'전공입력'}
                                    />
                                </div>
                                <div className={'ml-[20px]'}></div>
                                <div className={''}>
                                    <select className={'w-[140px] h-[60px] text-_500'}>
                                        <option>졸업구분</option>
                                        {educationalTypeList.map((item, index) => (
                                            <option key={index} value={item.code}>{item.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className={'ml-[20px]'}></div>
                                <div>
                                    <div className={''}>
                                        <select className={'w-[140px] h-[60px] text-_500'}>
                                            <option>입학연도</option>
                                            {generateYear(1960).map((item, index) => (
                                                <option key={index} value={item}>{item}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className={'ml-[20px]'}></div>
                                <div>
                                    <div className={''}>
                                        <select className={'w-[140px] h-[60px] text-_500'}>
                                            <option>졸업연도</option>
                                            {generateYear(1960).map((item, index) => (
                                                <option key={index} value={item}>{item}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className={'w-[130px] h-[60px] flex justify-end items-center '}>
                                    <span className="bg-chk">
                                            <input type={'checkbox'} name={"finalYear"} id={'finalYear1'}/>
                                        <label
                                            htmlFor="finalYear1">최종학력{" "} </label>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={'mb-[60px]'}></div>
                        <div className={'w-full flex ml-[88px]'}>
                            <div className="flex flex-row items-start justify-start h-[60px] w-full">
                                <div
                                    className="text-[#292f36] text-left flex items-center justify-center h-[60px]"
                                    style={{font: "400 16px/150% 'Noto Sans', sans-serif"}}
                                >
                                    기타
                                </div>
                                <div className={'ml-[54px]'}>
                                    <input type={'text'}
                                           className={'bg-white rounded-[5px] border-solid border-_400 border pt-5 pr-2.5 pb-5 pl-2.5 flex flex-row gap-2.5 items-center justify-start w-[180px] h-[60px] text-_500 text-left'}
                                           placeholder={'대학원(박사)'}/>
                                </div>
                                <div className={'ml-[20px]'}></div>
                                <div className={''}>
                                    <input type={'text'}
                                           className="bg-white rounded-[5px] border-solid border-_400 border pt-5 pr-2.5 pb-5 pl-2.5 flex flex-row gap-2.5 items-center justify-start w-[200px] h-[60px] text-_500 text-left"
                                           style={{font: "400 15px/150% 'Noto Sans', sans-serif"}}
                                           placeholder={'전공입력'}
                                    />
                                </div>
                                <div className={'ml-[20px]'}></div>
                                <div className={''}>
                                    <select className={'w-[140px] h-[60px] text-_500'}>
                                        <option>졸업구분</option>
                                        {educationalTypeList.map((item, index) => (
                                            <option key={index} value={item.code}>{item.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className={'ml-[20px]'}></div>
                                <div>
                                    <div className={''}>
                                        <select className={'w-[140px] h-[60px] text-_500'}>
                                            <option>입학연도</option>
                                            {generateYear(1960).map((item, index) => (
                                                <option key={index} value={item}>{item}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className={'ml-[20px]'}></div>
                                <div>
                                    <div className={''}>
                                        <select className={'w-[140px] h-[60px] text-_500'}>
                                            <option>졸업연도</option>
                                            {generateYear(1960).map((item, index) => (
                                                <option key={index} value={item}>{item}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className={'w-[130px] h-[60px] flex justify-end items-center '}>
                                    <span className="bg-chk">
                                            <input type={'checkbox'} name={"finalYear"} id={'finalYear1'}/>
                                        <label
                                            htmlFor="finalYear1">최종학력{" "} </label>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={'mb-[60px]'}></div>
                    </div>
                </div>
                <div className={'mb-[58px]'}></div>
                <div className={'flex flex-col gap-[15px] items-start justify-start w-[1200px] h-[378px]'}>
                    <div className="flex flex-row gap-2.5 items-start justify-start shrink-0">
                        <div
                            className="text-primary2 text-left"
                            style={{font: "700 22px/150% 'Noto Sans', sans-serif"}}
                        >
                            결혼가치관{" "}
                        </div>
                        <div className="p-2.5 flex flex-col gap-2.5 items-center justify-center shrink-0 w-6 h-6">
                            <div
                                className="text-[#e82121] text-center flex items-center justify-center"
                                style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
                            >
                                *{" "}
                            </div>
                        </div>
                    </div>
                    <div className="bg-backselect flex-1 flex-col w-full">
                        <div className={'mb-[60px]'}></div>
                        <div className={'w-full flex ml-[88px]'}>
                            <textarea className={'bg-white rounded-[5px] border-solid border-_400 border pt-5 pr-2.5 pb-5 pl-2.5 flex flex-row gap-2.5 items-center justify-start w-[1050px] h-[210px]'} />
                        </div>
                    </div>
                </div>
                <div className={'mb-[60px]'}></div>
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

export default Tab3FaithInfo;