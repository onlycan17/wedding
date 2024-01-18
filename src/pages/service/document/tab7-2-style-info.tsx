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
      <div className="ml-[88px] mt-[60px] flex w-full">
        <div className="text-[color:var(--900,#232527)] text-base not-italic font-bold leading-[150%] tracking-[0.16px]">
          반려동물 유무
        </div>
        <div className=" flex flex-col items-center justify-center shrink-0 w-6 h-6">
          <div
            className="text-[#e82121] text-center flex items-center justify-center w-full h-full pt-[3px]"
            style={{ font: "400 13px/14.95px 'Noto Sans', sans-serif" }}
          >
            *
          </div>
        </div>
        <div className="ml-[38px]"></div>
        <div className="flex">
          <span className="bg-chk">
            <input type="radio" name="petYn" id="petN" />
            <label htmlFor="petN">무</label>
          </span>
          <span className="bg-chk">
            <input type="radio" name="petYn" id="petY" />
            <label htmlFor="petY">유</label>
          </span>
          <div className="mt-[-15px]">
            <input
              type="text"
              className="flex w-[360px] h-[60px] items-center gap-6 shrink-0 border border-[color:var(--400,#BFBFBF)] px-2.5 py-0 rounded-[5px] border-solid"
              placeholder="반려동물 종류 입력"
            />
          </div>
        </div>
        <div className="mb-[60px]"></div>
      </div>
      <div className="flex ml-[88px] ">
        <div className="flex flex-col text-[color:var(--900,#232527)] text-base not-italic font-bold leading-[150%] tracking-[0.16px]">
          <div className="mt-[52px] flex flex-row">
            <p>상대</p>
            <p className="ml-[13px] mt-[10px] text-[#E82121] text-center text-[13px] not-italic font-normal leading-[14.95px] tracking-[-0.26px] ">
              *
            </p>
          </div>
          <p>취미활동</p>
        </div>
        <div className="ml-[18px] mt-[52px] grid grid-cols-5 gap-[30px]">
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">게임 </label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">농구,배구,축구,야구 </label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">배드민턴 </label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">테니스 </label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">골프 </label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">승마 </label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">볼링 </label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">스키(보드) </label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">당구 </label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">라이딩 </label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">필라테스 </label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">헬스/요가 </label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">수영(수상레저) </label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">공연/영화/전시 </label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">여행 </label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">DIY </label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">악기(밴드) </label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">등산 </label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">마라톤(달리기) </label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">요리/쿠킹 </label>
          </span>
        </div>
      </div>
      <div className="mt-[30px] ml-[170px] flex">
        <img src="/alram.png" alt="" width={24} height={24} />
        <h3 className="ml-[10px] text-[color:var(--600,#777)] text-sm not-italic font-normal leading-6">
          짝꿍과 나중에 같이 하고픈 취미활동 3가지만 적어주세요
        </h3>
      </div>
    </div>
  );
};

export default Tab72StyleInfo;
