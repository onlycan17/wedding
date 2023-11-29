import { NextPage } from "next";

type ActivedTab = {
  activedDetailTab: number;
  setActivedDetailTab: React.Dispatch<React.SetStateAction<number>>;
};

const Tab71BasicInfo: NextPage<ActivedTab> = ({ activedDetailTab, setActivedDetailTab }) => {
  const handleNextTab = () => {
    setActivedDetailTab(2);
  };
  return (
    <div className="w-[1200px] bg-[#FBFBFB]">
      <div className="mt-[52px] ml-[88px] flex">
        <div className="flex flex-col">
          <div className="mt-[52px] flex flex-row ">
            <p className="text-[color:var(--900,#232527)] text-base not-italic font-bold leading-[150%] tracking-[0.16px]">
              희망
            </p>
            <p className="ml-[30px] mt-[10px] text-[#E82121] text-center text-[13px] not-italic font-normal leading-[14.95px] tracking-[-0.26px] ">
              *
            </p>
          </div>
          <p className="text-[color:var(--900,#232527)] text-base not-italic font-bold leading-[150%] tracking-[0.16px]">
            상대나이
          </p>
        </div>
        <div className="ml-[13px] mt-[52px] grid grid-cols-5 gap-[30px]">
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">1~2살 연하</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">3~4살 연하</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">5~6살 연하</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">7~10살 연하</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">공갑</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">1~2살 연상</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">3~4살 연상</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">5~6살 연상</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">7~10살 연상</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">무관</label>
          </span>
        </div>
      </div>
      <div className="mt-[30px] ml-[180px] flex">
        <img src="/alram.png" alt="" width={24} height={24} />
        <h3 className="ml-[10px] text-[color:var(--600,#777)] text-sm not-italic font-normal leading-6">
          원하는 희망연령을 모두 선택하세요 (복수선택가능)
        </h3>
      </div>
      <div className="mt-[60px]"></div>
      <div className="ml-[88px] flex">
        <div className="flex flex-col">
          <div className="flex flex-row ">
            <p className="text-[color:var(--900,#232527)] text-base not-italic font-bold leading-[150%] tracking-[0.16px]">
              희망
            </p>
            <p className="ml-[30px] mt-[10px] text-[#E82121] text-center text-[13px] not-italic font-normal leading-[14.95px] tracking-[-0.26px] ">
              *
            </p>
          </div>
          <p className="text-[color:var(--900,#232527)] text-base not-italic font-bold leading-[150%] tracking-[0.16px]">
            섭리연륜
          </p>
        </div>
        <div className="ml-[13px] grid grid-cols-5 gap-[30px]">
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">무관</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">3년 이하</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">3년 이상</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">5년 이상</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">7년 이상</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">10년 이상</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">15년 이상</label>
          </span>
        </div>
      </div>
      <div className="mt-[30px] ml-[180px] flex">
        <img src="/alram.png" alt="" width={24} height={24} />
        <h3 className="ml-[10px] text-[color:var(--600,#777)] text-sm not-italic font-normal leading-6">
          원하는 희망 섭리연륜을 선택하세요
        </h3>
      </div>
      <div className="mt-[60px]"></div>
      <div className="ml-[88px] flex">
        <div className="flex flex-col">
          <div className="flex flex-row ">
            <p className="text-[color:var(--900,#232527)] text-base not-italic font-bold leading-[150%] tracking-[0.16px]">
              희망신장
            </p>
            <p className="ml-[10px] mt-[10px] text-[#E82121] text-center text-[13px] not-italic font-normal leading-[14.95px] tracking-[-0.26px] ">
              *
            </p>
          </div>
        </div>
        <div className="ml-[13px] grid grid-cols-5 gap-[30px]">
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">150cm 이하</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">150cm~160cm</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">161cm~165cm</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">166cm~170cm</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">171cm~175cm</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">176-180cm</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">181cm 이상</label>
          </span>
        </div>
      </div>
      <div className="mt-[30px] ml-[180px] flex">
        <img src="/alram.png" alt="" width={24} height={24} />
        <h3 className="ml-[10px] text-[color:var(--600,#777)] text-sm not-italic font-normal leading-6">
          원하는 희망 신장을 선택하세요
        </h3>
      </div>
      <div className="mt-[60px]"></div>
    </div>
  );
};

export default Tab71BasicInfo;
