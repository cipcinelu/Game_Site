import {connect} from 'react-redux'
import { follow, unfollow, setCurrentPage,  getUsers } from '../../redux/usersReduces'
import React from 'react'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import { withAuthRedirect } from '../../HOC/withAuthRedirect'
import { compose } from 'redux'

class UsersContainer extends React.Component { //наследую реакт компаненту

    componentDidMount() {   //аякс запрос
                            //вызывается один раз при отрисовки этой страницы, после рендера          
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
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
                        followingInProgress={this.props.followingInProgress}
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
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose (
    withAuthRedirect,
    connect(mapStateToProps, 
        {follow, unfollow,  //функция connect сама может диспатчить action creator
        setCurrentPage, //follow:follow (полностью писать не обязательно)
        getUsers})
)(UsersContainer)

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