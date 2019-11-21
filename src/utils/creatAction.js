// 生成action
const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}

function action(type, payload = {}) {
  return {
    type,
    ...payload,
  };
}

export {
  action, createRequestTypes, REQUEST, SUCCESS, FAILURE,
};
