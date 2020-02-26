import React from 'react';
// import logo from './logo.svg';
import Screen from '../containers/Screen';
import ButtonList from '../containers/ButtonList';
import History from '../containers/History';
import './App.css';


function App() {
  return (
    <div className="row">
      <div className="col-sm-12">
        <h3 className="mt-4"><i className="fa fa-calculator"/>Calculator React Redux</h3>
      </div>
      <div className="col-sm-8">
        <Screen />
      </div>
      <div className="col-sm-8">
        <h5>Buttons</h5>
        <ButtonList />
      </div>
      <div className="col-sm-4">
        <History />
      </div>
    </div>
  );
}

export default App;
