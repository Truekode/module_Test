import {CheckPointsActionTypes} from "../types/checkPoints";

export const fetchCheckPoints = () => {
    return { type: CheckPointsActionTypes.FETCH_CHECK_POINTS }
};

export const fetchCheckPointsSuccess = (checkPoints: any[]) => {
    return { type: CheckPointsActionTypes.FETCH_CHECK_POINTS_SUCCESS, payload: checkPoints }
};

export const fetchCheckPointsError = (error) => {
    return { type: CheckPointsActionTypes.FETCH_CHECK_POINTS_ERROR, payload: error}
};