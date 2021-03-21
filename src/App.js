import React from 'react'
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar';
import Feed from './Feed'
import Login from './Login';
import Widget from './Widget'
import { useStateValue } from './StateProvider';

function App() {
  const[{user},dispatch]=useStateValue();

  return (
    <div className="App">
      {!user?(<Login/>):(
    <div> 
  <Header/>
<div className="app_body"> 
 <Sidebar/>
<Feed/>
<Widget/>
</div> </div>
      )}
           
         </div>
      
  );
}

export default App;
