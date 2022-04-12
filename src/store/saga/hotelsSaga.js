import {put, takeEvery, call} from "redux-saga/effects"
import {FETCH_USERS, setUsers} from "../store/userReducer";

const fetchHotelsFromApi = () => fetch(url)

function* fetchHotelsWorker(url) {
    const data = yield call(fetchHotelsFromApi(url))
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(setUsers(json))
}

export function* userWatcher() {
    yield takeEvery(FETCH_USERS, fetchUserWorker)
}