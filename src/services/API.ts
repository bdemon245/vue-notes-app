import axios from "axios";


export default (url= "https://notes-api.wisedev.xyz/api/v1/")=>{
    return axios.create({
        baseURL: url
    })
}