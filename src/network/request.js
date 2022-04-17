import axios from "axios";
import { ref, computed, reactive, onMounted } from "vue";

export const instance = axios.create({
  baseURL: "/api",
});

// export const useFetch = (config) => {
//   const data = ref(null);
//   const response = ref(null);
//   const error = ref(null);
//   const loading = ref(null);

//   const fetch = async () => {
//     loading.value = true;
//     try {
//       const result = await instance.request(config);
//       response.value = result;
//       data.value = result.data;
//       if (data.value.code === 200) {
//         console.log(result.data);
//       }
//     } catch (err) {
//       error.value = err;
//     } finally {
//       loading.value = false;
//     }
//   };

//   // !config.skip && fetch();
//   fetch();
//   return { response, error, data, loading, fetch };
// };

export function request(config) {
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

  return instance(config);
}

export function useRequest(config) {
  // request interceptor
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

  const data = ref([]);

  instance(config)
    .then((res) => {
      if (res.data.code === 200) {
        // res = respoense.data.data;
        data.value = res.data.data;
      }
    })
    .catch((err) => console.log(err));

  return data;
}
