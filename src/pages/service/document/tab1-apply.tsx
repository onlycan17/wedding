import {NextPage} from "next";
import React, {useRef} from "react";
type ActivedTab = {
    activedTab: number,
    setActivedTab: React.Dispatch<React.SetStateAction<number>>
}

const Tab1Apply: NextPage<ActivedTab> = ({activedTab,setActivedTab}) => {
    const agree1Ref = useRef<HTMLInputElement | null>(null);
    const agree2Ref = useRef<HTMLInputElement | null>(null);
    const agree3Ref = useRef<HTMLInputElement | null>(null);
    const agree4Ref = useRef<HTMLInputElement | null>(null);
    const agreeAllRef = useRef<HTMLInputElement | null>(null);
    const [agree1, setAgree1] = React.useState(false);
    const [agree2, setAgree2] = React.useState(false);
    const [agree3, setAgree3] = React.useState(false);
    const [agree4, setAgree4] = React.useState(false);
    const handleCheck = () => {
        setAgree1(agreeAllRef.current!.checked);
        setAgree2(agreeAllRef.current!.checked);
        setAgree3(agreeAllRef.current!.checked);
        setAgree4(agreeAllRef.current!.checked);
        agree1Ref.current!.checked = agreeAllRef.current!.checked;
        agree2Ref.current!.checked = agreeAllRef.current!.checked;
        agree3Ref.current!.checked = agreeAllRef.current!.checked;
        agree4Ref.current!.checked = agreeAllRef.current!.checked;
    }
    const handleNextTab = () => {
        if (agree1 && agree2 && agree3 && agree4) {
            setActivedTab(1);
        } else {
            alert('모든 약관에 동의해야 다음 탭으로 이동할 수 있습니다.');
            return;
        }
    }
    return (
        <div className={'bg-whitesmoke w-full h-[1483px] flex justify-center'}>
            <div className={'w-[1200px] h-[1483px] bg-white'}>
                <div id={'title'}
                     className="w-full h-11 text-center text-[35px] text-darkslategray font-noto-sans m-[46px]">
                    <div className="">약관 및 동의</div>
                </div>
                <div id={'content'} className="w-full flex flex-col pl-[88px] pt-[33px]">
                    <div className={"w-full flex flex-row"}>
                        <div className={'mr-2 mb-2'}>
                            <span className="bg-chk">
								<input type="checkbox" id="agree1" name="agree1" ref={agree1Ref} onClick={() => {
                                    setAgree1(!agree1);
                                    agree1Ref.current!.checked = !agree1;
                                    if (agree1Ref.current!.checked && agree2Ref.current!.checked && agree3Ref.current!.checked && agree4Ref.current!.checked) {
                                        agreeAllRef.current!.checked = true;
                                    } else {
                                        agreeAllRef.current!.checked = false;
                                    }
                                }}/>
                                <label
                                    htmlFor="agree1">[필수] 이용약관동의 </label>
                            </span>
                        </div>
                    </div>
                    <div className={'mb-[34px]'}>
                        <div className="w-[1024px] h-40">
                            <div
                                className="bg-backselect rounded-tl-[5px] rounded-bl-[5px] w-[1024px] h-40 overflow-y-auto">
                                <div
                                    className="text-[#888888] text-left  w-[960px]"
                                    style={{font: "400 13px/20px 'Noto Sans', sans-serif"}}
                                >
                                    HSJL 서비스 이용약관
                                    <br/>제 1 장 총칙
                                    <br/>제 1 조 (목적)
                                    <br/>
                                    ①이 약관은 주식회사 에이치에스제이엘(이하 &quot;HSJL&quot;이라 합니다)과{" "}
                                    <br/>
                                    이용 고객(이하 &quot;회원&quot;이라 합니다)간에 HSJL이 제공하는 인터넷 관련 서비스(이하
                                    &quot;서비스&quot;라 합니다)를 이용함에 있어 회원과 HSJL의 권리, 의무 및 책임사항을
                                    규정함을 목적으로 합니다.
                                    <br/>
                                    ②「PC통신, 모바일통신, 스마트폰 어플리케이션 등을 이용하는 전자상거래에 대해서도
                                    그 성질에 반하지 않는 한 이 약관을 준용합니다.
                                    <br/>
                                    제 2 조 (약관의 명시, 효력 및 개정)
                                    <br/>
                                    ①HSJL은 이 약관의 내용을 회원이 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다.
                                    <br/>
                                    ②HSJL은 &quot;전자상거래 등에서의 소비자보호에 관한 법률&quot;, &quot;약관의 규제
                                    등에 관한 법률&quot;, &quot;정보통신망 이용촉진 및 정보보호 등에 관한 법률&quot;,
                                    &quot;소비자기본법&quot;, &quot;전자문서 및 전자거래기본법&quot;,
                                    &quot;전자금융거래법&quot;, &quot;전자서명법&quot;, &quot;정보통신망법&quot;,
                                    &quot;방문판매 등에 관한 법률&quot;, &quot;소비자보호법&quot; 등 관련법을 위배하지 않는
                                    범위에서 이 약관을 개정할 수 있습니다.
                                    <br/>
                                    ③HSJL은 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께
                                    그 개정약관의 적용일자 7일 전부터 적용일자 전일까지 공지합니다. 다만, 회원에게
                                    불리하게 약관 내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예기간을 두고
                                    공지합니다. 이 경우 HSJL은 개정 전 내용과 개정 후 내용을 명확하게 비교하여
                                    회원이 알기 쉽도록 표시합니다.
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"w-full flex flex-row"}>
                        <div className={'mr-2 mb-2'}>
                            <span className="bg-chk">
								<input type="checkbox" id="agree2" name="agree2" ref={agree2Ref} onClick={() => {
                                    setAgree2(!agree2);
                                    agree2Ref.current!.checked = !agree2;
                                    if (agree1Ref.current!.checked && agree2Ref.current!.checked && agree3Ref.current!.checked && agree4Ref.current!.checked) {
                                        agreeAllRef.current!.checked = true;
                                    } else {
                                        agreeAllRef.current!.checked = false;
                                    }
                                }}/>
                                <label
                                    htmlFor="agree2">[필수] 개인정보처리방침동의 </label>
                            </span>
                        </div>
                    </div>
                    <div className={'mb-[34px]'}>
                        <div className="w-[1024px] h-40">
                            <div
                                className="bg-backselect rounded-tl-[5px] rounded-bl-[5px] w-[1024px] h-40 overflow-y-auto">
                                <div
                                    className="text-[#888888] text-left  w-[960px]"
                                    style={{font: "400 13px/20px 'Noto Sans', sans-serif"}}
                                >
                                    HSJL 서비스 이용약관
                                    <br/>제 1 장 총칙
                                    <br/>제 1 조 (목적)
                                    <br/>
                                    ①이 약관은 주식회사 에이치에스제이엘(이하 &quot;HSJL&quot;이라 합니다)과{" "}
                                    <br/>
                                    이용 고객(이하 &quot;회원&quot;이라 합니다)간에 HSJL이 제공하는 인터넷 관련 서비스(이하
                                    &quot;서비스&quot;라 합니다)를 이용함에 있어 회원과 HSJL의 권리, 의무 및 책임사항을
                                    규정함을 목적으로 합니다.
                                    <br/>
                                    ②「PC통신, 모바일통신, 스마트폰 어플리케이션 등을 이용하는 전자상거래에 대해서도
                                    그 성질에 반하지 않는 한 이 약관을 준용합니다.
                                    <br/>
                                    제 2 조 (약관의 명시, 효력 및 개정)
                                    <br/>
                                    ①HSJL은 이 약관의 내용을 회원이 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다.
                                    <br/>
                                    ②HSJL은 &quot;전자상거래 등에서의 소비자보호에 관한 법률&quot;, &quot;약관의 규제
                                    등에 관한 법률&quot;, &quot;정보통신망 이용촉진 및 정보보호 등에 관한 법률&quot;,
                                    &quot;소비자기본법&quot;, &quot;전자문서 및 전자거래기본법&quot;,
                                    &quot;전자금융거래법&quot;, &quot;전자서명법&quot;, &quot;정보통신망법&quot;,
                                    &quot;방문판매 등에 관한 법률&quot;, &quot;소비자보호법&quot; 등 관련법을 위배하지 않는
                                    범위에서 이 약관을 개정할 수 있습니다.
                                    <br/>
                                    ③HSJL은 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께
                                    그 개정약관의 적용일자 7일 전부터 적용일자 전일까지 공지합니다. 다만, 회원에게
                                    불리하게 약관 내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예기간을 두고
                                    공지합니다. 이 경우 HSJL은 개정 전 내용과 개정 후 내용을 명확하게 비교하여
                                    회원이 알기 쉽도록 표시합니다.
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"w-full flex flex-row"}>
                        <div className={'mr-2 mb-2'}>
                            <span className="bg-chk">
								<input type="checkbox" id="agree3" name="agree3" ref={agree3Ref} onClick={() => {
                                    setAgree3(!agree3);
                                    agree3Ref.current!.checked = !agree3;
                                    if (agree1Ref.current!.checked && agree2Ref.current!.checked && agree3Ref.current!.checked && agree4Ref.current!.checked) {
                                        agreeAllRef.current!.checked = true;
                                    } else {
                                        agreeAllRef.current!.checked = false;
                                    }
                                }}/>
                                <label
                                    htmlFor="agree3">[필수] 개인정보처리방침동의 </label>
                            </span>
                        </div>
                    </div>
                    <div className={'mb-[34px]'}>
                        <div className="w-[1024px] h-40">
                            <div
                                className="bg-backselect rounded-tl-[5px] rounded-bl-[5px] w-[1024px] h-40 overflow-y-auto">
                                <div
                                    className="text-[#888888] text-left  w-[960px]"
                                    style={{font: "400 13px/20px 'Noto Sans', sans-serif"}}
                                >
                                    HSJL 서비스 이용약관
                                    <br/>제 1 장 총칙
                                    <br/>제 1 조 (목적)
                                    <br/>
                                    ①이 약관은 주식회사 에이치에스제이엘(이하 &quot;HSJL&quot;이라 합니다)과{" "}
                                    <br/>
                                    이용 고객(이하 &quot;회원&quot;이라 합니다)간에 HSJL이 제공하는 인터넷 관련 서비스(이하
                                    &quot;서비스&quot;라 합니다)를 이용함에 있어 회원과 HSJL의 권리, 의무 및 책임사항을
                                    규정함을 목적으로 합니다.
                                    <br/>
                                    ②「PC통신, 모바일통신, 스마트폰 어플리케이션 등을 이용하는 전자상거래에 대해서도
                                    그 성질에 반하지 않는 한 이 약관을 준용합니다.
                                    <br/>
                                    제 2 조 (약관의 명시, 효력 및 개정)
                                    <br/>
                                    ①HSJL은 이 약관의 내용을 회원이 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다.
                                    <br/>
                                    ②HSJL은 &quot;전자상거래 등에서의 소비자보호에 관한 법률&quot;, &quot;약관의 규제
                                    등에 관한 법률&quot;, &quot;정보통신망 이용촉진 및 정보보호 등에 관한 법률&quot;,
                                    &quot;소비자기본법&quot;, &quot;전자문서 및 전자거래기본법&quot;,
                                    &quot;전자금융거래법&quot;, &quot;전자서명법&quot;, &quot;정보통신망법&quot;,
                                    &quot;방문판매 등에 관한 법률&quot;, &quot;소비자보호법&quot; 등 관련법을 위배하지 않는
                                    범위에서 이 약관을 개정할 수 있습니다.
                                    <br/>
                                    ③HSJL은 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께
                                    그 개정약관의 적용일자 7일 전부터 적용일자 전일까지 공지합니다. 다만, 회원에게
                                    불리하게 약관 내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예기간을 두고
                                    공지합니다. 이 경우 HSJL은 개정 전 내용과 개정 후 내용을 명확하게 비교하여
                                    회원이 알기 쉽도록 표시합니다.
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"w-full flex flex-row"}>
                        <div className={'mr-2 mb-2'}>
                            <span className="bg-chk">
								<input type="checkbox" id="agree4" name="agree4" ref={agree4Ref} onClick={() => {
                                    setAgree4(!agree4);
                                    agree4Ref.current!.checked = !agree4;
                                    if (agree1Ref.current!.checked && agree2Ref.current!.checked && agree3Ref.current!.checked && agree4Ref.current!.checked) {
                                        agreeAllRef.current!.checked = true;
                                    } else {
                                        agreeAllRef.current!.checked = false;
                                    }
                                }}/>
                                <label
                                    htmlFor="agree4">[필수] 개인정보처리방침동의 </label>
                            </span>
                        </div>
                    </div>
                    <div className={'mb-[34px]'}>
                        <div className="w-[1024px] h-40">
                            <div
                                className="bg-backselect rounded-tl-[5px] rounded-bl-[5px] w-[1024px] h-40 overflow-y-auto">
                                <div
                                    className="text-[#888888] text-left  w-[960px]"
                                    style={{font: "400 13px/20px 'Noto Sans', sans-serif"}}
                                >
                                    HSJL 서비스 이용약관
                                    <br/>제 1 장 총칙
                                    <br/>제 1 조 (목적)
                                    <br/>
                                    ①이 약관은 주식회사 에이치에스제이엘(이하 &quot;HSJL&quot;이라 합니다)과{" "}
                                    <br/>
                                    이용 고객(이하 &quot;회원&quot;이라 합니다)간에 HSJL이 제공하는 인터넷 관련 서비스(이하
                                    &quot;서비스&quot;라 합니다)를 이용함에 있어 회원과 HSJL의 권리, 의무 및 책임사항을
                                    규정함을 목적으로 합니다.
                                    <br/>
                                    ②「PC통신, 모바일통신, 스마트폰 어플리케이션 등을 이용하는 전자상거래에 대해서도
                                    그 성질에 반하지 않는 한 이 약관을 준용합니다.
                                    <br/>
                                    제 2 조 (약관의 명시, 효력 및 개정)
                                    <br/>
                                    ①HSJL은 이 약관의 내용을 회원이 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다.
                                    <br/>
                                    ②HSJL은 &quot;전자상거래 등에서의 소비자보호에 관한 법률&quot;, &quot;약관의 규제
                                    등에 관한 법률&quot;, &quot;정보통신망 이용촉진 및 정보보호 등에 관한 법률&quot;,
                                    &quot;소비자기본법&quot;, &quot;전자문서 및 전자거래기본법&quot;,
                                    &quot;전자금융거래법&quot;, &quot;전자서명법&quot;, &quot;정보통신망법&quot;,
                                    &quot;방문판매 등에 관한 법률&quot;, &quot;소비자보호법&quot; 등 관련법을 위배하지 않는
                                    범위에서 이 약관을 개정할 수 있습니다.
                                    <br/>
                                    ③HSJL은 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께
                                    그 개정약관의 적용일자 7일 전부터 적용일자 전일까지 공지합니다. 다만, 회원에게
                                    불리하게 약관 내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예기간을 두고
                                    공지합니다. 이 경우 HSJL은 개정 전 내용과 개정 후 내용을 명확하게 비교하여
                                    회원이 알기 쉽도록 표시합니다.
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"w-full flex flex-row"}>
                        <div className="w-[1024px] h-[91px]">
                            <div
                                className="bg-[#ffffff] rounded-[5px] border-solid border-_400 border w-[1024px] h-[91px] flex items-center justify-center">
                                <div className={'flex justify-center'}>
                                    <span className="bg-chk">
                                        <input type="checkbox" id="allAgree" name="allAgree" ref={agreeAllRef}
                                               onClick={handleCheck}/>
                                        <label
                                            htmlFor="allAgree">위의 약관에 동의합니다. </label>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
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

export default Tab1Apply;