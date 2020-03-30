import { fetchAccountSuccess } from '../actions/accountAction';
import { apiError } from '../actions/errorAction';
import { apiLoading } from '../actions/loadingAction';

export default function fetchAccount(accountId) {
    return dispatch => {

        dispatch(apiLoading());

        fetch(`https://api.github.com/users/${accountId}`)
        .then(res => res.json())
        .then(res => {
            console.log(`${Date()} >>> fetch account api raw result: ` + JSON.stringify(res));
            if (res.error) {
                throw(res.error);
            }

            dispatch(fetchAccountSuccess(res));

            return res;
        })
        .catch(error => {
            dispatch(apiError(error));
        })
    }
}
