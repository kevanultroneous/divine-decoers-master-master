import axios from "axios";
// const api1  = "http://192.168.29.42:8000/api/"
const MainUrl = "http://13.237.164.114:8000/api/"
axios.defaults.baseURL = MainUrl

export const getAboutus = () =>{
    return axios.get('getaboutus')
}
export const InquireNow = (obj) =>{
    return axios.post('addinquiredata',obj)
}
export const getTemples = () =>{
    return axios.get('gettemples')
}
export const getTemplesForLimit = () =>{
    return axios.get('gettemples',{ params: { page:1,limit:8 } })
}
export const getTemplesPagignate = (page,limit) =>{
    return axios.get('gettemples',{ params: { page:page,limit:limit } })
}
export const GetTempleById = (id) =>{
    return  axios.get(`gettemplebyid/${id}`)
}