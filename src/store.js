import { legacy_createStore } from 'redux';
const action = function () {
  return {
    type: 'buyCake',
    desc: 'happy cake',
  };
};
const initialState = { count: 10 };
const getReducer = function (state = initialState, action) {
  switch (action.type) {
    case 'buyCake':
      return { ...state, count: state.count - 1 };
  }
};
const store = legacy_createStore(getReducer);
store.subscribe(() => console.log(store.getState()));
store.dispatch(action());
export default store;
