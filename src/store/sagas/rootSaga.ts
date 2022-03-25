import { all } from 'redux-saga/effects'
import checkPointSaga from "./checkPoints";
import supplyRouteSaga from "./supplyRoute";
import {routePointsSaga} from "./routePoints";

export default function* rootSaga() {
    yield all([
        checkPointSaga(),
        supplyRouteSaga(),
        routePointsSaga()
    ])
}