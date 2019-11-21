import {
  take, put, call, fork, select,
} from 'redux-saga/effects';
import { message } from 'antd';
import * as actions from './action';
import * as api from '../../service/api';

function* contractReview(data) {
  const res = yield call(api.corsLogin, data);
  if (res.data.status === 1) {
    yield put(actions.dataFetch.success(res.data.data));
  } else {
    yield put(actions.dataFetch.failure(res.data.data));
    const { globalTipsModal } = yield select();
    if (!globalTipsModal) {
      yield message.error(res.data.msg);
    }
  }
}

function* watchContractReview() {
  while (true) {
    const { data } = yield take(actions.DATA_FETCH.REQUEST);
    yield fork(contractReview, data);
  }
}

export default watchContractReview;
