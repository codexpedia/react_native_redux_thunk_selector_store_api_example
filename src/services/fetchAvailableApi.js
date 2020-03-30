import { fetchAvailableApiSuccess } from '../actions/availableApiAction';
import { apiError } from '../actions/errorAction';
import { apiLoading } from '../actions/loadingAction';

export default function fetchAvailableApi() {
    return dispatch => {

        dispatch(apiLoading());

        fetch(`https://api.github.com/`)
        .then(res => res.json())
        .then(res => {
            console.log(`${Date()} fetch available api raw result: `, res);
            if (res.error) {
                throw(res.error);
            }

            dispatch(fetchAvailableApiSuccess(res));

            return res;
        })
        .catch(error => {
            dispatch(apiError(error));
        })
    }
}
