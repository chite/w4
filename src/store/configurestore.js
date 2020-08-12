import {createStore} from "redux"
import reducer from "../reducer/rootreducer";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// eslint-disable-next-line
if (module.hot && process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line
    module.hot.accept('../reducer/rootreducer', () => {
      store.replaceReducer(reducer);
    });
  }

export default store;