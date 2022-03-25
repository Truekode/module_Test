import {combineReducers} from "redux";
import {checkPointsReducer} from "./checkPointsReducer";
import {supplyRouteReducer} from "./supplyRouteReducer";
import {RoutePointsState} from "../types/routeMap";
import {routePointsReducer} from "./routePointsReducer";


export const rootReducer = combineReducers({
    checkPoints: checkPointsReducer,
    supplyRoute: supplyRouteReducer,
    routePoints: routePointsReducer
})

export type RootState = ReturnType<typeof rootReducer>