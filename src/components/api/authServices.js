import axios from "axios";
export function userLogin(endpoint, data) {
  return new Promise((resolve, reject) => {
    axios
      .post(endpoint, data)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}

export function userSignUp(endpoint, data) {
  return new Promise((resolve, reject) => {
    axios
      .post(endpoint, data)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}
