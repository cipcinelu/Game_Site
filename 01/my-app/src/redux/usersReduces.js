const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

// let photoUrls = [
//     'https://static.zerochan.net/Akazawa.Izumi.full.1016545.jpg',
//     'https://pm1.narvii.com/7078/aa72f616a419ae1468a04e61e7ca39b304caccc7r1-900-900v2_hq.jpg',
//     'https://i.pinimg.com/originals/d2/66/f3/d266f306a14882479953aef12c565005.jpg',
//     'https://i03.fotocdn.net/s117/81fd8c34ba0be8d0/user_l/2655050221.jpg'
// ];

let initialState = {
    users: [
        // {id:1, photoUrl: photoUrls[0], fullName: 'Dima', followed: true, status: 'I am boss of the gym', location: {city:'Moscow', country: 'Belarus'}},
        // {id:2, photoUrl: photoUrls[1], fullName: 'Kolia', followed: false, status: 'I am boss of the code', location: {city:'Moscow', country: 'Belarus'}},
        // {id:3, photoUrl: photoUrls[2], fullName: 'Vasia', followed: true, status: 'I am boss of the Minecraft', location: {city:'Moscow', country: 'Belarus'}},
        // {id:4, photoUrl: photoUrls[3], fullName: 'Pasha', followed: true, status: 'I am boss of the money', location: {city:'Moscow', country: 'Belarus'}},
        ]
};

const usersReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map (u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map (u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users] //к массиву старых юзеров дописываем новых
            }
        }
        
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type:UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;