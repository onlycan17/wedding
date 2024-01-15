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
        <div className="ml-[18px] mt-[52px] grid grid-cols-5 gap-[30px]">
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">붙임성 있다 </label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">성실하다 </label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">귀엽다 </label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">적극적이다 </label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">예쁜편이다 </label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">편안하다 </label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">동안이다 </label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">밝고 활동적이다 </label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">피부가 좋다 </label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">스마트하고 똑똑하다 </label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">세련되다 </label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">애교가 많다 </label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">여성스럽다 </label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">날씬하다 </label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">상냥하다 </label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">서구적인 스타일 </label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">동양적인 스타일 </label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">패션센스가 있다 </label>
          </span>
        </div>
      </div>
      <div className="mt-[30px] ml-[170px] flex">
        <img src="/alram.png" alt="" width={24} height={24} />
        <h3 className="ml-[10px] text-[color:var(--600,#777)] text-sm not-italic font-normal leading-6">
          원하는 상대스타일을 모두 선택하세요 (복수선택가능)
        </h3>
      </div>
    </div>
  );
};

export default Tab72StyleInfo;
