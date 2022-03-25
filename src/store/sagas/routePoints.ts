import { call, put, takeEvery } from 'redux-saga/effects'
import RouteService from "../../API/RouteService";
import {AxiosResponse} from "axios";
import {fetchRoutePointsError, fetchRoutePointsSuccess} from "../actions/routePoints";
import {RoutePointsActionTypes} from "../types/routeMap";

function* fetchRoutePoints(args) {
    try {
        const routePoints: any[] = yield call(RouteService.getRoute, ...args.payload);
        yield put(fetchRoutePointsSuccess(routePoints));
    } catch (e) {
        yield put(fetchRoutePointsError(e.message));
    }
}

export function* routePointsSaga() {
    yield takeEvery(RoutePointsActionTypes.FETCH_ROUTE_POINTS, fetchRoutePoints);
}
