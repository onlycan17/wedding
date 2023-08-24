import type {NextPage} from "next";

const WeddingDocument: NextPage = () => {
    const TabContent = [
        {
            title: "약관동의",
            content: "This is the content for Tab 1"
        },
        {
            title: "기본정보",
            content: "This is the content for Tab 2"
        },
        {
            title: "신앙정보",
            content: "This is the content for Tab 3"
        },
        {
            title: "직장/재산정보",
            content: "This is the content for Tab 4"
        },
        {
            title: "가족정보",
            content: "This is the content for Tab 4"
        },
        {
            title: "성격/성향",
            content: "This is the content for Tab 4"
        },
        {
            title: "희망상대",
            content: "This is the content for Tab 4"
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

            <div className="flex flex-row gap-0 items-start justify-start shrink-0 relative">
                <div className="shrink-0 w-[120px] h-[55px] ">
                    <div className=" border-primary-2 border-b-[3px] p-2.5 flex flex-col gap-2.5 items-center justify-start w-[120px]  left-0 top-0">
                        <div
                            className="text-_700 text-center relative"
                            style={{ font: "400 16px/220% 'Jost', sans-serif" }}
                        >
                            약관동의{" "}
                        </div>
                    </div>
                </div>
                <div className="shrink-0 w-[120px] h-[55px] relative">
                    <div className="border-solid border-transparecy border-b p-2.5 flex flex-col gap-2.5 items-center justify-start w-[120px] absolute left-0 top-0">
                        <div
                            className="text-_700 text-left relative"
                            style={{ font: "400 16px/220% 'Jost', sans-serif" }}
                        >
                            기본정보{" "}
                        </div>
                    </div>
                </div>
                <div className="shrink-0 w-[120px] h-[55px] relative">
                    <div className="border-solid border-transparecy border-b p-2.5 flex flex-col gap-2.5 items-center justify-start w-[120px] absolute left-0 top-0">
                        <div
                            className="text-_700 text-left relative"
                            style={{ font: "400 16px/220% 'Jost', sans-serif" }}
                        >
                            신앙정보{" "}
                        </div>
                    </div>
                </div>
                <div className="shrink-0 w-[120px] h-[55px] relative">
                    <div className="border-solid border-transparecy border-b p-2.5 flex flex-col gap-2.5 items-center justify-start w-[120px] absolute left-0 top-0">
                        <div
                            className="text-_700 text-left relative"
                            style={{ font: "400 16px/220% 'Jost', sans-serif" }}
                        >
                            직장/재산정보{" "}
                        </div>
                    </div>
                </div>
                <div className="shrink-0 w-[120px] h-[55px] relative">
                    <div className="border-solid border-transparecy border-b p-2.5 flex flex-col gap-2.5 items-center justify-start w-[120px] absolute left-0 top-0">
                        <div
                            className="text-_700 text-left relative"
                            style={{ font: "400 16px/220% 'Jost', sans-serif" }}
                        >
                            가족정보{" "}
                        </div>
                    </div>
                </div>
                <div className="shrink-0 w-[120px] h-[55px] relative">
                    <div className="border-solid border-transparecy border-b p-2.5 flex flex-col gap-2.5 items-center justify-start w-[120px] absolute left-0 top-0">
                        <div
                            className="text-_700 text-left relative"
                            style={{ font: "400 16px/220% 'Jost', sans-serif" }}
                        >
                            성격/성향{" "}
                        </div>
                    </div>
                </div>
                <div className="shrink-0 w-[120px] h-[55px] relative">
                    <div className="border-solid border-transparecy border-b p-2.5 flex flex-col gap-2.5 items-center justify-start w-[120px] absolute left-0 top-0">
                        <div
                            className="text-_700 text-left relative"
                            style={{ font: "400 16px/220% 'Jost', sans-serif" }}
                        >
                            희망상대{" "}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeddingDocument;
