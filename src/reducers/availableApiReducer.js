import { FETCH_AVAILABLE_API_SUCCESS } from '../actions/availableApiAction';
import { API_ERROR } from '../actions/errorAction';
import { API_LOADING } from '../actions/loadingAction';

const availableApiInitialState = {
    loading: false,
    api: {},
    error: null
};

export function availableApi(state = availableApiInitialState, action) {
    switch(action.type) {
        case API_LOADING:
            return {
                ...state,
                loading: true
            }
        case FETCH_AVAILABLE_API_SUCCESS:
            console.log("api action >>>>>>>>>>", action);
            return {
                ...state,
                loading: false,
                api: action.payload
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

