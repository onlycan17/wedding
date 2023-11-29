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

      <div className="mb-[60px]"></div>

      <div className="ml-[88px] flex">
        <div className="flex flex-col">
          <div className="flex flex-row ">
            <p className="text-[color:var(--900,#232527)] text-base not-italic font-bold leading-[150%] tracking-[0.16px]">
              희망거주지
            </p>
            <p className="ml-[10px] mt-[10px] text-[#E82121] text-center text-[13px] not-italic font-normal leading-[14.95px] tracking-[-0.26px] ">
              *
            </p>
          </div>
        </div>
        <div className="ml-[10px]">
          <p className="text-[color:var(--600,#777)] text-sm not-italic font-normal leading-6">1차</p>
        </div>
        <div className="ml-[18px] mt-[-15px]">
          <select
            name=""
            id=""
            className="flex w-[200px] h-[60px] items-center gap-6 shrink-0 border border-[color:var(--400,#BFBFBF)] px-2.5 py-0 rounded-[5px] border-solid text-[color:var(--500,#A0A0A0)] text-[15px] not-italic font-normal leading-[150%] left-2.5 top-[18.5px]"
          >
            <option value="">선택</option>
          </select>
        </div>
        <div className="ml-[50px]">
          <p className="text-[color:var(--600,#777)] text-sm not-italic font-normal leading-6">2차</p>
        </div>
        <div className="ml-[18px] mt-[-15px]">
          <select
            name=""
            id=""
            className="flex w-[200px] h-[60px] items-center gap-6 shrink-0 border border-[color:var(--400,#BFBFBF)] px-2.5 py-0 rounded-[5px] border-solid text-[color:var(--500,#A0A0A0)] text-[15px] not-italic font-normal leading-[150%] left-2.5 top-[18.5px]"
          >
            <option value="">선택</option>
          </select>
        </div>
        <div className="ml-[40px]">
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">무관</label>
          </span>
        </div>
      </div>
      {/* <div className="mb-[60px]"></div> */}
      <div className="flex">
        <div className="mt-[84px] ml-[88px] flex flex-col">
          <div className="flex flex-row ">
            <p className="text-[color:var(--900,#232527)] text-base not-italic font-bold leading-[150%] tracking-[0.16px]">
              희망
            </p>
            <p className="ml-[30px] mt-[10px] text-[#E82121] text-center text-[13px] not-italic font-normal leading-[14.95px] tracking-[-0.26px] ">
              *
            </p>
          </div>
          <div>
            <p className="text-[color:var(--900,#232527)] text-base not-italic font-bold leading-[150%] tracking-[0.16px]">
              상대학력
            </p>
          </div>
        </div>
        <div className="mt-[75px] ml-[75px]">
          <select
            name=""
            id=""
            className="flex w-[200px] h-[60px] items-center gap-6 shrink-0 border border-[color:var(--400,#BFBFBF)] px-2.5 py-0 rounded-[5px] border-solid text-[color:var(--500,#A0A0A0)] text-[15px] not-italic font-normal leading-[150%] left-2.5 top-[18.5px]"
          >
            <option value="">선택</option>
          </select>
        </div>
        <div className="ml-[40px] mt-[88px]">
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">무관</label>
          </span>
        </div>
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
            상대직업
          </p>
        </div>
        <div className="ml-[13px] grid grid-cols-5 gap-[30px]">
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">섭리작업자</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">일반사무직</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">금융관련업</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">연구원</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">엔지니어,정보통신</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">건축,설계</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">간호 및 기타의료</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">의사,약사</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">디자이너</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">방송,언론</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">교사 및 강사</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">공무원,공사</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">사업,자영업</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">특수직</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">예능계</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">사법고시 합격자</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">회계사,변리사</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">유학생</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">석/박사 재학중</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">일반직,기타</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">서비스직</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">교수</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">전문직</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">프리랜서</label>
          </span>
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">무관</label>
          </span>
        </div>
      </div>
      <div className="mt-[30px] ml-[165px] flex">
        <img src="/alram.png" alt="" width={24} height={24} />
        <h3 className="ml-[10px] text-[color:var(--600,#777)] text-sm not-italic font-normal leading-6">
            섭리직업자는 목회자, 부교역자, 부서중앙사역자, 월명동 사역자, 국내외 선교사 정도입니다. 그외는 해당하지 않습니다.
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
            상대연봉
          </p>
        </div>
        <div className="ml-[13px] grid grid-cols-5 gap-[30px]">
          <span className="bg-chk">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">3천만원미만</label>
          </span>
          <span className="bg-chk">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">3~4천만원</label>
          </span>
          <span className="bg-chk">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">4~6천만원</label>
          </span>
          <span className="bg-chk">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">6~8천만원</label>
          </span>
          <span className="bg-chk">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">8~1억원</label>
          </span>
          <span className="bg-chk">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">1억~1억 5천만원</label>
          </span>
          <span className="bg-chk">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">1억 5천~2억원</label>
          </span>
          <span className="bg-chk">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">2억이상</label>
          </span>
          <span className="bg-chk">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">무관</label>
          </span>
        </div>
      </div>
      <div className="mt-[30px] ml-[165px] flex">
        <img src="/alram.png" alt="" width={24} height={24} />
        <h3 className="ml-[10px] text-[color:var(--600,#777)] text-sm not-italic font-normal leading-6 flex">
            많을수록 좋다가 아닌 <p className="ml-[5px] text-[#008DFA] mr-[5px]">최소한 이정도는 되어야</p> 한다는 기준으로 선택해주세요!
        </h3>
      </div>
      <div className="flex">
        <div className="mt-[84px] ml-[88px] flex flex-col">
          <div className="flex flex-row ">
            <p className="text-[color:var(--900,#232527)] text-base not-italic font-bold leading-[150%] tracking-[0.16px]">
              희망
            </p>
            <p className="ml-[30px] mt-[10px] text-[#E82121] text-center text-[13px] not-italic font-normal leading-[14.95px] tracking-[-0.26px] ">
              *
            </p>
          </div>
          <div>
            <p className="text-[color:var(--900,#232527)] text-base not-italic font-bold leading-[150%] tracking-[0.16px]">
              가족종교
            </p>
          </div>
        </div>
        <div className="mt-[75px] ml-[75px]">
          <select
            name=""
            id=""
            className="flex w-[200px] h-[60px] items-center gap-6 shrink-0 border border-[color:var(--400,#BFBFBF)] px-2.5 py-0 rounded-[5px] border-solid text-[color:var(--500,#A0A0A0)] text-[15px] not-italic font-normal leading-[150%] left-2.5 top-[18.5px]"
          >
            <option value="">선택</option>
          </select>
        </div>
        <div className="ml-[40px] mt-[88px]">
          <span className="bg-chk-square">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">무관</label>
          </span>
        </div>
      </div>
      <div className="mt-[60px]"></div>
      <div className="ml-[88px] flex">
        <div className="flex flex-col">
          <div className="flex flex-row ">
            <p className="text-[color:var(--900,#232527)] text-base not-italic font-bold leading-[150%] tracking-[0.16px]">
              희망국적
            </p>
            <p className="ml-[10px] mt-[10px] text-[#E82121] text-center text-[13px] not-italic font-normal leading-[14.95px] tracking-[-0.26px] ">
              *
            </p>
          </div>
        </div>
        <div className="ml-[13px] grid grid-cols-5 gap-[30px]">
          <span className="bg-chk">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">한국인</label>
          </span>
          <span className="bg-chk">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">외국인</label>
          </span>
          <span className="bg-chk">
            <input type="checkbox" id="proactive" name="proactive" />
            <label htmlFor="proactive">무관</label>
          </span>
        </div>
        <div className="mt-[90px]"></div>
      </div>
    </div>
  );
};

export default Tab71BasicInfo;
