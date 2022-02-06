import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'

import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import rootReducer from './store/store';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
