import {CheckPointsAction, CheckPointsActionTypes, CheckPointsState} from "../types/checkPoints";

const initialState: CheckPointsState = {
    checkPoints: [],
    loading: false,
    error: null,
}

export const checkPointsReducer = (state = initialState, action: CheckPointsAction):CheckPointsState => {
    switch (action.type) {
        case CheckPointsActionTypes.FETCH_CHECK_POINTS:
            return {...state, loading: true}
        case CheckPointsActionTypes.FETCH_CHECK_POINTS_SUCCESS:
            return {...state, checkPoints: action.payload, loading: false}
        case CheckPointsActionTypes.FETCH_CHECK_POINTS_ERROR:
            return {...state, error: action.payload, loading:false}
        default:
            return state
    }
}