import axios, {
  type AxiosInstance,
  type AxiosResponse,

} from "axios";


axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.timeout = 45000;
export const authInstance: AxiosInstance = axios.create();

authInstance.interceptors.response.use(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (response: AxiosResponse<any>) => {
    return response.data;
  },
  (error) => {
    const { response } = error;
    if (response) {
      const { data, status } = response;
      const errorMessage = data?.error || "An error occurred";
      const message = data?.message ?? "An error occurred, please try again";
      const statusCode = status || 500;
      return Promise.reject({ error: errorMessage, message, statusCode });
    }
    return Promise.reject(error);
  }
);