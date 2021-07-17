import React from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import {getStatus, getUserProfile, updateStatus} from '../../redux/profileReducer'
import { withRouter } from 'react-router'
import { withAuthRedirect } from '../../HOC/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {

    componentDidMount() { 
        let userId = this.props.match.params.userId; // match - воспадение найдено
        if (!userId) { 
            userId = 2;
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
})

export default compose(
    connect (mapStateToProps, {getUserProfile, getStatus, updateStatus,}),
    withRouter,     //передаём информацию из url
   // withAuthRedirect
)(ProfileContainer)