import {connect} from 'react-redux'
import { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching } from '../../redux/usersReduces'
import React from 'react'
import * as axios from 'axios' //экспортиуем всё и упаковываем в axios
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'

class UsersContainer extends React.Component { //наследую реакт компаненту

    componentDidMount() {   //аякс запрос
                            //вызывается один раз при отрисовки этой страницы, после рендера
            this.props.toggleIsFetching(true)
            
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setUsersTotalCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
        });
    }

    render() {     
        return <>
                {this.props.isFetching ? <Preloader/>: null}
        <Users totalUsersCount={this.props.totalUsersCount}
                        pageSize = {this.props.pageSize}
                        currentPage = {this.props.currentPage}
                        onPageChanged = {this.onPageChanged} //экспорт функции проводится без пропса
                        users={this.props.users}
                        follow = {this.props.follow}
                        unfollow = {this.props.unfollow}
                        ></Users>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users, //в компаненту придут юзеры, значениями которого будут юзеры из стейта
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId)); //мы диспатчим результат работы AC, а не его самого
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage:(pageNumber)=> {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount:(totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch (toggleIsFetchingAC(isFetching))
//         }
//     }
// }

export default connect (mapStateToProps, 
    {follow, unfollow, setUsers,  //функция connect сама может диспатчить action creator
    setCurrentPage, setUsersTotalCount, //follow:follow (полностью писать не обязательно)
    toggleIsFetching}) (UsersContainer);