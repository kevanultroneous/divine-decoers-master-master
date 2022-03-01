import axios from "axios";

axios.defaults.baseURL = "http://192.168.1.28:8000/api/"

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
export const getTemplesById = (id) =>{
    return axios.get(`gettemples/${id}`)
}