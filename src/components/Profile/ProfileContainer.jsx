import React from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import {getStatus, getUserProfile, updateStatus} from '../../redux/profileReducer'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import {withAuthRedirect} from '../../HOC/withAuthRedirect'

class ProfileContainer extends React.Component {

    componentDidMount() { 
        let userId = this.props.match.params.userId; // match - воспадение найдено
        if (!userId) { 
            userId = this.props.authorizedUserId;
            if (!userId){
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} 
                profile = {this.props.profile}
                users = {this.users}
                status = {this.props.status}
                updateStatus = {this.props.updateStatus}
                ></Profile>
        )
    }
}

let mapStateToProps = (state) => ({ //функция возвращает объект
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose(
    connect (mapStateToProps, {getUserProfile, getStatus, updateStatus,}),
    withRouter,     //передаём информацию из url
    withAuthRedirect
)(ProfileContainer)