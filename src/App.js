import HomeScreen from "./screens/HomeScreen";
import Nav from "./Nav";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from './screens/ProfileScreen'
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch ,useSelector} from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        ///loggedin
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //logged out
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, []);
  return (
    <div className="App">
      {/* <Nav /> */}
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/profile" element={<ProfileScreen />} />

          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
