import Link from "next/link";

const AdminSidemenu : React.FC = () => {

    return (
        <div id="admin-sidemenu" className={"h-full bg-amber-50 w-60 scroll-auto mr-3 mt-0.5"}>
            <div className={"pd15"}>
                <div className="mb30">
                    <h1 className={"logo"}>
                        <Link href="/">logo</Link>
                    </h1>
                </div>
                <div className="">
                    <ul>
                        <li>
                            <Link href="/admin/home">
                                    <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/admin/membership-management">
                                    <span>회원가입요청관리</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/admin/user-management">
                                    <span>회원관리</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/admin/notice">
                                    <span>Notice</span>
                            </Link>
                        </li>
                        <li>

                            <Link href="/admin/setting">
                                    <span>Setting</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AdminSidemenu;