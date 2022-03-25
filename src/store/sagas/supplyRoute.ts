import { call, put, takeEvery } from 'redux-saga/effects'
import RouteService from "../../API/RouteService";
import {AxiosResponse} from "axios";
import {SupplyRoutesActionTypes} from "../types/supplyRoute";
import {fetchSupplyRoutesError, fetchSupplyRouteSuccess} from "../actions/supplyActions";

function* fetchSupplyRoute() {
    try {
        const supplyRoute: AxiosResponse<any[]> = yield call(RouteService.getSupplyRoutes);
        yield put(fetchSupplyRouteSuccess(supplyRoute.data));
    } catch (e) {
        yield put(fetchSupplyRoutesError(e.message));
    }
}

function* supplyRouteSaga() {
    yield takeEvery(SupplyRoutesActionTypes.FETCH_SUPPLY_ROUTES, fetchSupplyRoute);
}

export default supplyRouteSaga;