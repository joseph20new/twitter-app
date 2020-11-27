import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { routerReducer } from 'react-router-redux';
import { loadTranslations, setLocale, syncTranslationWithStore, i18nReducer,
} from 'react-redux-i18n';

import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import DefaultLayout from './DefaultLayout';

import { getLanguagesReducer } from './reducers/common/getLanguagesReducer';
import { getPersonReducer } from './reducers/common/getPersonReducer';
import { getTweetsReducer, } from './reducers/master/getTweetsReducer';

import MasterApp from './components/Master/MasterApp';
import { getLocales } from './actions/common/utilities'
import { getTweets } from './actions/master/actionsMaster';

import rootSaga from './sagas';

import './index.css';

const locales = getLocales();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducers({
    getLanguagesReducer,
    getPersonReducer,
    getTweetsReducer,
  routing: routerReducer,
  i18n: i18nReducer,
}),
    applyMiddleware(sagaMiddleware, thunk));

syncTranslationWithStore(store);
store.dispatch(loadTranslations(locales));
store.dispatch(getTweets());
store.dispatch(setLocale('en'));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <DefaultLayout exact path="/" component={() => <MasterApp product="tweet" />} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
