import React from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import {getUserProfile} from '../../redux/profileReducer'
import { withRouter } from 'react-router'
import { Redirect } from 'react-router-dom'

class ProfileContainer extends React.Component {

    componentDidMount() { 
        let userId = this.props.match.params.userId; // match - воспадение найдено
        if (!userId) { 
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        if (!this.props.isAuth) return <Redirect to = {'/login'}></Redirect>

        return (
            <Profile {...this.props} 
                profile = {this.props.profile}
                users = {this.users}></Profile>
        )
    }
}

let mapStateToProps = (state) => ({ //функция возвращает объект
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
})

let WithUrlDataContainerComponent = withRouter (ProfileContainer); //передаём информацию из url

export default connect (mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)