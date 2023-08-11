import React, {ChangeEvent, useEffect, useState} from "react";
import {db} from "@/pages/config/firbase-setting";
import {doc, getDoc, orderBy, setDoc} from "@firebase/firestore";
import {collection, getDocs, query, updateDoc, where} from "firebase/firestore";
import WithAuthAdmin from "@/pages/common/with-auth-admin";
import {useQuery} from "react-query";
import selectRegion from "@/pages/common/function/select-region";
import selectChurch from "@/pages/common/function/select-church";
import selectDepartment from "@/pages/common/function/select-department";
import styles from '../../styles/css/membership.module.css';
import {dataRegion} from "@/pages/data/region";
import {ChurchCode, dataChurch} from "@/pages/data/church";
import {dataDepartment} from "@/pages/data/department";
import generateYears from "@/pages/common/function/generate-year";
import generateNumbers from "@/pages/common/function/generate-number";
import logDev from "@/pages/config/log";
import selectChurchUnique from "@/pages/common/function/select-church-unique";
import getRandomFiveDigitNumber from "@/pages/common/function/getRandomNumber";


type Membership = {
    id: string,
    year: string,
    region: string,
    church: string,
    department: string,
    userName: string,
    email: string,
    proviName: string,
    birthYear: string,
    birthMonth: string,
    birthDay: string,
    phoneFirst: string,
    phoneSecond: string,
    phoneThird: string,
    payDate: string,
    payTime: string,
    payer: string,
    payType: string,
    userStatus: string,
    userStatusName: string,
    sex: string,
    createDate: string,
    agree1: string,
    agree2: string,
    agree3: string,
}
type SearchParam = {
    year: string,
    region: string,
    church: string,
    department: string,
    userName: string,
    proviName: string,
    birthYear: string,
    birthMonth: string,
    birthDay: string,
    phoneFirst: string,
    phoneSecond: string,
    phoneThird: string,
    sex: string,
}
const fetchMembership = async (key: string, searchData: SearchParam | undefined): Promise<Membership[]> => {

    let {
        year,
        region,
        church,
        department,
        userName,
        proviName,
        birthYear,
        birthMonth,
        birthDay,
        phoneFirst,
        phoneSecond,
        phoneThird,
        sex,
    } = searchData!;


    console.log(`searchData: ${JSON.stringify(searchData)}`);
    console.log(`year: ${new Date().getFullYear().toString()}`);
    let queryDate = query(
        collection(db, "membershipApplication"),
        where("year", "==", year ? year : new Date().getFullYear().toString()),
        orderBy("createDate", "desc")
    );


    const querySnapshot = await getDocs(queryDate);
    if (querySnapshot.empty) {
        console.log('empty');
    }
    // querySnapshot.forEach((doc) => {
    //     console.log(`result Data doc.id: ${doc.id} => ${JSON.stringify(doc.data())}`);
    // });
    const membershipData: Membership[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        year: doc.data().year,
        region: selectRegion(doc.data().region),
        church: selectChurch(doc.data().church),
        department: selectDepartment(doc.data().department),
        userName: doc.data().userName,
        email: doc.data().email,
        proviName: doc.data().proviName,
        birthYear: doc.data().birthYear,
        birthMonth: doc.data().birthMonth,
        birthDay: doc.data().birthDay,
        phoneFirst: doc.data().phoneNumFirst,
        phoneSecond: doc.data().phoneNumSecond,
        phoneThird: doc.data().phoneNumThird,
        payDate: doc.data().payDate,
        payTime: doc.data().payTime,
        payer: doc.data().payer,
        payType: doc.data().payType,
        userStatus: doc.data().userStatus,
        userStatusName: doc.data().userStatusName,
        createDate: doc.data().createDate,
        sex: doc.data().sex,
        agree1: doc.data().agree1,
        agree2: doc.data().agree2,
        agree3: doc.data().agree3,
    }));
    const filterData = membershipData.filter((data) => {
        return (!userName || data.userName.includes(userName)) &&
            (!proviName || data.proviName.includes(proviName)) &&
            (!region || data.region.includes(selectRegion(region))) &&
            (!church || data.church.includes(selectChurch(church))) &&
            (!department || data.department.includes(selectDepartment(department))) &&
            (!birthYear || data.birthYear.includes(birthYear)) &&
            (!birthMonth || data.birthMonth.includes(birthMonth)) &&
            (!birthDay || data.birthDay.includes(birthDay)) &&
            (!phoneFirst || data.phoneFirst.includes(phoneFirst)) &&
            (!phoneSecond || data.phoneSecond.includes(phoneSecond)) &&
            (!phoneThird || data.phoneThird.includes(phoneThird)) &&
            (!sex || data.sex === sex);
    });
    console.log(`filterData: ${JSON.stringify(filterData)}`);

    return filterData;
}

