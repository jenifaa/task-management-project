import axios, { AxiosInstance } from "axios";

const axiosSecure: AxiosInstance = axios.create({
  baseURL: "https://localhost:5000", 
});

const useAxiosSecure = (): AxiosInstance => {
  return axiosSecure;
};

export default useAxiosSecure;
