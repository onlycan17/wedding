import WithAuth from "@/pages/common/with-auth";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import styles from "../../styles/css/main.module.css";
import Delighters from "@/pages/config/delights";
import CountUp from 'react-countup';
import {useInView} from "react-intersection-observer";
import GenderBarGraph from "@/pages/common/graph/gender";
import AgeBarGraph from "@/pages/common/graph/age";


const Main: React.FC = () => {
    const [play, setPlay] = useState(false);
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: false,
    });

    useEffect(() => {
        if (inView) {
            setPlay(true);
        }else{
            setPlay(false);
        }
    }, [inView]);

    const handleCountComplete = () => {
        console.log('count complete');
        setPlay(false);
    }

    return (
        <div>
            <div className={styles.fullSlide}>
                <div className="bd">
                    <Image src="/main/slide1.jpg" width={1920} height={1042} alt={""}/>
                    <div className="slide_txt">
                        <h2 className="animated  fadeInLeft delay-2s">The Eveleventh Blessing</h2>
                        <h1 className="animated  fadeInRight delay-2s">11기 </h1>
                        <p className="animated  fadeInUpBig delay-2s">
                            짝꿍에 오신 것을 환영합니다.<br/>
                            하늘의 뜻대로 소중한 짝꿍을 만나길 축복합니다.<br/>
                            사람이 그 부모를 떠나서 아내에게 합하여 <br/>
                            그 둘이 한 몸이 될지니라<br/>
                            (마19:5)
                        </p>
                    </div>
                </div>

                <div className="selelct_wrap">
                    <div className="select_box_group">
                        <div className="select_box">
                            <div className="main_select">
                                <div className="selected">
                                    <div className="selected-value">대화했던 상대</div>
                                    <div className="arrow"></div>
                                </div>
                                <ul>
                                    <li className="option">option 1</li>
                                    <li className="option">option 2</li>
                                    <li className="option">option 3</li>
                                </ul>
                            </div>
                        </div>
                        <div className="select_box on">프로필 보기 <i className="icons arrow-right"></i></div>
                        <div className="select_box">채팅신청 <i className="icons arrow-right"></i></div>
                        <div className="select_box">화상신청 <i className="icons arrow-right"></i></div>
                        <div className="select_box">만남신청 <i className="icons arrow-right"></i></div>
                    </div>
                </div>
            </div>


            <div className="section_wrap mt130 section2">
                <div className="inner">
                    <h2 className="title a-c bottom_small delighter started ended" data-delighter><span>Intro</span> 소개글</h2>
                </div>
                <p className="section2_text left_small delighter started ended" data-delighter>
                    <Image src="/main/section2_text.png" width="505" height="447" alt=""/>
                </p>
            </div>

            <div className="section_wrap mt120 section3">
                <div className="inner">
                    <h2 className="title a-c bottom_small delighter started ended" data-delighter><span>Notice</span> 공지사항</h2>
                </div>
                <div className="section3_bbs mt80">
                    <div className="flex-container">
                        <div className="flex-item  right_small delighter started ended" data-delighter>
                            <div className="bbs_box">
                                <h3 className="bbs_tit">공지사항공지사항</h3>
                                <h3 className="bbs_date">2022. 1. 1</h3>
                                <p>
                                    공지사항을 확인해주세요<br/>
                                    공지사항을 확인해주세요<br/>
                                    공지공ㄹㄴㄹㄴ<br/>
                                    ㄴㄹㄴㄹㄴㅇㄹㄴ<br/>
                                    ㄴㄹㅇㄴㄹㄴㄹㄴㄴ
                                </p>
                            </div>
                        </div>
                        <div className="flex-item  fade delighter started ended" data-delighter>
                            <div className="bbs_box">
                                <h3 className="bbs_tit">공지사항공지사항</h3>
                                <h3 className="bbs_date">2022. 1. 1</h3>
                                <p>
                                    공지사항을 확인해주세요<br/>
                                    공지사항을 확인해주세요<br/>
                                    공지공ㄹㄴㄹㄴ<br/>
                                    ㄴㄹㄴㄹㄴㅇㄹㄴ<br/>
                                    ㄴㄹㅇㄴㄹㄴㄹㄴㄴ
                                </p>
                            </div>
                        </div>
                        <div className="flex-item  left_small delighter started ended" data-delighter>
                            <div className="bbs_box">
                                <h3 className="bbs_tit">공지사항공지사항</h3>
                                <h3 className="bbs_date">2022. 1. 1</h3>
                                <p>
                                    공지사항을 확인해주세요<br/>
                                    공지사항을 확인해주세요<br/>
                                    공지공ㄹㄴㄹㄴ<br/>
                                    ㄴㄹㄴㄹㄴㅇㄹㄴ<br/>
                                    ㄴㄹㅇㄴㄹㄴㄹㄴㄴ
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-container">
                        <div className="flex-item  right_small delighter started ended" data-delighter>
                            <div className="bbs_box">
                                <h3 className="bbs_tit">공지사항공지사항</h3>
                                <h3 className="bbs_date">2022. 1. 1</h3>
                                <p>
                                    공지사항을 확인해주세요<br/>
                                    공지사항을 확인해주세요<br/>
                                    공지공ㄹㄴㄹㄴ<br/>
                                    ㄴㄹㄴㄹㄴㅇㄹㄴ<br/>
                                    ㄴㄹㅇㄴㄹㄴㄹㄴㄴ
                                </p>
                            </div>
                        </div>
                        <div className="flex-item  fade delighter started ended" data-delighter>
                            <div className="bbs_box">
                                <h3 className="bbs_tit">공지사항공지사항</h3>
                                <h3 className="bbs_date">2022. 1. 1</h3>
                                <p>
                                    공지사항을 확인해주세요<br/>
                                    공지사항을 확인해주세요<br/>
                                    공지공ㄹㄴㄹㄴ<br/>
                                    ㄴㄹㄴㄹㄴㅇㄹㄴ<br/>
                                    ㄴㄹㅇㄴㄹㄴㄹㄴㄴ
                                </p>
                            </div>
                        </div>
                        <div className="flex-item  left_small delighter started ended" data-delighter>
                            <div className="bbs_box">
                                <h3 className="bbs_tit">공지사항공지사항</h3>
                                <h3 className="bbs_date">2022. 1. 1</h3>

                                <p>
                                    공지사항을 확인해주세요<br/>
                                    공지사항을 확인해주세요<br/>
                                    공지공ㄹㄴㄹㄴ<br/>
                                    ㄴㄹㄴㄹㄴㅇㄹㄴ<br/>
                                    ㄴㄹㅇㄴㄹㄴㄹㄴㄴ
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="section_wrap mt130 section4">

                <div className="inner">
                    <h2 className="title a-c bottom_small delighter started ended" data-delighter><span>Works</span> 상황판</h2>
                </div>

                <div className="section4_cont mt110 ">
                    <h3 className="title a-c  bottom_small delighter started ended" data-delighter>남여비율</h3>


                    <div className="ratio_wrap mt35 fade delighter started ended" data-delighter>
                        <div className="item_ratio  ">
                            <p className="ratio_icon"><Image src="/main/ratio_icon_w.png" width={50} height={50}
                                                             alt=""/></p>
                            <p className="ratio_tit">여성</p>
                            <p className="ratio_num">
                                <span ref={ref} className="counter">
                                    {play && <CountUp start={0} end={1000} duration={1.5} />}
                                </span>명
                            </p>
                        </div>
                        <div className="item_ratio  ">
                            <p className="ratio_icon"><Image src="/main/ratio_icon_20.png" width={50} height={50}
                                                             alt=""/></p>
                            <p className="ratio_tit">20대</p>
                            <p className="ratio_num ">
                                <span className="counter">
                                    {play && <CountUp start={0} end={1000} duration={1.5} onCompleteCallback={handleCountComplete} />}
                                </span>명
                            </p>
                        </div>
                        <div className="item_ratio  ">
                            <p className="ratio_icon"><Image src="/main/ratio_icon_m.png" width={50} height={50}
                                                             alt=""/></p>
                            <p className="ratio_tit">남성</p>
                            <p className="ratio_num ">
                                <span className="counter">
                                    {play && <CountUp start={0} end={1000} duration={1.5} />}
                                </span>명
                            </p>
                        </div>
                        <div className="item_ratio  ">
                            <p className="ratio_icon"><Image src="/main/ratio_icon_30.png" width={50} height={50}
                                                             alt=""/></p>
                            <p className="ratio_tit">30대</p>
                            <p className="ratio_num ">
                                <span className="counter">
                                    {play && <CountUp start={0} end={1000} duration={1.5} />}
                                </span>명
                            </p>
                        </div>
                        <div className="item_ratio  ">
                            <p className="ratio_icon"><Image src="/main/ratio_icon_40.png" width={50} height={50}
                                                             alt=""/></p>
                            <p className="ratio_tit">40대</p>
                            <p className="ratio_num ">
                                <span className="counter">
                                    {play && <CountUp start={0} end={1000} duration={1.5} />}
                                </span>명
                            </p>
                        </div>
                    </div>
                    <h3 className="title a-c mt40 bottom_small delighter started ended" data-delighter>현재남은비율</h3>
                    <div className="ratio_graph_wrap ">

                        <div className="item_graph item_img right_big delighter started ended flex justify-center" data-delighter>
                            <Image src="/main/graph_img_m.png" width="231" height="231" alt=""/>
                        </div>

                        <div className="item_graph item_data bottom_small delighter started ended" data-delighter>
                            <div className="graph_tb_wrap">
                                <table className="graph_tb">
                                    <colgroup>
                                        <col width="16%"/>
                                        <col width="14%"/>
                                        <col width="40%"/>
                                        <col width="14%"/>
                                        <col width="16%"/>
                                    </colgroup>
                                    <thead>
                                    <tr>
                                        <th>100명</th>
                                        <td>55,6%</td>
                                        <td>채팅신청비율</td>
                                        <td>55.6%</td>
                                        <th>100명</th>
                                    </tr>
                                    <tr>
                                        <th>100명</th>
                                        <td>55,6%</td>
                                        <td>화상신청비율</td>
                                        <td>55.6%</td>
                                        <th>100명</th>
                                    </tr>
                                    <tr>
                                        <th>100명</th>
                                        <td>55,6%</td>
                                        <td>만남신청비율</td>
                                        <td>55.6%</td>
                                        <th>100명</th>
                                    </tr>
                                    <tr>
                                        <th>100명</th>
                                        <td>55,6%</td>
                                        <td>서류신청비율</td>
                                        <td>55.6%</td>
                                        <th>100명</th>
                                    </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>

                        <div className="item_graph item_img left_big delighter started ended flex justify-center" data-delighter>
                            <Image src="/main/graph_img_w.png" width="231" height="231" alt=""/>
                        </div>
                    </div>
                </div>

                {/*<link rel="stylesheet" href="/js/plugin/Animated-Bar/css/Vertical_bar.css"/>*/}
                {/*<script src="/js/plugin/Animated-Bar/js/jqbar.js" type="text/javascript"></script>*/}

                <div className="section4_cont2 ">
                    <div className="ratio_graph_wrap2  mt40">

                        <div className="item_graph_box right_big delighter started ended" data-delighter>
                            <div className="graph_box">
                                <h3 className="tit">만남가능 성별비율 </h3>
                                <div className="vertical_bar bar2">
                                    <div className="w-full flex">
                                        <div id="bar-1" className={"w-full flex m-[50px]"}>
                                            <GenderBarGraph />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item_graph_box left_big delighter started ended" data-delighter>
                            <div className="graph_box">
                                <h3 className="tit">만남가능 연령별 비율 </h3>
                                <div className="vertical_bar">
                                    <div id="vertical_bars" className="w-full flex">
                                        <div id="bar-3" className={"w-full flex m-[50px]"}>
                                            <AgeBarGraph />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'w-full flex justify-center'}>
                    <Image src="/main/quotes.png" width={26} height={20} alt=""/>
                </div>
                <p className="section4_bottom_txt">
                    분별하기전에 먼저 좋아해 <br/>버리면 , 그것이 나빠도<br/> 좋게 인식되어 뇌가 결정하여 좋게만 보고<br/>산다.
                </p>
            </div>
            <div className="section_wrap  section5">
                <div className="inner">
                    <h2 className="title a-c bottom_small delighter started ended" data-delighter><span>Schedule</span> 일정</h2>
                </div>

                <div className="section5_cont mt70">
                    <div className="section5_cont_box bottom_small delighter started" data-delighter>
                        <h3 className="tit  a-c mt20 ">현재일정</h3>

                        <div className="schedule_wrap mt70">
                            <div className="schedule_item_group ">

                                <div className="item_schedule">
                                    <p className="schedule_icon">
                                        <Image src="/main/schedule_icon1.png" width={50} height={50}
                                               alt=""/>
                                    </p>
                                    <p className="schedule_tit">서류접수</p>
                                    <p className="schedule_date">04. 05</p>
                                </div>
                                <div className="item_schedule">
                                    <p className="schedule_icon">
                                        <Image src="/main/schedule_icon2.png" width={50} height={50}
                                               alt=""/>
                                    </p>
                                    <p className="schedule_tit">1차 지역면담</p>
                                    <p className="schedule_date">04. 05</p>
                                </div>
                                <div className="item_schedule">
                                    <p className="schedule_icon"><Image src="/main/schedule_icon3.png" width={50}
                                                                        height={50}
                                                                        alt=""/></p>
                                    <p className="schedule_tit">교육</p>
                                    <p className="schedule_date">04. 05</p>
                                </div>
                                <div className="item_schedule">
                                    <p className="schedule_icon"><Image src="/main/schedule_icon4.png" width={50}
                                                                        height={50}
                                                                        alt=""/></p>
                                    <p className="schedule_tit">만남기간</p>
                                    <p className="schedule_date">04. 05</p>
                                </div>
                                <div className="item_schedule">
                                    <p className="schedule_icon"><Image src="/main/schedule_icon5.png" width={50}
                                                                        height={50}
                                                                        alt=""/></p>
                                    <p className="schedule_tit">서류신청</p>
                                    <p className="schedule_date">04. 05</p>
                                </div>
                                <div className="item_schedule">
                                    <p className="schedule_icon"><Image src="/main/schedule_icon6.png" width={50}
                                                                        height={50}
                                                                        alt=""/></p>
                                    <p className="schedule_tit">서약서결과</p>
                                    <p className="schedule_date">04. 05</p>
                                </div>
                                <div className="item_schedule">
                                    <p className="schedule_icon last"><Image src="/main/schedule_icon7.png" width={50}
                                                                             height={50}
                                                                             alt=""/></p>
                                    <p className="schedule_tit">성혼식</p>
                                    <p className="schedule_date">04. 05</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Delighters />
        </div>
    );
}

export default WithAuth(Main);