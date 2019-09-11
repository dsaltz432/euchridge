import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createLogger } from 'redux-logger';
import { scoreboard } from './scoreboard/scoreboard.reducers';
import { onboarding } from './onboarding/onboarding.reducers';

export const createPlatformStore = config => {
  const persistConfig = {
    key: 'root',
    storage
  };

  const rootReducer = combineReducers({
    scoreboard,
    onboarding
  });

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const configureStore = () => {
    console.disableYellowBox = true;

    const middleware = [thunk];

    if (config.enableLogger) {
      middleware.push(createLogger());
    }

    const enhancers = compose(applyMiddleware(...middleware));
    const store = createStore(persistedReducer, enhancers);

    const persistor = config.isMobile ? null : persistStore(store);
    return { store, persistor };
  };

  return configureStore();
};
