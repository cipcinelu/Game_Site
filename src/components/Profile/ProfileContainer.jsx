import React from 'react'
import Profile from './Profile'
import axios from 'axios'
import {connect} from 'react-redux'
import {setUserProfile} from '../../redux/profileReducer'
import { withRouter } from 'react-router'

const linkProfile = `https://social-network.samuraijs.com/api/1.0/profile/`

class ProfileContainer extends React.Component {

    
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
             userId = 2;
        }
          
        axios.get(linkProfile + userId)
        .then(response => {
            this.props.setUserProfile(response.data)
        });
    }

    render() {
        return (
            <Profile {...this.props} 
                        profile = {this.props.profile}
                        users = {this.users}></Profile>
        )
    }
}

let mapStateToProps = (state) => ({ //функция возвращает объект
    profile: state.profilePage.profile,
})

let WithUrlDataContainerComponent = withRouter (ProfileContainer); //передаём информацию из url

export default connect (mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)