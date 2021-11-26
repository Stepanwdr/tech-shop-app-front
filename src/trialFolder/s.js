import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {registration} from "../store/actions/users";


const Shop = () => {
    const {token}=useSelector(store=>(store.users))
    const formData={name:"gagas",email:"Stepand@maidl.ru",password:"qwert"}
    const dispatch=useDispatch()
    console.log(token,333)
    return (
        <div>
            <h1>Shop</h1>
            <button onClick={()=>dispatch(registration(formData))}>regitser</button>
        </div>
    );
};

export default Shop;