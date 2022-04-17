import axios from "axios";
import { ref, toRefs, reactive, onMounted } from "vue";

const instance = axios.create({
  baseURL: "/api",
});

instance.interceptors.request.use(
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
  return instance(config);
}

export const fetchData = async (state = {}, config) => {
  state.fetching = true;
  try {
    const res = await instance.request(config);
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

export const useFetch = (config) => {
  const state = reactive({
    responseCode: 0,
    responseMsg: "",
    responseData: [],
    fetching: false,
  });

  fetchData(state, config);
  return { ...toRefs(state) };
};

export { instance };
