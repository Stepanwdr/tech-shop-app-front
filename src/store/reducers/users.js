import {AUTH_CHECK, SET_IS_OUT, USER_LOGIN, USER_REGISTER} from '../actions/users';
import Account from '../../helpers/Account';
import jwtDecode from "jwt-decode";

const initialState = {
    error: {},
    chatUsersList: [],
    chatUsersListStatus: '',
    account: {},
    user: {},
    isAuth: false
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case  USER_REGISTER.REQUEST: {
            console.log(action, "request")
            return {
                ...state,
            };
        }
        case  USER_REGISTER.SUCCESS: {
            const {token} = action.payload.data;
            console.log(action, "success")
            return {
                ...state,
                token
            };
        }
        case USER_REGISTER.FAIL: {
            const {error} = action.payload.data;
            console.log(action, "fail")
            return {
                ...state,
                error
            };
        }

        case  USER_LOGIN.REQUEST: {
            console.log(action, "request")
            return {
                ...state,
            };
        }
        case USER_LOGIN.SUCCESS: {
            const {user, token} = action.payload.data;
            console.log(action, "success")
            Account.setToken(token);
            Account.set(user)
            return {
                ...state,
                account: user,
                isAuth: true
            };
        }
        case USER_LOGIN.FAIL: {
            const {error} = action.payload.data;
            console.log(action, "fail")
            return {
                ...state,
                error
            };
        }
        case  SET_IS_OUT: {
            const {isAuth} = action.payload
            return {
                ...state,
                isAuth
            };
        }
        case AUTH_CHECK.REQUEST: {
            const {status} = action.payload
            return {
                ...state,
                status
            };
        }
        case AUTH_CHECK.SUCCESS: {
            const {status} = action.payload
            const {token} = action.payload.data
            Account.setToken(token);
            return {
                ...state,
                status,
                isAuth: true,
            };
        }
        case AUTH_CHECK.FAIL: {
            const {error} = action.payload.data;
            console.log(action, "fail")
            return {
                ...state,
                error,
            };
        }
        default: {
            return state;
        }
    }
}
