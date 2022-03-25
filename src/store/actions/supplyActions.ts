import {SupplyRoutesActionTypes} from "../types/supplyRoute";

export const fetchSupplyRoute = () => {
    return { type: SupplyRoutesActionTypes.FETCH_SUPPLY_ROUTES }
};

export const fetchSupplyRouteSuccess = (supplyRoute: any[]) => {
    return { type: SupplyRoutesActionTypes.FETCH_SUPPLY_ROUTES_SUCCESS, payload: supplyRoute }
};

export const fetchSupplyRoutesError = (error) => {
    return { type: SupplyRoutesActionTypes.FETCH_SUPPLY_ROUTES_ERROR, payload: error}
};