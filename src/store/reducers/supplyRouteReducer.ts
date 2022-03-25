import {SupplyRoutesAction, SupplyRoutesActionTypes, SupplyRouteState} from "../types/supplyRoute";

const initialState: SupplyRouteState = {
    supplyRoute: [],
    loading: false,
    error: null,
}

export const supplyRouteReducer = (state = initialState, action: SupplyRoutesAction):SupplyRouteState => {
    switch (action.type) {
        case SupplyRoutesActionTypes.FETCH_SUPPLY_ROUTES:
            return {...state, loading: true}
        case SupplyRoutesActionTypes.FETCH_SUPPLY_ROUTES_SUCCESS:
            return {...state, supplyRoute: action.payload, loading: false}
        case SupplyRoutesActionTypes.FETCH_SUPPLY_ROUTES_ERROR:
            return {...state, error: action.payload, loading:false}
        default:
            return state
    }
}