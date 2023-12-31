import type {NextPage} from "next";
import {useEffect, useState} from "react";
import Tab1Apply from "@/pages/service/document/tab1-apply";
import Tab2BasicInfo from "@/pages/service/document/tab2-basic-info";
import Tab3FaithInfo from "@/pages/service/document/tab3-faith-info";
import Tab4KnowledgeProtertyInfo from "@/pages/service/document/tab4-knowledge-proterty-info";
import Tab5FamilyInfo from "./tab5-family-info";
import Tab6PersonalityInfo from "./tab6-personality-info";
import { useRecoilValue } from "recoil";
import { userState } from "@/pages/common/state";
import WithAuth from "@/pages/common/with-auth";
import Tab7WantPartner from "./tab7-want-partner";

const WeddingDocument: NextPage = () => {
    const [activedTab, setActivedTab] = useState(0);
    const getUser = useRecoilValue(userState);
    useEffect(() => {
        if (getUser) {
            console.log(`getUser: ${JSON.stringify(getUser)}`);
        }
    }
    , [getUser]);
    const TabContent = [
        {
            title: "약관동의",
            content: <Tab1Apply activedTab={activedTab} setActivedTab={setActivedTab} />
        },
        {
            title: "기본정보",
            content: <Tab2BasicInfo setActivedTab={setActivedTab} activedTab={activedTab}/>
        },
        {
            title: "신앙정보",
            content: <Tab3FaithInfo setActivedTab={setActivedTab} activedTab={activedTab}/>
        },
        {
            title: "직장/재산정보",
            content: <Tab4KnowledgeProtertyInfo setActivedTab={setActivedTab} activedTab={activedTab} />
        },
        {
            title: "가족정보",
            content: <Tab5FamilyInfo setActivedTab={setActivedTab} activedTab={activedTab} />
        },
        {
            title: "성격/성향",
            content: <Tab6PersonalityInfo setActivedTab={setActivedTab} activedTab={activedTab} />
        },
        {
            title: "희망상대",
            content: <Tab7WantPartner setActivedTab={setActivedTab} activedTab={activedTab} />
        },

    ];
    return (
        <div className={'w-full'}>
            <div className={'w-full flex justify-center m-[60px]'}>
                <div className={"text-[#292f36] text-center w-56 flex items-center justify-center"}
                     style={{font: "400 35px/125% 'Noto Sans', sans-serif"}}>
                    축복(결혼)서류
                </div>
            </div>
            <div className="flex flex-row gap-0 items-start justify-center shrink-0 relative">
                {TabContent.map((tab, index) => (
                    <div key={index} className="shrink-0 w-[120px] h-[55px] ">
                        <div key={index} className={activedTab === index ? "border-solid border-b-primary2 border-0 border-b-[3px] p-2.5 flex flex-col gap-2.5 items-center justify-start w-[130px]" : "border-solid border-transparecy border-b p-2.5 flex flex-col gap-2.5 items-center justify-start w-[130px]"}>
                            <button
                                className="text-_700 text-center bg-white"
                                style={{ font: "400 16px/220% 'Jost', sans-serif" }}
                                key={index}
                                onClick={() => setActivedTab(index)}
                            >
                                {tab.title}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div id={"content"}>
                {TabContent[activedTab].content}
            </div>
        </div>
    );
};

export default WithAuth(WeddingDocument);
