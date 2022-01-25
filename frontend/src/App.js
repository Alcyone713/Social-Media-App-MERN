import { useEffect, createContext,useReducer, useContext } from 'react';
import './App.css';
import FirstPage from './components/FirstPage';
import SignIn from './components/SignIn';
import Signup from './components/Signup';
import {
  HashRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import MediaFeed from './components/MediaFeed';
import SideNav from './components/SideNav';
import MainPage from './components/MainPage';
import CreatePost from './components/CreatePost';



const Routing =()=>{
  return(
  <Routes>
          <Route path="/" element={<FirstPage />}>
            </Route>
            <Route path="mainpage" element={<MainPage />}>
            </Route>
            <Route path="signin" element={<SignIn />}>
            </Route>
            <Route path="signup" element={<Signup />}>
            </Route>
            <Route path="createpost" element={<CreatePost />}>
            </Route>
  </Routes>
  )
}

function App() {
  return (
    <div className="App">
      {/* <MediaFeed/> */}
      {/* <CreatePost/> */}
      <Router>
          <Routing/>
      </Router >
    </div >
  );
}

export default App;
