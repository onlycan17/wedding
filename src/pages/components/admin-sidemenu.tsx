import Link from "next/link";
import {color} from "ansi-fragments";

const AdminSidemenu : React.FC = () => {

    return (
        <div id="admin-sidemenu" style={{backgroundColor : '#695B4C', border : '1px solid #FFDAB6', height:'87vh'}} className={"w-64 scroll-auto mt-0.5"}>
            <div className={"w-full pd15"}>
                <div>
                    <ul>
                        <li className={'pt-2'}>
                            <Link href="/admin/home">
                                    <span className={'color-white'}>Home</span>
                            </Link>
                        </li>
                        <li className={'pt-2'}>
                            <Link href="/admin/membership-management">
                                    <span className={'color-white'}>회원가입요청관리</span>
                            </Link>
                        </li>
                        <li className={'pt-2'}>
                            <Link href="/admin/user-management">
                                    <span className={'color-white'}>회원관리</span>
                            </Link>
                        </li>
                        <li className={'pt-2'}>
                            <Link href="/admin/notice">
                                    <span className={'color-white'}>Notice</span>
                            </Link>
                        </li>
                        <li className={'pt-2'}>

                            <Link href="/admin/setting">
                                    <span className={'color-white'}>Setting</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AdminSidemenu;