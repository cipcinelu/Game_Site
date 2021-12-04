import React from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import {getStatus, getUserProfile, updateStatus, savePhoto, saveProfile} from '../../redux/profileReducer'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import {withAuthRedirect} from '../../HOC/withAuthRedirect'

class ProfileContainer extends React.Component {

    refreshProfile () {
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

    componentDidMount () {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, PrevState, snapsot) { 
        if (this.props.match.params.userId !== prevProps.match.params.userId)
        this.refreshProfile()
    }

    render() {
        return (
            <Profile {...this.props} 
                profile = {this.props.profile}
                users = {this.users}
                status = {this.props.status}
                updateStatus = {this.props.updateStatus}
                owner = {!this.props.match.params.userId}
                savePhoto = {this.props.savePhoto}
                saveProfile = {this.props.saveProfile}
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
    connect (mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile,}),
    withRouter,     //передаём информацию из url
    withAuthRedirect
)(ProfileContainer)