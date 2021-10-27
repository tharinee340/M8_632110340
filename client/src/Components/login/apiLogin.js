import axios from "axios";
import { loginFail, loginProcess, loginSuccess } from "./reducers";

export const login = async (dispatch, user) => {
    dispatch(loginProcess());
    try {
        const res = await axios.post("http://localhost:8080/auth/login", user)
        dispatch(loginSuccess(res.data))
    } catch (err) {
        dispatch(loginFail())
    }

}