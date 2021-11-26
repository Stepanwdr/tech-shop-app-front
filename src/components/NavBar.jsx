import React, {useEffect, useState} from 'react';
import {Button, Container, Image, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {NavLink, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setIsOut} from "../store/actions/users";
import adminAvatar from "../assets/images/adminAvatar.jpg"
import shoppingCart from "../assets/images/soppingCart.png"
import Account from "../helpers/Account";
import ProfileDropDownMenu from "./ProfileDropDownMenu";
import MiniCart from "./MiniCart";
const NavBar = () => {
 const history=useHistory()
    const dispatch=useDispatch()
    let token
    token=Account.getToken()
const user=Account.get()
    console.log(token,user)
 const [dropdown,setDropdown]=useState(false)
    const [miniCart,showMiniCart]=useState(false)
const dropDown=()=>{
     if(dropdown){
         setDropdown(false)

     }else {
         setDropdown(true)
         showMiniCart(false)
     }
}
const miniCartShow=()=>{
    if(miniCart){
        showMiniCart(false)

    }else {
        showMiniCart(true)
        setDropdown(false)
    }
    console.log(1)
    }

const signOut=()=>{
    history.push(LOGIN_ROUTE)
     Account.delete()
    dispatch(setIsOut(false))
}

useEffect(()=>{

},[token])

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to={SHOP_ROUTE} className={"nav__link"} ><h3>Lucky Shop</h3></NavLink>
                {token ?
                    <Nav className="ml-auto header__nav nav">
                        <Button variant={"outline-light"} onClick={()=>history.push(ADMIN_ROUTE)} className={"nav__btn"}>Admin panel</Button>
                        <Button variant={"outline-light"} onClick={()=>signOut()} className={"nav__btn"}>Sign Out</Button>
                        <div className={"nav__basket basket"} onClick={miniCartShow}>
                            <Image className={"basket__icon"} src={shoppingCart} width={35} height={35}/>
                            <span className={"basket__items-count"}>5</span>
                        </div>
                        {miniCart?<MiniCart/>:null}
                        <div className={"nav__avatar"} onClick={dropDown}>
                            <Image src={adminAvatar} alt="" width={35} height={35} className={"nav__avatar-img"}/>
                            <span className={"nav__name"}>{user.email.slice(0,6).toUpperCase()}</span>
                            <span className={"nav__role"}>{user.role}</span>
                            {dropdown?<ProfileDropDownMenu/>:null}
                        </div>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button variant={"outline-light"} className={"nav__btn"} onClick={()=>history.push(LOGIN_ROUTE)}>Authorization</Button>
                    </Nav>
                }

            </Container>
        </Navbar>
    );
};

export default NavBar;