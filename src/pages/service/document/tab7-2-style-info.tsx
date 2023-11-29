import { NextPage } from "next";

type ActivedTab = {
  activedDetailTab: number;
  setActivedDetailTab: React.Dispatch<React.SetStateAction<number>>;
};

const Tab72StyleInfo: NextPage<ActivedTab> = ({ activedDetailTab, setActivedDetailTab }) => {
  const handleNextTab = () => {
    setActivedDetailTab(2);
  };
  return (
    <div className="w-[1200px] bg-[#FBFBFB]">
      <div className="mt-[52px] ml-[88px] flex">
        <div className="flex flex-col text-[color:var(--900,#232527)] text-base not-italic font-bold leading-[150%] tracking-[0.16px]">
          <div className="mt-[52px] flex flex-row">
            <p>원하는</p>
            <p className="ml-[13px] mt-[10px] text-[#E82121] text-center text-[13px] not-italic font-normal leading-[14.95px] tracking-[-0.26px] ">
              *
            </p>
          </div>
          <p>상대</p>
          <p>스타일</p>
        </div>
        <div className="mt-[52px] grid grid-cols-5 gap-[30px]">
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">적극적이다 </label>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Tab72StyleInfo;
