import axios from "axios";


export default (url= "https://notes-api.wisedev.xyz/api/v1/notes")=>{
    return axios.create({
        baseURL: url
    })
}