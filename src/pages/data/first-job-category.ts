// 배열 형식을 정의하는 interface 선언
interface Status {
  code: string;
  name: string;
}

// 1차 직업군
const firstJobCategory: Status[] = [
  // 여기에 다른 값들을 추가해주세요
  {
    code: "01",
    name: "관리직(임원·부서장)",
  },
  {
    code: "02",
    name: "경영․행정․사무직",
  },
  {
    code: "03",
    name: "금융·보험직",
  },
  {
    code: "11",
    name: "인문·사회과학 연구직",
  },
  {
    code: "12",
    name: "자연·생명과학 연구직",
  },
  {
    code: "13",
    name: "정보통신 연구개발 및 공학기술직",
  },
  {
    code: "14",
    name: "건설·채굴 연구개발 및 공학기술직",
  },
  {
    code: "15",
    name: "제조 연구개발 및 공학기술직",
  },
  {
    code: "21",
    name: "교육직",
  },
  {
    code: "22",
    name: "법률직",
  },
  {
    code: "23",
    name: "사회복지·종교직",
  },
  {
    code: "24",
    name: "경찰·소방·교도직",
  },
  {
    code: "25",
    name: "군인",
  },
  {
    code: "30",
    name: "보건·의료직",
  },
  {
    code: "41",
    name: "예술·디자인·방송직",
  },
  {
    code: "42",
    name: "스포츠·레크리에이션직",
  },
  {
    code: "51",
    name: "미용·예식 서비스직",
  },
  {
    code: "52",
    name: "여행·숙박·오락 서비스직",
  },
  {
    code: "53",
    name: "음식 서비스직",
  },
  {
    code: "54",
    name: "경호·경비직",
  },
  {
    code: "55",
    name: "돌봄 서비스직(간병·육아)",
  },
  {
    code: "56",
    name: "청소 및 기타 개인서비스직",
  },
  {
    code: "61",
    name: "영업·판매직",
  },
  {
    code: "62",
    name: "운전·운송직",
  },
  {
    code: "70",
    name: "건설·채굴직",
  },
  {
    code: "81",
    name: "기계 설치·정비·생산직",
  },
  {
    code: "82",
    name: "금속·재료 설치·정비·생산직",
  },
  {
    code: "83",
    name: "전기·전자 설치·정비·생산직",
  },
  {
    code: "84",
    name: "정보통신 설치·정비직 ICT",
  },
  {
    code: "85",
    name: "화학·환경 설치·정비·생산직",
  },
  {
    code: "86",
    name: "섬유·의복 생산직",
  },
  {
    code: "87",
    name: "식품 가공·생산직",
  },
  {
    code: "88",
    name: "인쇄·목재·공예 및 기타 설치·정비·생산직",
  },
  {
    code: "89",
    name: "제조 단순직",
  },
  {
    code: "90",
    name: "농림어업직",
  },
];

export default firstJobCategory;
