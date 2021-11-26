import React from 'react';
import {Switch,Route,Redirect} from "react-router-dom"
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/consts";
import Account from "../helpers/Account";
const AppRouter = () => {
const user=Account.get()
    return (
        <Switch>
            {user && authRoutes.map(({path,Component})=>
                <Route key={path} path={path} component={Component}  exact/>
            )}
            {publicRoutes.map(({path,Component})=>
            <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={SHOP_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;