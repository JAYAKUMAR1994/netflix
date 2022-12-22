import Main from './Components/Main';
import NavBar from './Components/NavBar'
import LeftContent from './Components/LeftContent';
import FirstScroll from './Components/FirstScroll';

import { Provider } from 'react-redux';
import Store from './Store';
import Home from './Components/Home';
import { Route, Routes } from 'react-router';




function App() {
  return (
    <div >     
      <Provider store={Store}>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Main" element={<><Main/><NavBar /><LeftContent/><FirstScroll/></>}/>
        </Routes>        
      </Provider>
    </div>
  );
}

export default App;
