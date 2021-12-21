import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_USER,
} from "../types/authTypes";
import Axios from "axios";
import cogoToast from "cogo-toast";

export const login = (loginData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const { data } = await Axios.post(
      `http://127.0.0.1:5000/api/v1/users/login`,
      loginData,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    dispatch({ type: LOGIN_SUCCESS, payload: data });

    cogoToast.success("Signed in succesfully").then(() => {
      console.log("Data after logging in", data);
      localStorage.setItem("authToken", data.token);
      window.location.href = "/";
    });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error });
  }
};

export const register = (registerData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const { data } = await Axios.post(
      `http://127.0.0.1:5000/api/v1/users/signup`,
      registerData,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    dispatch({ type: REGISTER_SUCCESS, payload: data });

    cogoToast.success("Registered succesfully").then(() => {
      window.location.href = "/";
    });
  } catch (error) {
    dispatch({ type: REGISTER_FAIL, payload: error.message });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT_USER });
  localStorage.removeItem("authToken");
};
