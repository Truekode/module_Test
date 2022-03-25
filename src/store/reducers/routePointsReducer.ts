import {RoutePointsState, RoutePointsActionTypes, RoutePointsAction} from "../types/routeMap";

const initialState: RoutePointsState = {
    routePoints: [],
    loading: false,
    error: null,
}

export const routePointsReducer = (state = initialState, action: RoutePointsAction):RoutePointsState => {
    switch (action.type) {
        case RoutePointsActionTypes.FETCH_ROUTE_POINTS:
            return {...state, loading: true}
        case RoutePointsActionTypes.FETCH_ROUTE_POINTS_SUCCESS:
            return {...state, routePoints: action.payload, loading: false}
        case RoutePointsActionTypes.FETCH_ROUTE_POINTS_ERROR:
            return {...state, error: action.payload, loading:false}
        default:
            return state
    }
}