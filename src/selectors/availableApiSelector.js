import { createSelector } from 'reselect';

export const getAvailableApiSuccess = state => state.availableApi.api;
export const getAvailableApiLoading = state => state.availableApi.loading;
export const getAvailableApiError = state => state.availableApi.error;

function _apiState(loading, api, error) {
    return {
        loading, api, error
    }
}

export const availableApiState = createSelector(
    (state) => state.availableApi.loading,
    (state) => state.availableApi.api,
    (state) => state.availableApi.error,
    _apiState
);
