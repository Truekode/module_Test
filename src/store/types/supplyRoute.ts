
export interface SupplyRouteState {
    supplyRoute: any[];
    loading: boolean;
    error: null | string;
}


export enum SupplyRoutesActionTypes {
    FETCH_SUPPLY_ROUTES = 'FETCH_SUPPLY_ROUTES',
    FETCH_SUPPLY_ROUTES_SUCCESS = 'FETCH_SUPPLY_ROUTES_SUCCESS',
    FETCH_SUPPLY_ROUTES_ERROR = 'FETCH_SUPPLY_ROUTES_ERROR',
}

interface FetchSupplyRoutesAction {
    type: SupplyRoutesActionTypes.FETCH_SUPPLY_ROUTES;
}

interface FetchSupplyRoutesSuccessAction {
    type: SupplyRoutesActionTypes.FETCH_SUPPLY_ROUTES_SUCCESS;
    payload: any[];
}

interface FetchSupplyRoutesErrorAction {
    type: SupplyRoutesActionTypes.FETCH_SUPPLY_ROUTES_ERROR;
    payload: string;
}

export type SupplyRoutesAction = FetchSupplyRoutesAction | FetchSupplyRoutesSuccessAction | FetchSupplyRoutesErrorAction