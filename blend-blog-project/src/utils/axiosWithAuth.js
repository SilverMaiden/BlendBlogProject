import axios from 'axios';

const BACKEND_HOST = "http://localhost:8000";

const axiosWithAuth = () => {
  console.log(BACKEND_HOST)
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL: `${BACKEND_HOST}/api/`,
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth;