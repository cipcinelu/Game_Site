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
            .then( Response => Response)
    },
    getStatus (userId) {    
        return instance.get(`profile/status/${userId}`)
        .then   (Response => Response)
    },
    updateStatus (status) {
        return instance.put('profile/status/', {status: status})
        .then(Response => Response)
    },
    savePhoto (photoFile) {     // аякс axios отправка фото
        const formData = new FormData();
        formData.append('image', photoFile)
        return instance.put('/profile/photo/', formData, {
            headers: {
                'Content-Type': 'myltipart/form-data'
            }
        })
    },
    saveProfile (profile) {     // аякс axios отправка фото
        return instance.put('profile/', profile)
        .then(Response => Response)
    },
}
export const authAPI = {
    me () {
        return instance.get ('auth/me/')
            .then (Response => Response)
    },
    login (email,password, rememberMe = false, captcha = false) {
        return instance.post ('auth/login/', {email,password, rememberMe, captcha})
            .then ( Response => Response)
    },
    logout () {
        return instance.delete ('auth/login/')
            .then (returnResponse)
    }
}
export const securityAPI = {
    getCaptchaUrl () {
        return instance.get (`security/get-captcha-url/`)
    }

}