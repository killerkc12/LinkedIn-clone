import React from 'react';
import { useSelector } from 'react-redux'
import './App.css';
import Feed from './Components/Feed/Feed';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Sidebar from './Components/Sidebar/Sidebar';
import { selectUser } from './features/userSlice';

function App() {
  
  const user = useSelector(selectUser)
  return (
    <div className="app">
      <Header/>
      {
         !user ? (
           <Login/>
         )
         :
         <div className="app_body">
            <Sidebar/>
            <Feed />
          </div>
      }
      
    </div>
  );
}

export default App;
