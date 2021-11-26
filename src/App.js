import React, { useEffect, useState} from 'react';
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {useDispatch, useSelector} from "react-redux";
import {authCheck, setIsOut} from "./store/actions/users";
import {Spinner} from "react-bootstrap";
import Account from "./helpers/Account";


const App = () => {
    const dispatch = useDispatch()
    const {status,isAuth} = useSelector(store => store.users)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        dispatch(authCheck())
        if (status === "success") {
            setLoading(true)

        } else {
            setLoading(false)
        }
    }, [status,isAuth])
    return (
        <>
            {loading ? <Spinner animation={"grow"}/> : (
                <>
                    <NavBar/>
                    <AppRouter/>
                </>
            )}
        </>
    );
}
export default App;

