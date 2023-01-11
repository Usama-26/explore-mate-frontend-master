import { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { deleteData, getData, getOne, postData, updateData } from "../components/api/apiServices";
import { userLogin, userSignUp } from "../components/api/authServices";

export const ApiContext = createContext({});

export default function ApiProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const loginUser = async (data) => {
    try {
      const res = await userLogin("http://localhost:5000/api/auth/login", data);

      const { user, token } = res.data.data;
      setUser({ user, token });
      return { user, token };
    } catch (error) {
      console.error(error.res.data.message);
    }
  };

  const signupUser = async (data) => {
    try {
      const res = await userSignUp("http://localhost:5000/api/auth/signup", data);
      const { email } = res.data.data.newUser;
      res && loginUser({ email: email, password: data.password });
    } catch (error) {
      console.error(error.res.data.message);
    }
  };

  const getAllHotels = async () => {
    try {
      const response = await getData(`http://localhost:5000/api/hotels`);
      return response.hotels;
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  const getAllPlaces = async () => {
    try {
      const response = await getData(`http://localhost:5000/api/places`);
      return response.places;
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  const getPlace = async (id) => {
    try {
      const response = await getOne(`http://localhost:5000/api/places`, id);
      return response.place;
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  const getHotel = async (id) => {
    try {
      const response = await getOne(`http://localhost:5000/api/hotels`, id);
      return response.hotel;
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  useEffect(() => {
    user && window.localStorage.setItem("token", user.token);
    user && window.localStorage.setItem("user", JSON.stringify(user.user));
    user &&
      setTimeout(() => {
        navigate("/");
      }, 1000);
  }, [user]);
  return (
    <ApiContext.Provider value={{ user, loginUser, signupUser, getAllHotels, getAllPlaces, getPlace, getHotel }}>
      {children}
    </ApiContext.Provider>
  );
}
