import axios from "axios";
import { ref, toRefs, reactive, onMounted } from "vue";

const service = axios.create({
  baseURL: "/api",
  // baseURL:"http://10.134.40.171",
});

service.interceptors.request.use(
  (config) => {
    let token = sessionStorage.getItem("token");
    // console.log(token)
    if (token && token !== "") {
      config.headers["Authorization"] = token; // 让每个请求携带自定义token    请根据实际情况自行修改
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export function request(config) {
  return service(config);
}

// post and others
export const postData = async (config, state = {}) => {
  state.fetching = true;
  try {
    const res = await service(config);
    state.postData = res.data;
  } catch (err) {
    state.error = err;
    console.log("error of fetchData is: ", err);
  } finally {
    state.fetching = false;
  }
  return state;
};

// get
export const fetchData = async (config, state = {}) => {
  state.fetching = true;
  try {
    const res = await service(config);
    const responseData = res.data;

    state.responseCode = responseData.code;
    state.responseMsg = responseData.msg;
    state.responseData = responseData.data;
  } catch (err) {
    state.error = err;
    console.log("error of fetchData is: ", err);
  } finally {
    state.fetching = false;
  }
  return state;
};

export default service;
