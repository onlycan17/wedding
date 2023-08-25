import {NextPage} from "next";
import React, {useRef} from "react";

type ActivedTab = {
    activedTab: number,
    setActivedTab: React.Dispatch<React.SetStateAction<number>>
}

const Tab2BasicInfo: NextPage<ActivedTab> = ({activedTab, setActivedTab}) => {

    const handleNextTab = () => {
        setActivedTab(2);
    }
    return (
        <div className={'bg-whitesmoke w-full h-[1483px] flex justify-center'}>
            <div className={'w-[1200px] h-[1483px] bg-white'}>
                <div id={'title'}
                     className="w-full h-11 text-center text-[35px] text-darkslategray font-noto-sans m-[46px]">
                    <div className="">기본정보</div>
                </div>
                <div id={'content'} className="w-full flex flex-col pl-[88px] pt-[33px]">


                    <div className={'mb-[40px]'}>
                    </div>
                    <div className={"w-full flex flex-col items-center "}>
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
                </div>
            </div>
        </div>
    );

}

export default Tab2BasicInfo;