const MembershipManagement: React.FC = () => {
    const [searchData, setSearchData] = useState<SearchParam>({
        year: '',
        region: '',
        church: '',
        department: '',
        userName: '',
        proviName: '',
        birthYear: '',
        birthMonth: '',
        birthDay: '',
        phoneFirst: '',
        phoneSecond: '',
        phoneThird: '',
        sex: '',
    });
    const [selectedPostIds, setSelectedPostIds] = useState<string[]>([]);
    const [selectAll, setSelectAll] = useState(false);
    const [defaultYear, setDefaultYear] = useState(new Date().getFullYear().toString());
    const [defaultRegion, setDefaultRegion] = useState('');
    const [defaultChurch, setDefaultChurch] = useState('');
    const [defaultDepartment, setDefaultDepartment] = useState('');
    const [searchUserName, setSearchUserName] = useState('');
    const [searchProviName, setSearchProviName] = useState('');
    const [defaultBirthYear, setSearchBirthYear] = useState('');
    const [defaultBirthMonth, setSearchBirthMonth] = useState('');
    const [defaultBirthDay, setSearchBirthDay] = useState('');
    const [searchPhoneFirst, setSearchPhoneFirst] = useState('');
    const [searchPhoneSecond, setSearchPhoneSecond] = useState('');
    const [searchPhoneThird, setSearchPhoneThird] = useState('');
    const [church, setChurch] = useState<ChurchCode[]>([]);
    const [sex, setSex] = useState('');
    const {
        data,
        error,
        isLoading,
        isError,
        isFetching,
        isSuccess
    } = useQuery(['membership', searchData], () => fetchMembership('mebership', searchData), {
        staleTime: 1000 * 60 * 5, // 5분 동안 캐시된 데이터를 사용
        cacheTime: 1000 * 60 * 10, // 10분 동안 캐시된 데이터를 사용
    });

    useEffect(() => {

    }, [data,
        church,
        defaultYear,
        defaultRegion,
        defaultChurch,
        defaultDepartment,
        searchUserName,
        searchProviName,
        defaultBirthYear,
        defaultBirthMonth,
        defaultBirthDay,
        searchPhoneFirst,
        searchPhoneSecond,
        searchPhoneThird,
        sex,
    ]);

    if (isLoading) {
        return <div>로딩중...</div>
    }
    if (isError) {
        return <div>에러가 발생했습니다.</div>
    }

    const handleRegion = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setChurch(dataChurch.filter((item) => item.regionCode === event.target.value));
    }
    const handleSexChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setSex(value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        const {
            selectYear,
            userName,
            proviName,
            phoneFirst,
            phoneSecond,
            phoneThird,
            birthYear,
            birthMonth,
            birthDay,
            sex,
            selectRegion,
            selectChurch,
            selectDepartment,
        } = data;
        setSearchData({
            year: typeof selectYear === 'string' ? selectYear : "",
            userName: typeof userName === 'string' ? userName : "",
            birthDay: typeof birthDay === 'string' ? birthDay : "",
            birthMonth: typeof birthMonth === 'string' ? birthMonth : "",
            birthYear: typeof birthYear === 'string' ? birthYear : "",
            region: typeof selectRegion === 'string' ? selectRegion : "",
            church: typeof selectChurch === 'string' ? selectChurch : "",
            department: typeof selectDepartment === 'string' ? selectDepartment : "",
            phoneFirst: typeof phoneFirst === 'string' ? phoneFirst : "",
            phoneSecond: typeof phoneSecond === 'string' ? phoneSecond : "",
            phoneThird: typeof phoneThird === 'string' ? phoneThird : "",
            proviName: typeof proviName === 'string' ? proviName : "",
            sex: typeof sex === 'string' ? sex : "",
        });
        // const fetchSearchResult = async () => {
        //     await fetchMembership('membership', searchData);
        // }
        // fetchSearchResult();
        setDefaultYear(typeof selectYear === 'string' ? selectYear : "",);
        setDefaultRegion(typeof selectRegion === 'string' ? selectRegion : "",);
        setDefaultChurch(typeof selectChurch === 'string' ? selectChurch : "",);
        setDefaultDepartment(typeof selectDepartment === 'string' ? selectDepartment : "",);
        setSearchUserName(typeof userName === 'string' ? userName : "",);
        setSearchProviName(typeof proviName === 'string' ? proviName : "",);
        setSearchBirthYear(typeof birthYear === 'string' ? birthYear : "",);
        setSearchBirthMonth(typeof birthMonth === 'string' ? birthMonth : "",);
        setSearchBirthDay(typeof birthDay === 'string' ? birthDay : "",);
        setSearchPhoneFirst(typeof phoneFirst === 'string' ? phoneFirst : "",);
        setSearchPhoneSecond(typeof phoneSecond === 'string' ? phoneSecond : "",);
        setSearchPhoneThird(typeof phoneThird === 'string' ? phoneThird : "",);

        fetchMembership('membership', searchData);
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        switch (name) {
            case 'userName':
                setSearchUserName(value);
                break;
            case 'proviName':
                setSearchProviName(value);
                break;
            case 'phoneFirst':
                setSearchPhoneFirst(value);
                break;
            case 'phoneSecond':
                setSearchPhoneSecond(value);
                break;
            case 'phoneThird':
                setSearchPhoneThird(value);
                break;
            default:
                break;
        }
    }

    const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, checked} = event.target;
        if (selectAll) {
            setSelectedPostIds([]);
        } else {
            setSelectedPostIds(data!.map(post => post.id));
        }
        setSelectAll(!selectAll);
    }

    const handlePostCheckBox = (id:string) => {
        if (selectedPostIds.includes(id)) {
            setSelectedPostIds(pref => pref.filter(p => p !== id));
        } else {
            setSelectedPostIds(pref => [...pref, id]);
        }
    }

    const handleMemberComplete = async () => {
        for (const id of selectedPostIds) {
            logDev(`id: ${id}`);
            const memberRef = doc(db, "membershipApplication", id);
            await updateDoc(memberRef, {
                status: 'complete',
                statusName: '회원가입 승인',
            });
            const member = await getDoc(memberRef);
            const unqieNumber = selectChurchUnique(member.data()!.church) + getRandomFiveDigitNumber();

            await setDoc(doc(db, "userInfo", id), {
                year: new Date().getFullYear().toString(),
                userNumber: unqieNumber,
                userName: member.data()!.userName,
                proviName: member.data()!.proviName,
                birthYear: member.data()!.birthYear,
                birthMonth: member.data()!.birthMonth,
                birthDay: member.data()!.birthDay,
                phoneNumFirst: member.data()!.phoneFirst,
                phoneNumSecond: member.data()!.phoneSecond,
                phoneNumThird: member.data()!.phoneThird,
                sex: member.data()!.sex,
            });
        }

    }
    const handleMemberReject = async () => {

    }

    const handleMemberDelete = async () => {

    }

    const years = generateYears(1950);
    const months = generateNumbers(12);
    const days = generateNumbers(31);
    return (
        <div className={'flex justify-center items-center w-full h-full mt-0.5 bg-gray-200'}>
            <div className={'admin-content bg-white shadow-2xl'}>
                <div className={'w-full p-10'}>
                    <h1 className={'text-3xl font-bold text-left'}>회원가입요청관리</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={'flex flex-row justify-center'}>
                        <div style={{
                            width: '90%',
                            height: '320px',
                            border: '1px solid #cccccc',
                            padding: '0px 40px 0px 40px',
                            gap: '20px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <div className={'flex flex-col w100pc'}>
                                <div className={'flex flex-row w100pc'}>
                                    <div style={{
                                        color: '#a2bb81',
                                        width: '88px',
                                        padding: '4px'
                                    }}>
                                        <h2>년도</h2>
                                    </div>
                                    <div className={'flex-col items-center'}>
                                        <select className={styles.selectBox}
                                                defaultValue={defaultYear} name={'selectYear'}>
                                            <option value={''}>년도</option>
                                            {
                                                years.map((item, index) => (
                                                    <option key={index} value={item}>{item}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className={'flex flex-row  w100pc'}>
                                    <div style={{
                                        color: '#a2bb81',
                                        width: '88px',
                                        padding: '4px'
                                    }}>
                                        <h2>소속교회</h2>
                                    </div>
                                    <div className={'flex-col items-center'}>
                                        <select className={styles.selectBox} defaultValue={defaultRegion} onChange={handleRegion}
                                                name={'selectRegion'}>
                                            <option value={''}>지역회</option>
                                            {
                                                dataRegion.map((item, index) => (
                                                    <option key={index} value={item.code}>{item.name}</option>
                                                ))
                                            }
                                        </select>
                                        <select className={styles.selectBox} defaultValue={defaultChurch} name={'selectChurch'}>
                                            <option value={''}>교회</option>
                                            {
                                                church.map((item, index) => (
                                                    <option key={index} value={item.code}>{item.name}</option>
                                                ))
                                            }
                                        </select>
                                        <select className={styles.selectBox} defaultValue={defaultDepartment}
                                                name={'selectDepartment'}>
                                            <option value={''}>부서</option>
                                            {
                                                dataDepartment.map((item, index) => (
                                                    <option key={index} value={item.code}>{item.name}</option>
                                                ))
                                            }
                                        </select>

                                    </div>
                                </div>
                            </div>
                            <div className={'flex flex-col  w100pc'}>
                                <div className={'w-full flex-col justify-between items-center mt-3'}>
                                    <label
                                        className={styles.labelSearch}>이&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;름</label>
                                    <input className={styles.inputBox} type={'text'} name={'userName'}
                                           placeholder={'이름'} onChange={handleInputChange} value={searchUserName}  />
                                </div>
                                <div className={'w-full flex-col justify-between items-center mt-3'}>
                                    <label
                                        className={styles.labelSearch}>섭&nbsp;&nbsp;&nbsp;리&nbsp;&nbsp;&nbsp;명</label>
                                    <input className={styles.inputBox} type={'text'} name={'proviName'}
                                           placeholder={'섭리명'} onChange={handleInputChange} value={searchProviName} />
                                </div>
                                <div className={'w-full flex-col justify-between items-center mt-3'}>
                                    <label className={styles.labelSearch}>생&nbsp;년&nbsp;월&nbsp;일</label>
                                    <select className={styles.selectBoxRow} defaultValue={defaultBirthYear} name={'birthYear'}>
                                        <option value={''}>년도</option>
                                        {
                                            years.map((item, index) => (
                                                <option key={index} value={item}>{item}</option>
                                            ))
                                        }
                                    </select>
                                    <select style={{width: '80px'}} className={styles.selectBoxRow} defaultValue={defaultBirthMonth}
                                            name={'birthMonth'}>
                                        <option value={''}>월</option>
                                        {
                                            months.map((item, index) => (
                                                <option key={index} value={item}>{item}</option>
                                            ))
                                        }
                                    </select>
                                    <select style={{width: '80px'}} className={styles.selectBoxRow} defaultValue={defaultBirthDay}
                                            name={'birthDay'}>
                                        <option value={''}>일</option>
                                        {
                                            days.map((item, index) => (
                                                <option key={index} value={item}>{item}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className={'w-full flex-col justify-between items-center mt-3'}>
                                    <label
                                        className={styles.labelSearch}>성&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;별</label>
                                    <span className="bg-chk">
                                        <input type="radio" id="male" name="sex" checked={sex === 'male'} value={"male"}
                                               onChange={handleSexChange}/><label htmlFor="male">남성 </label>
								    </span>
                                    <span className="bg-chk">
                                        <input type="radio" id="female" name="sex" checked={sex === 'female'}
                                               value={"female"} onChange={handleSexChange}/><label
                                        htmlFor="female">여성 </label>
								    </span>
                                </div>
                                <div className={'w-full flex-col justify-between items-center mt-3'}>
                                    <label className={styles.labelSearch}>연&nbsp;&nbsp;락&nbsp;&nbsp;처</label>
                                    <input className={styles.inputBoxPhone} type={'text'}
                                           name={'phoneFirst'} onChange={handleInputChange} value={searchPhoneFirst} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input className={styles.inputBoxPhone} type={'text'}
                                           name={'phoneSecond'} onChange={handleInputChange} value={searchPhoneSecond} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input className={styles.inputBoxPhone} type={'text'} name={'phoneThird'}
                                           onChange={handleInputChange} value={searchPhoneThird} />
                                </div>
                            </div>
                            <div className={'flex flex-col  w100pc items-center'}>
                                <button type={'submit'} className={styles.btnSearch}>검색</button>
                            </div>
                        </div>
                    </div>
                </form>
                <div className={'w-full p-10'}>
                    <table className={'text-center'}>
                        <thead className={'border-solid border-gray-200 border-b'}>
                        <tr style={{color: '#A2BB81'}}>
                            <th className={'p-3'}><input type={"checkbox"} name={"allChk"} onChange={handleCheck} /></th>
                            <th >년도</th>
                            <th>지역</th>
                            <th>교회</th>
                            <th>부서</th>
                            <th>이름</th>
                            <th>연락처</th>
                            <th>입금형태</th>
                            <th>입금자</th>
                            <th>입금날짜</th>
                            <th>입금시간</th>
                            <th>상태</th>
                        </tr>
                        </thead>
                        <tbody className={'border-solid border-gray-200 border-b'}>
                        {
                            data!.length > 0 ? data?.map((item, index) => (
                                <tr key={item.id} className={index % 2 === 1 ? 'bg-gray-200' : 'bg-white '}>
                                    <td className={'pt-3 pb-3'}><input type={"checkbox"} value={item.id} checked={selectedPostIds.includes(item.id)} onChange={()=> handlePostCheckBox(item.id)} /></td>
                                    <td className={'pt-3 pb-3'}>{item.year}</td>
                                    <td>{item.region}</td>
                                    <td>{item.church}</td>
                                    <td>{item.department}</td>
                                    <td>{item.userName}</td>
                                    <td>0{item.phoneFirst}-{item.phoneSecond}-{item.phoneThird}</td>
                                    <td>{item.payType === 'payFinish' ? '입금완료' : '입급예정'}</td>
                                    <td>{item.payer}</td>
                                    <td>{item.payDate}</td>
                                    <td>{item.payTime}</td>
                                    <td>{item.userStatusName}</td>
                                </tr>
                            )) : <tr>
                                <td colSpan={11} className={'pt-10 pb-10'}>조회 된 데이터가 없습니다.</td>
                            </tr>
                        }
                        </tbody>
                    </table>
                </div>
                <div className={'w-full flex justify-center items-center p-10'}>
                    <button type={'button'} onClick={handleMemberComplete}>회원가입 승인</button>
                    <button type={'button'} onClick={handleMemberReject}>거절</button>
                    <button type={'button'} onClick={handleMemberDelete}>삭제</button>
                </div>
            </div>
        </div>
    );
}

export default WithAuthAdmin(MembershipManagement);