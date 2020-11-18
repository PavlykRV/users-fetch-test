import { call, put, takeEvery } from 'redux-saga/effects';
import Api from '../api';

function* fetchUsers(action) {
  const { currentSince, quantity } = action.payload;

  try {
    const response = yield call(Api.fetchUsers, { currentSince, quantity });

    yield put({
      type: 'USERS_FETCH_SUCCEEDED',
      payload: { users: response.users, nextSince: response.nextSince },
    });
  } catch (e) {
    yield put({ type: 'USERS_FETCH_FAILED', message: e.message });
  }
}

function* fetchUser(action) {
  const { id } = action || {};
  try {
    const user = yield call(Api.fetchUser, id);

    yield put({ type: 'USER_FETCH_SUCCEEDED', payload: user });
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* usersSaga() {
  yield takeEvery('USERS_FETCH_REQUESTED', fetchUsers);
  yield takeEvery('USER_FETCH_REQUESTED', fetchUser);
}

export default usersSaga;
