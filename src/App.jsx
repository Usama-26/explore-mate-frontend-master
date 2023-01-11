import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Login from "./components/Accounts/Login";
import Signup from "./components/Accounts/Signup";
import About from "./components/About";
import LoginAdmin from "./components/Admin/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Mission from "./components/Mission";
import Story from "./components/Story";
import Destinations from "./components/Destinations";
import Hotels from "./components/Hotels";
import Destination from "./components/Destination";
import Dashboard from "./components/Admin/Dashboard";
import Delete from "./components/Admin/Delete";
import Update from "./components/Admin/Update";
import Contact from "./components/Contact";
import Flights from "./components/Flights";
import ApiProvider from "./context/apiContext";
import { useEffect, useState } from "react";
import Place from "./components/Place";
import Hotel from "./components/Hotel";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      setIsLoggedIn(true);
      const userDataString = window.localStorage.getItem("user");
      setUser(JSON.parse(userDataString));
    }
  }, []);

  return (
    <Router>
      <ApiProvider>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<SharedLayout />}></Route>
          {!isLoggedIn ? (
            <>
              <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
            </>
          ) : (
            ""
          )}
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          {/* <Route path="/admin" element={<LoginAdmin />}></Route> */}
          <Route path="/mission" element={<Mission />}></Route>
          <Route path="/story" element={<Story />}></Route>
          <Route path="/hotels" element={<Hotels />}></Route>
          <Route path="/hotels/:id" element={<Hotel />}></Route>
          <Route path="/flights" element={<Flights />}></Route>
          <Route path="/places" element={<Destinations />}></Route>
          <Route path="/places/:id" element={<Place />}></Route>
          <Route path="/admin/dashboard" element={<Dashboard />}></Route>
          <Route path="/admin/delete" element={<Delete />}></Route>
          <Route path="/admin/update" element={<Update />}></Route>
        </Routes>
        <Footer />
      </ApiProvider>
    </Router>
  );
}

export default App;
