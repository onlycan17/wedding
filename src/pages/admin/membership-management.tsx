import React, {useEffect, useState} from "react";
import {db} from "@/pages/config/firbase-setting";
import {limit, orderBy, startAfter} from "@firebase/firestore";
import {collection, getDocs, query} from "firebase/firestore";
import WithAuthAdmin from "@/pages/common/with-auth-admin";
import {useQuery} from "react-query";
import selectRegion from "@/pages/common/function/select-region";
import selectChurch from "@/pages/common/function/select-church";
import selectDepartment from "@/pages/common/function/select-department";
import styles from '../../styles/css/membership.module.css';
import {dataRegion} from "@/pages/data/region";
import {dataChurch} from "@/pages/data/church";
import {dataDepartment} from "@/pages/data/department";


type Membership = {
    id: string;
    year: string;
    region: string;
    church: string;
    department: string;
    userName: string;
    email: string;
    proviName: string | null;
    birthYear: string;
    birthMonth: string;
    birthDay: string;
    phoneFirst: string;
    phoneSecond: string;
    phoneThird: string;
    payDate: string;
    payTime: string;
    payer: string;
    payType: string;
    userStatus: string;
    userStausName: string;
    createDate: string;
    agree1: boolean;
    agree2: boolean;
    agree3: boolean;
}
const fetchMembership = async (key: string, page: number, pageSize: number): Promise<Membership[]> => {

    let lastQuerySnapshot = null;
    if (page > 1) {
        const laastQuery = query(
            collection(db, "membershipApplication"),
            orderBy("createDate", "desc"),
            limit((page - 1) * pageSize),
        );
        lastQuerySnapshot = await getDocs(laastQuery);
    }

    let queryDate;
    if (lastQuerySnapshot === null) {
        queryDate = query(
            collection(db, "membershipApplication"),
            orderBy("createDate", "desc"),
            limit(pageSize),
        );
    } else {
        queryDate = query(
            collection(db, "membershipApplication"),
            orderBy("createDate", "desc"),
            limit(pageSize),
            startAfter(lastQuerySnapshot!.docs[lastQuerySnapshot!.docs.length - 1]),
        );
    }

    const querySnapshot = await getDocs(queryDate);
    if (querySnapshot.empty) {
        console.log('empty');
    }
    // querySnapshot.forEach((doc) => {
    //     console.log(`doc.id: ${doc.id} => ${JSON.stringify(doc.data())}`);
    // });
    querySnapshot.size;

    return querySnapshot.docs.map((doc) => ({
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
        userStausName: doc.data().userStausName,
        createDate: doc.data().createDate,
        agree1: doc.data().agree1,
        agree2: doc.data().agree2,
        agree3: doc.data().agree3,
    }));
}
const fetchTotalPostsCount = async (): Promise<number> => {
    const snapshot = await getDocs(collection(db, "membershipApplication"));
    return snapshot.docs.length;
};

const MembershipManagement: React.FC = () => {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [numberOfPages, setNumberOfPages] = useState(5);
    const [pageNumbersToShow, setPageNumbersToShow] = useState<number[]>([]);
    const {
        data,
        error,
        isLoading,
        isError,
        isFetching,
        isSuccess
    } = useQuery(['membership', page, pageSize], () => fetchMembership('mebership', page, pageSize), {
        staleTime: 1000 * 60 * 5, // 5분 동안 캐시된 데이터를 사용
        cacheTime: 1000 * 60 * 10, // 10분 동안 캐시된 데이터를 사용
    });
    const {data: totalPostsCount} = useQuery<number>('totalPostsCount', fetchTotalPostsCount);
    const totalPages = Math.ceil((totalPostsCount || 0) / pageSize);

    useEffect(() => {
        const startPage = Math.floor((page - 1) / 5) * 5 + 1;
        const endPage = Math.min(startPage + 4, totalPages);
        const numbers = [];
        for (let i = startPage; i <= endPage; i++) {
            numbers.push(i);
        }
        setPageNumbersToShow(numbers);
    }, [page, totalPages]);

    if (isLoading) {
        return <div>로딩중...</div>
    }
    if (isError) {
        return <div>에러가 발생했습니다.</div>
    }
    return (
        <div className={'flex justify-center items-center w-full h-full mt-0.5 bg-gray-200'}>
            <div className={'admin-content bg-white shadow-2xl'}>
                <div className={'w-full p-10'}>
                    <h1 className={'text-3xl font-bold text-left'}>회원가입요청관리</h1>
                </div>
                <div className={'flex flex-row justify-center'}>
                    <div style={{
                        width: '90%',
                        height: '260px',
                        border: '1px solid #cccccc',
                        padding: '0px 40px 0px 40px',
                        gap: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <div className={'flex flex-row  w100pc'}>
                            <div style={{
                                color: '#a2bb81',
                                width: '88px',
                                padding:'4px'
                            }} >
                                <h2>소속교회</h2>
                            </div>
                            <div className={'flex-col items-center p-2'}>
                                <select className={styles.selectBox}  defaultValue={''} >
                                    <option value={''}>지역회</option>
                                    {
                                        dataRegion.map((item, index) => (
                                            <option key={index} value={item.code}>{item.name}</option>
                                        ))
                                    }
                                </select>
                                <select className={styles.selectBox} defaultValue={''}>
                                    <option value={''} >교회</option>
                                    {
                                        dataChurch.map((item, index) => (
                                            <option key={index} value={item.code}>{item.name}</option>
                                        ))
                                    }
                                </select>
                                <select className={styles.selectBox} defaultValue={''}>
                                    <option value={''}>부서</option>
                                    {
                                        dataDepartment.map((item, index) => (
                                            <option key={index} value={item.code}>{item.name}</option>
                                        ))
                                    }
                                </select>

                            </div>
                            <div className={'w-full flex-col justify-between items-center mt-3'}>
                                <input type={'date'} name={'fromDate'} placeholder={'부터'}/>
                                <span> ~ </span>
                                <input type={'date'} name={'toDate'} placeholder={'까지'}/>
                                <input style={{width:'320px'}} className={styles.inputBox} type={'text'} name={'search'} placeholder={'검색어를 입력하세요.'}/>
                                <button
                                    className={'bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'}>검색
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={'w-full p-10'}>
                    <table className={'text-center'}>
                        <thead className={'border-solid border-gray-200 border-b'}>
                        <tr style={{color: '#A2BB81'}}>
                            <th className={'p-3'}>년도</th>
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
                        {data?.map((item, index) => (
                            <tr key={item.id} className={index % 2 === 1 ? 'bg-gray-200' : 'bg-white '}>
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
                                <td>{item.userStatus}</td>
                            </tr>
                        ))
                        }
                        </tbody>
                    </table>
                </div>
                <div className={'w-full text-center'}>
                    {page > 5 && <button onClick={() => setPage(page - 5)}>Prev</button>}
                    {pageNumbersToShow.map((pageNumber) => (
                        <button
                            key={pageNumber}
                            onClick={() => setPage(pageNumber)}
                            className={pageNumber === page ? 'text-white pl-3 pr-3 pt-2 pb-2 rounded-full' : 'text-white bg-gray-200 p-2 rounded-full'}
                            style={{backgroundColor: pageNumber === page ? '#A2BB81' : '#cccccc'}}
                        >
                            {pageNumber}
                        </button>
                    ))}
                    {(page + 4) < totalPages && <button onClick={() => setPage(page + 5)}>Next</button>}
                </div>
            </div>
        </div>
    );
}

export default WithAuthAdmin(MembershipManagement);