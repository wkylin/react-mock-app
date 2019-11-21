import { fork, all } from 'redux-saga/effects';
import watchContractReview from '../components/appLayout/saga';

export default function* rootSaga() {
  yield all([fork(watchContractReview)]);
}
