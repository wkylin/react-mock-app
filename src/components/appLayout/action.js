import {
  action,
  createRequestTypes,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../../utils/creatAction';

export const DATA_FETCH = createRequestTypes('DATA_FETCH');
export const dataFetch = {
  request: (data) => action(DATA_FETCH[REQUEST], { data }),
  success: (data) => action(DATA_FETCH[SUCCESS], { data }),
  failure: (error) => action(DATA_FETCH[FAILURE], { error }),
};
