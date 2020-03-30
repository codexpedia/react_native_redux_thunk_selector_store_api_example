import { createSelector } from 'reselect';

export const getAccountSuccess = state => state.account.account;
export const getAccountLoading = state => state.account.loading;
export const getAccountError = state => state.account.error;

function _accountState(loading, acccount, error) {
    return {
        loading, acccount, error
    }
}

export const accountState = createSelector(
    (state) => state.account.loading,
    (state) => state.account.account,
    (state) => state.account.error,
    _accountState
);
