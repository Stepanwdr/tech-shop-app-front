import { GET_CHAT_USERS, LOGIN } from '../actions/users';
import Account from '../../helpers/Account';

const initialState = {
    token: Account.getToken(),
    account: Account.get(),
    chatUsersList: [],
    chatUsersListStatus: '',
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN.REQUEST:{
            return {
                ...state,
            };
        }
        case LOGIN.SUCCESS: {
            const { user, token } = action.payload.data;
            Account.set(user);
            Account.setToken(token);
            return {
                ...state,
                account: user,
                token,
            };
        }
        case LOGIN.FAIL:{
            const { error } = action.payload.data;
            return {
                ...state,
                   error
        };
        }

        default: {
            return state;
        }
    }
}
