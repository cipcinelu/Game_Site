import * as axios from 'axios' //экспортиуем всё и упаковываем в axios

const APIKEY = '9c45ec84-683b-4d62-99c7-c8771e607700'
let returnResponse = Response => Response.data;

const instance = axios.create({ // создаём инстанс (объект) аксиоса
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": APIKEY
    }
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(returnResponse)
    },
    follow (userId) {
        return instance.post (`follow/${userId}`)
            .then(returnResponse)
    },
    unfollow (userId) {
        return instance.delete (`follow/${userId}`)
            .then(returnResponse)
    },
}

export const profileApi = {
    getProfile (userId) {
        return instance.get(`profile/${userId}`)
            .then(returnResponse)
    },
    getStatus (userId) {    
        return instance.get(`profile/status/${userId}`)
        .then(returnResponse)
    },
    updateStatus (status) {
        return instance.put('profile/status/', {status: status})
        .then(returnResponse)
    },
}

export const authAPI = {
    me () {
        return instance.get ('auth/me/')
            .then (returnResponse)
    },
    login (email,password, rememberMe = false) {
        return instance.post ('auth/login/', {email,password, rememberMe})
            .then (returnResponse)
    },
    logout () {
        return instance.delete ('auth/login/')
            .then (returnResponse)
    }
}