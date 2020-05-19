import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store.js';
import Home from './components/Fetch-api-data.js';
import 'antd/dist/antd.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home/>
      </div>
    </Provider>
  );
}

export default App;
