import { call, put, takeEvery } from 'redux-saga/effects'
import RouteService from "../../API/RouteService";
import {CheckPointsActionTypes} from "../types/checkPoints";
import {AxiosResponse} from "axios";
import {fetchCheckPointsError, fetchCheckPointsSuccess} from "../actions/checkPoints";

function* fetchCheckPoints() {
    try {
        const checkPoints: AxiosResponse<any[]> = yield call(RouteService.getCheckPoints);
        yield put(fetchCheckPointsSuccess(checkPoints.data));
    } catch (e) {
        yield put(fetchCheckPointsError(e.message));
    }
}

function* checkPointSaga() {
    yield takeEvery(CheckPointsActionTypes.FETCH_CHECK_POINTS, fetchCheckPoints);
}

export default checkPointSaga;