import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    AxiosError,
  } from "axios";
  
  export const baseURL = 'https://api.dictionaryapi.dev/api/v2/entries/en';
  const axiosInstance = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text/plain, */*",
    },
  });
  
  const onRequest = (request) => {

    return request;
  
  };
  
  const onRequestError = (error) => {
    return Promise.reject(error);
  };
  
  const onResponse = (response )=> {
    return response;
  };
  
  const onResponseError = async (error ) => {
    console.log("Error", error);
    // return Promise.reject(error);
  };
  

  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  
  export default axiosInstance;