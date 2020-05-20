import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import EducationPage from './components/EducationPage'
import LandingPage from './components/LandingPage'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers/combineReducers';
import { createStore, applyMiddleware } from 'redux';


//  IF I WANTED TO USE REDUX PERSIST \/

// import rootReducer from './reducers';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'
// import { PersistGate } from 'redux-persist/lib/integration/react';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
// const persistConfig = {
//   key: 'root',
//   storage: storage,
//   stateReconciler: autoMergeLevel2,

// I could create a current user object and persist this and then have a logout/back button 
// where I clear the state of CurrentUser and uptdate again when they sign up

//   whitelist: ['currentUser']
//   };
// const persistedReducer = persistReducer(persistConfig, rootReducer);
// const store = createStore(
//   persistedReducer, composeEnhancers(
//     applyMiddleware(...middleware)
//   ));
// const persistor = persistStore(store);


const middleware = [thunk];
const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);


function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route exact path='/profile' component={EducationPage}/>
          </Switch>
        </div>
      </Router>
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
