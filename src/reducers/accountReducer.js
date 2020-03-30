import { FETCH_ACCOUNT_SUCCESS } from '../actions/accountAction';
import { API_ERROR } from '../actions/errorAction';
import { API_LOADING } from '../actions/loadingAction';

const accountInitialState = {
    loading: false,
    account: {},
    error: null
};

function selectInterestedAccountInfo(account) {
    return Object.keys(account).reduce(function(obj, k) {
        if (["login", "url", "name", "created_at", "bio", "email", "public_repos"].includes(k)) {
            obj[k] = account[k];
        }
        return obj;
      }, {});
}

export function account(state = accountInitialState, action) {
    switch(action.type) {
        case API_LOADING:
            return {
                ...state,
                loading: true
            }
        case FETCH_ACCOUNT_SUCCESS:
            console.log("account state: before >>>>>>>>>>", state);
            const payloadAccount = selectInterestedAccountInfo(action.payload);
            state.account[payloadAccount.login] = payloadAccount;
            console.log("account state: after >>>>>>>>>>", Object.keys(state.account).length);
            return {
                ...state,
                loading: false
            }
        case API_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}

