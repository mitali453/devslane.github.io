import axios from "axios";
export const LS_AUTH_TOKEN = "auth_token"

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem(LS_AUTH_TOKEN);
    if(!token){
        return config;
    }
    return {...config , headers: {...config.headers , Authorization:token} }
})

axios.interceptors.response.use(undefined , (error) => {
    if(error.response.data.code === 9101){
        localStorage.removeItem(LS_AUTH_TOKEN);
        window.location.href = "/login";
    }
    return Promise.reject(error);
});
export{};