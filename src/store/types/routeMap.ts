
export interface RoutePointsState {
    routePoints: any[];
    loading: boolean;
    error: null | string;
}


export enum RoutePointsActionTypes {
    FETCH_ROUTE_POINTS = 'FETCH_ROUTE_POINTS',
    FETCH_ROUTE_POINTS_SUCCESS = 'FETCH_ROUTE_POINTS_SUCCESS',
    FETCH_ROUTE_POINTS_ERROR = 'FETCH_ROUTE_POINTS_ERROR',
}

interface FetchRoutePointsAction {
    type: RoutePointsActionTypes.FETCH_ROUTE_POINTS;
    payload: any
}

interface FetchRoutePointsSuccessAction {
    type: RoutePointsActionTypes.FETCH_ROUTE_POINTS_SUCCESS;
    payload: any[];
}

interface FetchRoutePointsErrorAction {
    type: RoutePointsActionTypes.FETCH_ROUTE_POINTS_ERROR;
    payload: string;
}

export type RoutePointsAction = FetchRoutePointsAction | FetchRoutePointsSuccessAction | FetchRoutePointsErrorAction