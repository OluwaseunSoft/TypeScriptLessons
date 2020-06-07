import React from 'react';
//import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import NavBar from './navbar';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import HospitalSearch from './hospitalsearch';

function App() {
  return (
    <div>
        <AppBar color="primary" position="static">
          <Toolbar>
            <TypoGraphy variant={"h4"} color="inherit" >
            Hospital Finder <LocalHospitalIcon fontSize="large"></LocalHospitalIcon>
            </TypoGraphy> 
            <NavBar></NavBar>         
          </Toolbar>
        </AppBar>
        <HospitalSearch></HospitalSearch>
      </div>
  );
}

export default App;
