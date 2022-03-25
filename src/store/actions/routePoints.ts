import {RoutePointsActionTypes} from "../types/routeMap";

export const fetchRoutePoints = (args) => {
    return { type: RoutePointsActionTypes.FETCH_ROUTE_POINTS , payload: args}
};

export const fetchRoutePointsSuccess = (routePoints: any[]) => {
    return { type: RoutePointsActionTypes.FETCH_ROUTE_POINTS_SUCCESS, payload: routePoints }
};

export const fetchRoutePointsError = (error) => {
    return { type: RoutePointsActionTypes.FETCH_ROUTE_POINTS_ERROR, payload: error}
};