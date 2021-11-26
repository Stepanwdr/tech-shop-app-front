import React from 'react';
import avatarImg from "../assets/images/adminAvatar.jpg"
import {Link} from "react-router-dom";
const ProfileDropDownMenu = (props) => {
    return (
        <div className={"drop-down"}>
            <div className={"drop-down__header"}>
                <img src={avatarImg} alt="" className={"drop-down__user-avatar"}/>
                <p className={"drop-down__user-name"}>Hello User</p>
            </div>
            <ul className={"drop-down__list"}>
                <li className={"drop-down__item"}>
                    <Link className={"drop-down__link"}>
                        My Orders
                    </Link>
                    <Link className={"drop-down__link"}>
                        My Wishes
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default ProfileDropDownMenu;