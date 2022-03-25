
export interface CheckPointsState {
    checkPoints: any[];
    loading: boolean;
    error: null | string;
}


export enum CheckPointsActionTypes {
    FETCH_CHECK_POINTS = 'FETCH_CHECK_POINTS',
    FETCH_CHECK_POINTS_SUCCESS = 'FETCH_CHECK_POINTS_SUCCESS',
    FETCH_CHECK_POINTS_ERROR = 'FETCH_CHECK_POINTS_ERROR',
}

interface FetchCheckPointsAction {
    type: CheckPointsActionTypes.FETCH_CHECK_POINTS;
}

interface FetchCheckPointsSuccessAction {
    type: CheckPointsActionTypes.FETCH_CHECK_POINTS_SUCCESS;
    payload: any[];
}

interface FetchCheckPointsErrorAction {
    type: CheckPointsActionTypes.FETCH_CHECK_POINTS_ERROR;
    payload: string;
}

export type CheckPointsAction = FetchCheckPointsAction | FetchCheckPointsSuccessAction | FetchCheckPointsErrorAction