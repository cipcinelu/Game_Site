import {connect} from 'react-redux'
import { follow, unfollow, setCurrentPage,  reqestUsers } from '../../redux/usersReduces'
import React from 'react'
import Users from './Users'
import { withAuthRedirect } from '../../HOC/withAuthRedirect'
import { compose } from 'redux'
import {getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from '../../redux/usersSelectors'

class UsersContainer extends React.Component { //наследую реакт компаненту

    componentDidMount() {   //аякс запрос
                            //вызывается один раз при отрисовки этой страницы, после рендера          
        let {currentPage, pageSize} = this.props;
        this.props.reqestUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.reqestUsers(pageNumber, this.props.pageSize);
    }

    render() {     
        return <>
        <Users totalUsersCount={this.props.totalUsersCount}
                        pageSize = {this.props.pageSize}
                        currentPage = {this.props.currentPage}
                        onPageChanged = {this.onPageChanged} //экспорт функции проводится без пропса
                        users={this.props.users}
                        follow = {this.props.follow}
                        unfollow = {this.props.unfollow}
                        followingInProgress={this.props.followingInProgress}
                        isFetching = {this.props.isFetching}
                        ></Users>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state), //в компаненту придут юзеры, значениями которого будут юзеры из стейта
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state), // для сложных данных используются селекторы
        currentPage: getCurrentPage(state),         // они могут, фильтровать, считать и многое другое
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose (
    withAuthRedirect,
    connect(mapStateToProps, 
        {follow, unfollow,  //функция connect сама может диспатчить action creator
        setCurrentPage, //follow:follow (полностью писать не обязательно)
        reqestUsers})
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