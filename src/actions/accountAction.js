export const FETCH_ACCOUNT_SUCCESS = 'FETCH_ACCOUNT_SUCCESS';

export function fetchAccountSuccess(account) {
    console.log(`${Date()} >>> fetchAccountSuccess account: ` + JSON.stringify(account));
    return {
        type: FETCH_ACCOUNT_SUCCESS,
        payload: account
    }
}

