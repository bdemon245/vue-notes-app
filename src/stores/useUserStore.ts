import { defineStore } from 'pinia'
import NoteAPI from '../services/NoteAPI';
import Cipher from '../services/Cipher';


interface User {
    id?: number,
    name?: string,
    username?: string,
    email: string,
    email_verified_at?: string,
    created_at?:string,
    updated_at?:string,
}

const initialUser:User = {
    email: ""
}

//get the encrypted auth token from local storage
const secret = localStorage.getItem("authToken");
let token = "Unauthenticated"
if (secret) {
token = Cipher.reveal(secret)
} 
export const useUserStore = defineStore('user', {
    state: () => ({
        user: initialUser,
        authToken: token,
        email: {
            value: "",
            error : ''
        },
        password: {
            value: "",
            error: '',
            isVisible: false,
        },
        isAuth: false
    }),
    getters: {
        getUser():object{
            return this.user;
        },
        toggleVisibility(): Boolean{
            this.password.isVisible = !this.password.isVisible
            return !this.password.isVisible
        }
    },
    actions: {
        async login(){
            try {
                let user = {
                    email: this.email.value,
                    password: this.password.value,
                }
                let response = await  NoteAPI.login(user)
                if (response.status >= 200 && response.status < 300) {
                    //store user and token
                    this.user = response.data.data
                    this.authToken = response.data.token
                    this.isAuth = true
                    //clear error states
                    this.email.error = ""
                    this.password.error = ""
                    //encrypt the auth token and save it to local storage
                    let secretToken = Cipher.encrypt(this.authToken)
                    localStorage.setItem('authToken', secretToken)
                    return true;
                }
            } catch (error: any) {
                let status;
                if (error.response.status) {
                    status = error.response.status;
                }
                switch (status) {
                    case 500:
                        this.email.error = "User not found"
                        break;
                    case 404:
                        this.password.error ="Incorrect password"
                    default:
                        break;
                }
                return false;
            }
        }
    }
})