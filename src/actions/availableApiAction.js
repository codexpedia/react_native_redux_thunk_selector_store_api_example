export const FETCH_AVAILABLE_API_SUCCESS = 'FETCH_AVAILABLE_API_SUCCESS';

export function fetchAvailableApiSuccess(api) {
    console.log(`${Date()} fetchAvailableApiSuccess available api: `, api);
    return {
        type: FETCH_AVAILABLE_API_SUCCESS,
        payload: api
    }
}
