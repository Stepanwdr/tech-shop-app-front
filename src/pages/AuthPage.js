import React, {useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {login, registration, setIsOut} from "../store/actions/users";
import Storage from "../trialFolder/Storage";
const AuthPage = () => {
    const dispatch=useDispatch()
    const location=useLocation()
    const history=useHistory()
    const {isAuth}=useSelector(store=>store.users)
    const isLogin=location.pathname===LOGIN_ROUTE
    const[password,setPassword]=useState()
    const[email,setEmail]=useState()
    if(!isAuth){
        Storage.delete()
    }
    const click=async ()=>{
        isLogin
            ?dispatch(await login(email,password))
            :dispatch(await registration(email,password))
          return history.push(SHOP_ROUTE)
        }
    return (
        <Container
            className={"d-flex justify-content-between align-items-center auth__content"}
            style={{height:window.innerHeight-58}}
        >

            <Card style={{width:600}} className={"p-lg-5"}>
                <Form className={"d-flex flex-column"}>
                    <h2 className={"m-auto"}>{isLogin ? "Authorization" : "Registration"}</h2>

                    <Form.Control value={email} placeholder={"Email"} className={"mt-3"} type={"email"} onChange={(ev)=>setEmail(ev.target.value)}/>
                    <Form.Control value={password} placeholder={"Password"} className={"mt-3"} type={"password"} onChange={(ev)=>setPassword(ev.target.value)}/>
<div className={"d-flex justify-content-between align-items-center"}>

    {isLogin ?
        <div>
            haven't Account ? <NavLink to={REGISTRATION_ROUTE}> <strong>Registration</strong></NavLink>
        </div>
        :
        <div>
            haven't Account ? <NavLink to={LOGIN_ROUTE}> <strong>Sign in</strong></NavLink>
        </div>
    }


    <Button variant={"outline-success"}
            className={"align-self-end mb-3 mt-3 mr-3 ml-3"}
            onClick={()=>click()}>

        {isLogin ? "Sign in" : "Registration"}


    </Button>

</div>


                </Form>
            </Card>
        </Container>
    );
};

export default AuthPage;