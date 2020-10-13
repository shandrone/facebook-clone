import React from 'react';
import "./App.css"
import Feed from './Feed';
import Header from "./Header"
import Login from './Login';
import Sidebar from './Sidebar';
import { useStateValue } from './StateProvider';
import Widget from './Widget';


function App() {

  const [{user}, dispatch] = useStateValue();
  
  return (

     //if there are no user then show "Login" if user is logged in show mainpage
    <div className="app">      
      {!user? ( <Login /> ) : (
        <>
        <Header />

        <div className = "app_body">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
        </>
      )}   
    </div>
  );
}
                               
export default App;
